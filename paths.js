// Electrical-path and gas-flow overlay for the v8.2b r8 viewer (2026-11-12).
// Polylines come from models/v82r8_paths.json, built from the rev H KiCad tracks (BEAMLINE_V82.kicad_pcb) and the r8 assembly
// (needle axes, standoffs, posts, J7, gas fittings) in the CAD frame; they are added to `root` like the parts and drawn on top.
import * as THREE from 'three';

const COL = {
  CH1: 0xff4d1a, CH2: 0xffa36b, CH5: 0xb04dff, CH6: 0xd7a8ff, CH3: 0x1d5cff, CH4: 0x7aa7ff,
  SHT_VIN: 0x16b364, SHT_SDA: 0x16b364, SHT_SCL: 0x16b364, NTC_A: 0x00a6a6, NTC_B: 0x00a6a6, GND: 0xe0c000, gas: 0x00d5ff,
};
const hex = (c) => '#' + c.toString(16).padStart(6, '0');
// legend rows: [colour key, ko, en, status]  status: 'ok' = in the rev H / r8 files, 'q' = 미확인 (not in the files)
const LEG = {
  '3t': [
    ['CH1', 'CH1 위(앞) 전극 Force — 앞 바늘 [+X+Z] → 황동 판 → 스탠드오프 SO1 → PCB → W1 → 포스트 CH1 (빨강, Z −9.5) → BNC 어댑터',
      'CH1 top (front) Force — needle [+X+Z] → brass plate → standoff SO1 → PCB → W1 → post CH1 (red, Z −9.5) → BNC adapter'],
    ['CH2', 'CH2 위(앞) 전극 Sense — 앞 바늘 [−X+Z]·[+X−Z] → SO2·SO4 → W2 → 포스트 CH2 (검정, Z −28.6)',
      'CH2 top (front) Sense — needles [−X+Z], [+X−Z] → SO2, SO4 → W2 → post CH2 (black, Z −28.6)'],
    ['CH5', 'CH5 중간 전극 Force (MF) — 3T 판 바늘 MF → 링 단자 → 선 → N5 → W6 → 포스트 CH5 (빨강, 둘째 줄 Z −42.2)',
      'CH5 middle Force (MF) — 3T-plate needle MF → ring terminal → wire → N5 → W6 → post CH5 (red, 2nd row Z −42.2)'],
    ['CH6', 'CH6 중간 전극 Sense (MS) — 바늘 MS → 링 단자 → 선 → N6 → W7 → 포스트 CH6 (검정, Z +42.2)',
      'CH6 middle Sense (MS) — needle MS → ring terminal → wire → N6 → W7 → post CH6 (black, Z +42.2)'],
    ['CH3', 'CH3 아래(뒤) 전극 Force — 뒷핀 P1 (+X+Z)·P3 (−X−Z) → W3 → 포스트 CH3 (빨강, Z +9.5) → BNC 어댑터',
      'CH3 bottom (rear) Force — rear pins P1 (+X+Z), P3 (−X−Z) → W3 → post CH3 (red, Z +9.5) → BNC adapter'],
    ['CH4', 'CH4 아래(뒤) 전극 Sense — 뒷핀 P2 (−X+Z)·P4 (+X−Z) → W4 → 포스트 CH4 (검정, Z +28.6)',
      'CH4 bottom (rear) Sense — rear pins P2 (−X+Z), P4 (+X−Z) → W4 → post CH4 (black, Z +28.6)'],
  ],
  '2t': [
    ['CH1', 'CH1 앞 전극 Force — 앞 바늘 [+X+Z]·[−X−Z] → SO1·SO3 → W1 → 포스트 CH1 → BNC 어댑터',
      'CH1 front Force — needles [+X+Z], [−X−Z] → SO1, SO3 → W1 → post CH1 → BNC adapter'],
    ['CH2', 'CH2 앞 전극 Sense — 앞 바늘 [−X+Z]·[+X−Z] → SO2·SO4 → W2 → 포스트 CH2',
      'CH2 front Sense — needles [−X+Z], [+X−Z] → SO2, SO4 → W2 → post CH2'],
    ['CH3', 'CH3 뒤 전극 Force — 뒷핀 P1·P3 → W3 → 포스트 CH3 → BNC 어댑터', 'CH3 rear Force — rear pins P1, P3 → W3 → post CH3 → BNC adapter'],
    ['CH4', 'CH4 뒤 전극 Sense — 뒷핀 P2·P4 → W4 → 포스트 CH4', 'CH4 rear Sense — rear pins P2, P4 → W4 → post CH4'],
  ],
  common: [
    ['SHT_VIN', '센서 SHT45 (U1, PCB 윗면 X −39, Z +42) → J7 2 3.3 V · 3 SDA · 4 SCL (1 GND = PCB GND 면)',
      'SHT45 (U1, PCB top X −39, Z +42) → J7 2 3.3 V, 3 SDA, 4 SCL (1 GND = PCB ground plane)'],
    ['NTC_A', 'NTC (RT1, 인서트 안 Z +11.25) → J7 5 NTC_A · 6 NTC_B → 6심 선 → −X 벽 Ø4 구멍 → 외부 로거',
      'NTC (RT1, in the insert, Z +11.25) → J7 5 NTC_A, 6 NTC_B → 6-core cable → −X wall Ø4 hole → external logger'],
    ['GND', '몸체 접지 — W5 GND → 링 단자 → 몸체 −X 면 M3 (Y 12.6, Z −48.5) → 외부 접지선', 'Body ground — W5 GND → ring lug → body −X face M3 (Y 12.6, Z −48.5) → external ground'],
  ],
};
const NOTE_E = ['확인: 넷·패드·포스트 배정은 PCB rev H KiCad 파일(트랙 그대로)과 사양 문서 외부 연결 표. 미확인: 계측기 쪽 배정(K2400 HI/LO, 3T의 SMU 2대 배정), BNC 어댑터 중심/실드 극성, 외부 센서 로거 결선. 개략: W 패드–포스트 선, 3T 바늘 선(링 단자 → N5·N6), J7 6심 선의 모양(끝점만 CAD).',
  'Confirmed: net / pad / post assignment from the rev H KiCad file (tracks as routed) and the spec’s external-connection table. Unconfirmed (미확인): instrument side (K2400 HI/LO, the two SMUs in 3T), BNC-adapter centre/shield polarity, external sensor-logger wiring. Schematic: W-pad-to-post wires, 3T needle wires (ring terminal → N5/N6), the J7 cable shape (end points from CAD).'];
const NOTE_G = ['기체: 건조 N₂ → Ø4 PU 튜브 → +Z 벽 M5 원터치 피팅 입구 (X −30) → 공동(PET 필름 아래, 시료 위 ~ PCB 사이) → 출구 피팅 (X +30) → 배기. 피팅은 KQ2L04-M5A로 기록(모델은 KQ2H04-M5 형 외형 가정). 연구실 공급단은 1/4인치 → Ø4 이경 유니온 필요(형번 미확인). 공동 안 흐름선은 개략(CFD 아님). SHT45는 입구 쪽 −X +Z 모서리 PCB 위.',
  'Gas: dry N₂ → Ø4 PU tube → M5 push-in fitting in the +Z wall, inlet X −30 → cavity (under the PET film, over the sample, down to the PCB) → outlet fitting X +30 → exhaust. Fitting recorded as KQ2L04-M5A (model: KQ2H04-M5 outline assumed). Lab supply is 1/4" → a reducing union to Ø4 is needed (part not confirmed). Cavity streamlines are schematic, not CFD. SHT45 sits on the PCB at the −X +Z corner, on the inlet side.'];
const LABELS = { sht45: ['SHT45', 'SHT45'], ntc: ['NTC', 'NTC'], j7: ['J7', 'J7'], hole: ['센서선 Ø4', 'sensor Ø4'], gnd: ['접지', 'GND'],
  gas_in: ['N₂ 입구', 'N₂ in'], gas_out: ['출구 · 배기', 'out · exhaust'] };

export async function initPaths(ctx) {
  // ctx: { root, parts, getCfg, getLang, row, legend, marks, camera, beforeOn }
  const data = await fetch('models/v82r8_paths.json').then((r) => r.json());
  const grp = { elec: new THREE.Group(), gas: new THREE.Group() };
  grp.elec.visible = grp.gas.visible = false; ctx.root.add(grp.elec, grp.gas);
  const on = { elec: false, gas: false };
  const tracks = [];
  const sphere = new THREE.SphereGeometry(0.55, 10, 8), cone = new THREE.ConeGeometry(1.0, 2.8, 12);
  cone.rotateZ(-Math.PI / 2);   // point along +X, then oriented along the tangent
  for (const p of data.paths) {
    const kind = p.kind, key = kind === 'gas' ? 'gas' : p.net, c = COL[key] ?? 0xffffff;
    const v = p.pts.map((q) => new THREE.Vector3(...q));
    const cum = [0]; for (let i = 1; i < v.length; i++) cum.push(cum[i - 1] + v[i].distanceTo(v[i - 1]));
    const L = cum[cum.length - 1]; if (!(L > 0)) continue;
    const cp = new THREE.CurvePath(); for (let i = 1; i < v.length; i++) if (v[i].distanceTo(v[i - 1]) > 1e-6) cp.add(new THREE.LineCurve3(v[i - 1], v[i]));
    const r = kind === 'gas' ? (p.role === 'cavity' ? 0.35 : 0.9) : (p.role === 'sensor' || p.role === 'gnd' ? 0.2 : 0.3);
    const tube = new THREE.Mesh(new THREE.TubeGeometry(cp, Math.max(8, v.length * 6), r, 6, false),
      new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: kind === 'gas' && p.role === 'cavity' ? 0.35 : 0.55, depthTest: false, depthWrite: false }));
    tube.renderOrder = 900;
    const step = kind === 'gas' ? 7 : 4.5, n = Math.max(2, Math.round(L / step));
    const inst = new THREE.InstancedMesh(kind === 'gas' ? cone : sphere,
      new THREE.MeshBasicMaterial({ color: kind === 'gas' ? 0x0090c0 : c, depthTest: false, depthWrite: false, transparent: true, opacity: 0.95 }), n);
    inst.renderOrder = 901; inst.frustumCulled = false;
    const g = new THREE.Group(); g.add(tube, inst); grp[kind === 'gas' ? 'gas' : 'elec'].add(g);
    tracks.push({ p, g, v, cum, L, n, inst, speed: kind === 'gas' ? (p.role === 'cavity' ? 9 : 16) : 11 });
  }
  // HTML labels for sensor / port positions
  const labs = [];
  for (const [k, pos] of Object.entries(data.markers)) {
    const el = document.createElement('span'); el.className = k === 'gnd' ? 'plab below' : 'plab'; el.dataset.k = k; ctx.marks.append(el);
    const obj = new THREE.Object3D(); obj.position.set(...pos);
    labs.push({ k, el, obj, gas: k.startsWith('gas') });
  }
  for (const l of labs) ctx.root.add(l.obj);
  const mats = new Map();
  function xray(x) {   // see-through parts while a path layer is on
    for (const m of ctx.parts) {
      const mt = m.material;
      if (!mats.has(mt)) mats.set(mt, { t: mt.transparent, o: mt.opacity, d: mt.depthWrite });
      const o = mats.get(mt);
      if (x) { mt.transparent = true; mt.opacity = Math.min(o.o, 0.22); mt.depthWrite = false; } else { mt.transparent = o.t; mt.opacity = o.o; mt.depthWrite = o.d; }
      mt.needsUpdate = true;
    }
  }
  let lastCfg = null;
  function vis() {
    const cfg = ctx.getCfg(); lastCfg = cfg;
    for (const t of tracks) t.g.visible = t.p.cfg.includes(cfg);
    grp.elec.visible = on.elec && !ctx.exploded(); grp.gas.visible = on.gas && !ctx.exploded();
    xray(on.elec || on.gas);
    legend();
  }
  const btn = {};
  let fold = innerWidth <= 600;
  function buttons() {
    ctx.row.querySelectorAll('button').forEach((b) => b.remove());
    const lang = ctx.getLang();
    for (const [k, ko, en] of [['elec', '전기 경로', 'Electrical paths'], ['gas', '기체 흐름', 'Gas flow']]) {
      const b = document.createElement('button'); b.className = 'pbtn ' + k; b.textContent = lang === 'ko' ? ko : en;
      b.setAttribute('aria-pressed', String(on[k]));
      b.onclick = () => { on[k] = !on[k]; b.setAttribute('aria-pressed', String(on[k])); if (on[k]) ctx.beforeOn(); vis(); };
      ctx.row.append(b); btn[k] = b;
    }
  }
  function legend() {
    const lang = ctx.getLang(), ko = lang === 'ko', cfg = ctx.getCfg(), el = ctx.legend;
    if (!on.elec && !on.gas) { el.hidden = true; return; }
    el.hidden = false;
    const sw = (c) => `<i class="sw" style="background:${hex(c)}"></i>`;
    let h = `<div class="lh"><b>${ko ? '범례' : 'Legend'}</b><button class="lx">${ko ? '접기' : 'Fold'}</button></div><div class="lb">`;
    if (on.elec) {
      h += `<div class="lt">${ko ? (cfg === '3t' ? '전기 경로 · 3T (6채널)' : '전기 경로 · 2T·4T (CH1–CH4, CH5·CH6 안 씀)') : (cfg === '3t' ? 'Electrical · 3T (6 channels)' : 'Electrical · 2T/4T (CH1–CH4; CH5, CH6 unused)')}</div>`;
      for (const [k, a, b] of [...LEG[cfg], ...LEG.common]) h += `<div class="lr">${sw(COL[k])}<span>${ko ? a : b}</span></div>`;
      h += `<div class="lr q"><span class="mq">${ko ? '미확인' : '미확인'}</span><span>${ko ? '계측기 배정 (K2400 HI/LO' + (cfg === '3t' ? ', SMU 2대' : '') + '), BNC 중심/실드 극성, 외부 로거 결선' : 'instrument side (K2400 HI/LO' + (cfg === '3t' ? ', two SMUs' : '') + '), BNC centre/shield polarity, external logger wiring'}</span></div>`;
      h += `<div class="ln">${ko ? NOTE_E[0] : NOTE_E[1]}</div>`;
    }
    if (on.gas) h += `<div class="lt">${ko ? '기체 흐름' : 'Gas flow'}</div><div class="lr">${sw(COL.gas)}<span>${ko ? NOTE_G[0] : NOTE_G[1]}</span></div>`;
    h += '</div>';
    el.innerHTML = h;
    el.classList.toggle('fold', fold);   // phones open folded so the model stays visible
    const bx = el.querySelector('.lx'); bx.textContent = fold ? (ko ? '펼치기' : 'Open') : (ko ? '접기' : 'Fold');
    bx.onclick = () => { fold = !fold; legend(); };
  }
  const _m = new THREE.Matrix4(), _q = new THREE.Quaternion(), _p = new THREE.Vector3(), _t = new THREE.Vector3(), _x = new THREE.Vector3(1, 0, 0), _s = new THREE.Vector3(1, 1, 1);
  function at(t, s, out, tan) {
    let i = 1; while (i < t.cum.length - 1 && t.cum[i] < s) i++;
    const a = t.v[i - 1], b = t.v[i], seg = t.cum[i] - t.cum[i - 1], f = seg > 0 ? (s - t.cum[i - 1]) / seg : 0;
    out.lerpVectors(a, b, f); tan.subVectors(b, a).normalize();
  }
  let time = 0, prev = performance.now();
  const _w = new THREE.Vector3();
  function tick() {
    const now = performance.now(), dt = Math.min(0.1, (now - prev) / 1000); prev = now; time += dt;
    if (ctx.getCfg() !== lastCfg) vis();
    const ex = ctx.exploded(); grp.elec.visible = on.elec && !ex; grp.gas.visible = on.gas && !ex;
    for (const t of tracks) {
      if (!t.g.visible || !(t.p.kind === 'gas' ? grp.gas.visible : grp.elec.visible)) continue;
      const off = (time * t.speed) % (t.L / t.n);
      for (let k = 0; k < t.n; k++) {
        const s = (off + k * t.L / t.n) % t.L; at(t, s, _p, _t);
        if (t.p.kind === 'gas') _q.setFromUnitVectors(_x, _t); else _q.identity();
        _m.compose(_p, _q, _s); t.inst.setMatrixAt(k, _m);
      }
      t.inst.instanceMatrix.needsUpdate = true;
    }
    const lang = ctx.getLang();
    for (const l of labs) {
      const show = (l.gas ? grp.gas.visible : grp.elec.visible);
      if (!show) { l.el.style.display = 'none'; continue; }
      l.obj.getWorldPosition(_w); _w.project(ctx.camera);
      if (_w.z > 1) { l.el.style.display = 'none'; continue; }
      l.el.style.display = ''; l.el.textContent = LABELS[l.k][lang === 'ko' ? 0 : 1];
      l.el.style.left = ((_w.x + 1) / 2 * innerWidth) + 'px'; l.el.style.top = ((1 - _w.y) / 2 * innerHeight) + 'px';
    }
  }
  buttons(); vis();
  return { tick, rebuild: () => { buttons(); legend(); }, refresh: vis, on };
}
