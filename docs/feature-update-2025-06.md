# Contents Helper Website - 기능 업데이트 계획
*작성일: 2025년 6월 29일*

## 📌 현재 상황

### 프로젝트 현황
Contents Helper Website는 직원들이 스트레스 없이 재미있게 콘텐츠를 만들 수 있도록 돕는 게임화된 플랫폼입니다. 현재 기본적인 콘텐츠 제작 플로우와 개인 단위 게임화 시스템이 구현되어 있습니다.

### 발견된 한계점
1. **개인 중심의 경쟁 구조**: 현재는 개인별 랭킹만 있어 팀워크보다 개인 경쟁이 강조됨
2. **수동적인 참여**: 제공된 아이디어만 선택하는 수동적 구조
3. **일방향 콘텐츠 제작**: 제작 후 피드백이나 학습 기회 부족

## 🎯 새로운 기능의 목적과 이유

### 1. 스토어별 성과 비교 시스템

**왜 필요한가?**
- **문제**: 개인 간 경쟁은 팀 내 갈등을 유발할 수 있음
- **목적**: 팀 단위 평가로 협력 문화 조성
- **핵심 가치**: "함께 성장하는 팀"

**기대 효과**
- 팀원들이 서로 도와가며 콘텐츠 제작
- 스토어별 건전한 경쟁으로 전체 생산성 향상
- 팀 리더십과 협업 능력 개발

### 2. "내 아이디어로 제작하기" 기능

**왜 필요한가?**
- **문제**: 직원의 창의성과 자발성을 측정할 방법 부재
- **목적**: 능동적 참여자와 수동적 참여자 구분
- **핵심 가치**: "창의적 인재 발굴"

**기대 효과**
- 진정한 콘텐츠 크리에이터 발굴
- 직원의 창의성 지표 확보
- 자발적 참여 문화 조성
- 인사 평가 시 창의성 반영 가능

### 3. 영상 공유 및 평가 시스템

**왜 필요한가?**
- **문제**: 제작된 콘텐츠가 사일로화되어 학습 기회 상실
- **목적**: 상호 학습과 품질 향상
- **핵심 가치**: "함께 배우고 성장"

**기대 효과**
- 우수 사례 벤치마킹으로 전체 품질 향상
- 직원들이 선호하는 콘텐츠 스타일 데이터 확보
- 피어 리뷰를 통한 자연스러운 품질 관리
- 회사 고유의 콘텐츠 문화 형성

## 📊 데이터 기반 의사결정

### 수집 가능한 인사이트
1. **팀 성과 지표**
   - 어느 팀이 가장 활발한가?
   - 팀 규모 대비 생산성은?
   - 팀별 콘텐츠 품질 차이는?

2. **창의성 지표**
   - 자발적 아이디어 생성 비율
   - 부서별/팀별 창의성 차이
   - 창의적 직원의 다른 특성은?

3. **콘텐츠 품질 지표**
   - 어떤 스타일이 높은 평가를 받는가?
   - 카테고리별 선호도는?
   - 품질과 제작 시간의 상관관계는?

## 🛠️ 기술적 구현 계획

### Phase 1: 데이터베이스 기반 구축
- `is_auto_created` 컬럼 추가
- `video_ratings` 테이블 생성
- 스토어별 통계 뷰 생성

### Phase 2: 기본 기능 구현
- "내 아이디어로 제작하기" UI/UX
- 커스텀 아이디어 저장 로직

### Phase 3: 공유 시스템 구축
- 영상 갤러리 페이지
- 평가 시스템 구현
- 회사별 필터링

### Phase 4: 분석 도구 추가
- 스토어별 대시보드
- 창의성 통계
- 품질 분석 리포트

## ⚠️ 주의사항

### 개인정보 보호
- 평가는 익명으로 처리 가능하도록 옵션 제공
- 회사 간 데이터는 절대 공유되지 않음

### 변화 관리
- 새 기능 도입 시 직원 교육 필요
- 단계적 롤아웃으로 적응 시간 제공
- 피드백 수렴 채널 마련

### 성과 측정
- 기능 도입 전후 비교 데이터 수집
- ROI 측정을 위한 KPI 설정
- 정기적인 효과성 검토

## 💡 장기적 비전

이 세 가지 기능은 단순한 기능 추가가 아닌, Contents Helper를 다음 단계로 진화시키는 핵심 요소입니다:

1. **개인 도구 → 팀 플랫폼**: 개인의 콘텐츠 제작 도구에서 팀 협업 플랫폼으로
2. **실행 도구 → 창의성 플랫폼**: 단순 실행에서 창의성 개발 도구로
3. **일방향 → 양방향**: 제작만 하는 곳에서 학습하고 성장하는 곳으로

## 🎯 최종 목표

**"직원들이 즐겁게 콘텐츠를 만들면서, 동시에 창의성을 개발하고, 팀워크를 강화하며, 회사의 콘텐츠 문화를 만들어가는 플랫폼"**

이것이 우리가 이 기능들을 만드는 진짜 이유입니다.

---

*다음 작업자를 위한 메모: 기능의 형태는 바뀔 수 있지만, 위의 목적과 가치는 반드시 지켜져야 합니다. 기술적 구현보다 "왜"를 항상 먼저 생각해주세요.*
