# 빔라인 시료 셀 3D · Beamline sample cell 3D

보기 / View: https://donghyeonlee98.github.io/beamline-cell-3d/

부산대 이동현. APS 2-ID-D (2026년 12월) 빔라인 시료 셀 **v4.7 rev A (2026-11-04: 3T 기본 + 양면 뒤 빛 + PL(FS5) 맞춤, 2T는 mid 블록만 뺌, 가스 출구 −X 옆면, Fable 검토 반영)**의 3D 보기.
Donghyeon Lee, Pusan National University. 3D viewer of the beamline sample cell **v4.7 rev A (2026-11-04: 3T base + bifacial rear light + fits the FS5 PL compartment; 2T = mid block removed; gas outlet on the −X side; Fable review applied)** for APS 2-ID-D (December 2026).

## v4.7 rev A

- 3T 누름 판(홈 11)·멈춤 링을 2T와 같이 쓴다. FS5용 Al 변환판 60×60×6 (M4 48×48 + M3 40×40). 배기 관 경로(엘보 → 배기 블록)는 미해결.
- 3T hold-down plate (11 grooves) and stop ring shared by 2T and 3T; Al adapter plate 60×60×6 for the FS5 (M4 48×48 + M3 40×40). Exhaust-tube route (elbow → exhaust block) still open.

## v4.6m 기준 설명 / notes from v4.6m

- **재질 표현**: 몸체 Al 6061 흑색 아노다이징, 인서트·탐침 블록·덮개·멈춤 링 PEEK 자연색, 누름 판·텐트 틀 Al, BeCu 바늘, 금 도금 스프링 핀, Ag 패드, PET 12 µm 필름 텐트. 색·질감은 재질 기준 표현이고 형상은 설계 모델(STEP 치수)이다.
- **보기**: 셀 5종 (탠덤 3T 기본 / 탠덤 2T 뒤 빛 퍽 / 2T 어두운 마개 / 싱글 ITO / 싱글 FTO), 비스듬히·정면·탐침 확대·웨이퍼 확대·단면·뒷면·판·브래킷, 분해 슬라이더, X 단면 슬라이더, 필름 텐트·Grace 판·배기 블록·커넥터 브래킷·선 켜고 끄기, 부품을 누르면 CAD 이름과 재질, 두 번 누르면 그 점을 중심으로 회전. 주소 끝 `#3t&probe`처럼 셀과 보기를 지정할 수 있다.
- **점검 (CAD)**: 검출기 315 광선 차단 0, 검출기 쪽 최소 여유 0.517 mm (누름 판).
- **Materials**: black-anodised Al 6061 body; natural PEEK insert, probe blocks, covers and stop ring; Al hold-down plate and tent frame; BeCu needles; gold-plated spring pins; Ag pads; PET 12 µm film tent. Colours follow the real materials; geometry is the design model (STEP dimensions).
- **Viewer**: 5 cells (tandem 2T with rear light puck / tandem 2T with dark plug / single ITO / single FTO / tandem 3T); 3/4, front, probe close-up, wafer close-up, section, back and plate + bracket views; explode and X-section sliders; toggles for the film tent, Grace plate, exhaust block, connector bracket and wires; tap a part for its CAD name and material, double-tap to orbit around it. URL hash such as `#3t&probe` picks cell and view.
- **Checks (CAD)**: 315 detector rays, 0 blocked; minimum detector-side clearance 0.517 mm (hold-down plate).

이전 판 (v3.3, v4.3.1 albedo, PL N₂ 셀, RBC-2EP): [v33.html](https://donghyeonlee98.github.io/beamline-cell-3d/v33.html). 아래는 그 판의 설명이다.
Earlier versions (v3.3, v4.3.1 albedo, PL N₂ cell, RBC-2EP): [v33.html](https://donghyeonlee98.github.io/beamline-cell-3d/v33.html). The notes below describe that page.

## 한국어

APS 2-ID-D 빔라인 시료 셀 v3.3 — 25 mm 셀을 자르지 않고 통째로 장착. 뒷면 스프링 핀 4 + 앞면 바늘 탐침 4 (3T: 6). 몸체 뒷면 M4 4개, 48 × 48 mm = Nextron RBC-2EP와 같은 구멍 배치 → 판 하나로 둘 다 단다. CPI/PET 필름 텐트 안에 He. PCB 없음.

- **기체·탐침**: He는 윗면 (+x)으로 들어가 아랫면 피팅으로 나가 SHT45가 든 배기 T로 간다. 텐트 11.9 mL, 50 mL/min에서 3τ = 43 s. 웨이퍼 아래 NTC. 바늘 EverBeing BC20-2000 BeCu Ø0.5 (0.5 mm에서 0.2 N).
- **v4.3.1 albedo (옵션)**: 뒤 창 Ø16 둥근 창 유지 + 940 nm LED 퍽(Grace 판 Ø33 구멍 필요). 확산판 Ø20을 웨이퍼 쪽 Y 10.5로 당기고 몸체 뒷면에 Ø20 카운터보어를 파서 같은 확산판 휘도에서 가운데 조도 +55 % (구석 균일도는 그대로). 기본은 어두운 마개이고 이제 Ø29 턱 + M2×4 두 개로 퍽과 같은 탭에 나사 고정(실리콘 패드 1.0 → 0.7 눌림, 공차 ±0.15에서도 예압 > 0). 마개 뒷면 가운데 M3 탭은 뽑는 손잡이. 퍽 탭은 r 12.0, 원판 공구 구멍 Ø3.2. 보기: “뒤 빛 퍽 ↔ 마개” 토글, “v4.3.1 뒤에서” 버튼 (탠덤 2T만).
- **PL N₂ 셀**: FS5 SC-10 자리용 56 × 62 × 8, 같은 인서트·틀·블록·DB15, N₂ 위 입구·옆 출구, 높이 85 mm. 점선 상자 = FS5형 시료 칸 개략 120 × 180 × 100 (사진 추정 ±30 %), 옆벽 타원 = 거울 자리 (가정).
- **점검 (CAD)**: 간섭 0, 검출기 315 광선 차단 0, 바늘 여유 0.51 mm, 우물 0.70 (웨이퍼 0.3–0.6 mm).
- **모델**: 탠덤 2T (KIER, 핀 4 + 바늘 4), 싱글 (유리 1.1 mm용 인서트, 핀 없음, 바늘 4), 탠덤 3T (mid 2바늘 블록 추가, 바늘 6), RBC-2EP 챔버를 같은 Grace 판·브래킷에 단 모습, 이전안 평판 셀 v2 (10/27, 회색, v3.3로 대체). v3.3 (최종): SHT45를 셀 밖 배기 T (40 mm 아래)로, 출구 홈 없앰, 웨이퍼 아래 NTC, BC20-2000 바늘 + V홈 블록·2 mm 덮개. DB15: 1–4 뒷면 핀, 5–8 앞 바늘, 9–10 NTC, 11–12 PD 예비, 13–14 mid, 15 실드.
- **흐름 시각화**: 기체 입구→출구 애니메이션, 배선 경로 색 = DB15 핀 그룹 (“흐름” 버튼, 주소 끝 #wc_3t&flows).
- **보기**: 끌어서 회전, 분해 슬라이더, 필름 텐트 / Grace 판·브래킷 켜고 끄기, 빔·빛·검출기 방향 (X선 +y 수평, 광 −x 45°, 검출기 +x 60°), He 흐름 화살표 (기체), 부품을 누르면 이름.
- **RBC-2EP 챔버**: 업체 외형의 바깥 크기만 상자로 그린 포락선이다 (몸체 62 × 62 × 34.6 mm + 위·아래 포트 자리, 뒷면 M4 탭 4개 48 × 48). 업체 STP의 내부·창·측면 관은 넣지 않았다.
- **가정·미확인**: KIER 뒷면 패드 크기·웨이퍼 두께, Grace 새 판 도면, 검출기 각도·거리, 셀 중심 높이 111 mm.
- 형상은 설계용 모델(STEP과 같은 치수)이며 제작도는 아니다.

## English

APS 2-ID-D beamline sample cell v3.3 — 25 mm cell mounted whole; rear 4 spring pins + front 4 (3T: 6) needle probes; back face 4 × M4 on 48 × 48 mm = same pattern as the Nextron RBC-2EP → one holder plate for both; CPI/PET film tent with He; no PCB.

- **Gas, probes**: He in at the top (+x), out through a bottom fitting to an exhaust tee carrying the SHT45; tent 11.9 mL, 3τ = 43 s at 50 mL/min; NTC under the wafer; needles EverBeing BC20-2000 BeCu Ø0.5 (0.2 N at 0.5 mm).
- **v4.3.1 albedo (option)**: round rear window Ø16 kept + 940 nm LED puck (needs a Ø33 hole in Grace's plate). The diffuser Ø20 is pulled toward the wafer to Y 10.5 and the body back gets a Ø20 counterbore: at equal diffuser radiance the centre irradiance is +55 % (corner uniformity unchanged). The default dark plug is now screwed on the puck's M2 taps (Ø29 lip, 2 × M2×4; the 1.0 silicone pad is squeezed to 0.7, preload stays above 0 over the ±0.15 stack). A centre M3 tap in the plug back is the pull handle. Puck taps at r 12.0, Ø3.2 tool-access holes in the puck's Al disc. Viewer: “rear puck ↔ plug” toggle and “v4.3.1 rear view” button (tandem 2T only).
- **PL N₂ cell**: 56 × 62 × 8 for the FS5 SC-10 slot; same insert, frame, probe blocks and DB15; N₂ in at the top, out at the side; 85 mm tall. Dashed box = sketch of the FS5-type compartment 120 × 180 × 100 (photo estimate ±30 %), side-wall ovals = mirror positions (assumed).
- **Checks (CAD)**: clash 0, 315 detector rays 0 blocked, needle margin 0.51 mm, well 0.70 for 0.3–0.6 mm wafers.
- **Models**: tandem 2T (KIER, 4 pins + 4 needles), single cell (insert for 1.1 mm glass, no pins, 4 needles), tandem 3T (extra two-needle mid block, 6 needles), the RBC-2EP chamber on the same Grace plate and bracket, and the earlier flat cell v2 (10/27, greyed out, superseded by v3.3). v3.3 (final): SHT45 moved out to an exhaust tee 40 mm below, no slot, NTC under the wafer, BC20-2000 needles in V-groove blocks with 2 mm covers. DB15: 1–4 rear pins, 5–8 front needles, 9–10 NTC, 11–12 PD spare, 13–14 mid, 15 shield.
- **Flow view**: animated He path from inlet to outlet; wiring routes coloured by DB15 pin group (“flows” button, or #wc_3t&flows in the URL).
- **Viewer**: drag to rotate, explode slider, film tent / Grace plate + bracket toggles, ray directions (X-ray along +y, light from −x at 45°, detector +x at 60°), He flow arrow (gas toggle), tap a part for its name.
- **RBC-2EP chamber**: drawn only as the vendor's outer envelope (body 62 × 62 × 34.6 mm plus top/bottom port zones as boxes, 4 × M4 taps on 48 × 48 at the back). No internal detail, window or side tubes from the vendor model.
- **Assumed / not yet confirmed**: KIER rear pad size and wafer thickness, Grace's new plate drawing, detector angle and distance, cell centre height 111 mm.
- The geometry is a design model (same dimensions as the STEP), not a manufacturing drawing.

### What we ask Grace

1. Reprint your vertical plate ×2 with 48 × 48 mm Ø4.5 holes, 7 mm from the top (plate top = pattern centre +31). Our body top is at +33 and the connector bracket sits above it.
2. Illumination from −x: our side is open to 73° from the normal; the spot needs ≥ 11 × 15 mm at 45°.
3. Detector assumed on +x, 45–75° from the normal, azimuth ±30°: please confirm angle and distance.
4. He supply: two 4 mm tube lines to the film tent.
5. XBIC: your chopper and grounding convention.

## 파일 / Files

- `index.html` — v4.6m 보기 (three.js 0.160) / v4.6m viewer (three.js 0.160)
- `models/v47_*.glb`, `models/v47_meta.json` — v4.7 셀 5종 GLB와 부품 재질·층 / the five v4.6m GLBs and per-part material and layer
- `v33.html` — 이전 판 보기 (three.js r128) / earlier viewer (three.js r128)
- `models.js` — base64 GLB 모델 (`window.BC_GLB`). 싱글·3T·RBC-2EP는 탠덤 2T와 다른 부품만 담고 나머지는 2T에서 가져온다 / base64 GLB models; the single, 3T and RBC-2EP entries hold only the parts that differ from tandem 2T, the rest is reused from it
- `README.md` — 이 문서 / this file


## v4.8 (2026-11-05)

Grace(빔라인) 답: 검출기는 시료 법선에서 20–40°, 시료에서 2–3 mm. 그래서 필름을 가라앉혔다: 블록 위는 Al 지붕 0.8, 창 X −12.5…24.9 × Z ±17만 Y −2.3까지 파고 PET 12 µm를 턱 뒤에 양면 테이프로 붙인다(니들 생크 꼭대기 −1.86). 스나우트(원통) 최소 거리 20°에서 Ø10 5.1 / Ø20 6.9 mm(v4.7 7.9 / 9.0). He 대신 건조 N₂. 모델 `models/v48_*.glb`.
