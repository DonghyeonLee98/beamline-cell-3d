# 빔라인 시료 셀 3D · Beamline sample cell 3D

보기 / View: https://donghyeonlee98.github.io/beamline-cell-3d/

부산대 이동현, 2026-10-30. APS 2-ID-D (2026년 12월) 빔라인 시료 셀 v3.2의 3D 보기. 부품 이름은 CAD 그대로(한글, 주요 부품은 영문 병기).
Donghyeon Lee, Pusan National University, 2026-10-30. 3D viewer of the beamline sample cell v3.2 for APS 2-ID-D (December 2026). Part names come straight from the CAD (Korean, main parts with English).

## 한국어

APS 2-ID-D 빔라인 시료 셀 v3.2 — 25 mm 셀을 자르지 않고 통째로 장착. 뒷면 스프링 핀 4 + 앞면 바늘 탐침 4 (3T: 6). 몸체 뒷면 M4 4개, 48 × 48 mm = Nextron RBC-2EP와 같은 구멍 배치 → 판 하나로 둘 다 단다. CPI/PET 필름 텐트 안에 He. PCB 없음.

- **기체**: He는 위에서 들어가고 (+x 피팅, −x 예비) 텐트 아래 벽의 20 × 1 mm 홈으로 나간다. 텐트 11.9 mL, 50 mL/min에서 3τ = 43 s. 출구 옆 SHT45 (8 × 6 미니 기판).
- **점검 (CAD)**: 간섭 0, 검출기 315 광선 차단 0, 바늘 여유 0.59 mm, 우물 0.70 (웨이퍼 0.3–0.6 mm).
- **모델**: 탠덤 2T (KIER, 핀 4 + 바늘 4), 싱글 (유리 1.1 mm용 인서트, 핀 없음, 바늘 4), 탠덤 3T (mid 2바늘 블록 추가, 바늘 6), RBC-2EP 챔버를 같은 Grace 판·브래킷에 단 모습, 이전안 평판 셀 v2 (10/27, 회색, v3.2로 대체). v3.2 = v3.1 + 텐트 아래 벽 출구 홈 20 × 1.0, SHT45 자리, 아래 줄기 홈.
- **흐름 시각화**: 기체 입구→출구 애니메이션, 배선 경로 색 = DB15 핀 그룹 (“흐름” 버튼, 주소 끝 #wc_3t&flows).
- **보기**: 끌어서 회전, 분해 슬라이더, 필름 텐트 / Grace 판·브래킷 켜고 끄기, 빔·빛·검출기 방향 (X선 +y 수평, 광 −x 45°, 검출기 +x 60°), He 흐름 화살표 (기체), 부품을 누르면 이름.
- **RBC-2EP 챔버**: 업체 외형의 바깥 크기만 상자로 그린 포락선이다 (몸체 62 × 62 × 34.6 mm + 위·아래 포트 자리, 뒷면 M4 탭 4개 48 × 48). 업체 STP의 내부·창·측면 관은 넣지 않았다.
- **가정·미확인**: KIER 뒷면 패드 크기·웨이퍼 두께, Grace 새 판 도면, 검출기 각도·거리, 셀 중심 높이 111 mm.
- 형상은 설계용 모델(STEP과 같은 치수)이며 제작도는 아니다.

## English

APS 2-ID-D beamline sample cell v3.2 — 25 mm cell mounted whole; rear 4 spring pins + front 4 (3T: 6) needle probes; back face 4 × M4 on 48 × 48 mm = same pattern as the Nextron RBC-2EP → one holder plate for both; CPI/PET film tent with He; no PCB.

- **Gas**: He in at the top (+x fitting, −x spare), out through a 20 × 1 mm slot in the bottom wall; tent 11.9 mL, 3τ = 43 s at 50 mL/min; SHT45 (8 × 6 mini-board) beside the outlet.
- **Checks (CAD)**: clash 0, 315 detector rays 0 blocked, needle margin 0.59 mm, well 0.70 for 0.3–0.6 mm wafers.
- **Models**: tandem 2T (KIER, 4 pins + 4 needles), single cell (insert for 1.1 mm glass, no pins, 4 needles), tandem 3T (extra two-needle mid block, 6 needles), the RBC-2EP chamber on the same Grace plate and bracket, and the earlier flat cell v2 (10/27, greyed out, superseded by v3.2). v3.2 = v3.1 + 20 × 1.0 outlet slot in the tent's bottom wall, SHT45 pocket and a lower wiring groove.
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

- `index.html` — 보기 페이지 (three.js r128) / viewer page (three.js r128)
- `models.js` — base64 GLB 모델 (`window.BC_GLB`). 싱글·3T·RBC-2EP는 탠덤 2T와 다른 부품만 담고 나머지는 2T에서 가져온다 / base64 GLB models; the single, 3T and RBC-2EP entries hold only the parts that differ from tandem 2T, the rest is reused from it
- `README.md` — 이 문서 / this file
