# Contents Helper Website

직원들이 스트레스 받지 않고 재미있게 컨텐츠를 만들 수 있도록 도와주는 게임화된 웹사이트입니다.

## 🚀 AI/개발자를 위한 빠른 시작

### 📌 필수 3개 문서 (시간축 관리 시스템)
1. **PROJECT_CORE.md** - 프로젝트의 불변 핵심 정보
2. **whatbefore.md** - 직전에 완료한 작업들
3. **whatnext.md** - 다음에 해야 할 작업들

### 🤖 AI에게 프로젝트 전달하는 방법
```
/Applications/XAMPP/xamppfiles/htdocs/mysite/contents_helper_website/ 경로에서
PROJECT_CORE.md, whatbefore.md, whatnext.md 이 3개 파일을 순서대로 읽어줘.
이게 게임화된 콘텐츠 제작 플랫폼 프로젝트야.
```

**더 많은 프롬프트가 필요하면 → `PROMPTS_COLLECTION.md` 참조**

> **⚠️ 중요: 이 프로젝트는 Supabase를 백엔드로 사용합니다!**
> - 모든 데이터는 Supabase에 저장됩니다
> - 로컬 SQL 파일은 참고용이며, 실제 실행은 Supabase Dashboard에서 해야 합니다
> - 문제 해결시 Supabase MCP 도구 사용을 권장합니다

## 🌟 주요 기능

### 1. 컨텐츠 아이디어 제공
- Supabase의 `contents_idea` 테이블에서 5개의 아이디어를 랜덤으로 선택
- `is_choosen=true`인 아이디어 우선 표시
- 카테고리별 아이콘과 함께 카드 형태로 표시
- 베트남어/한국어 이중 언어 지원
- 바이럴 태그 표시

### 📱 모바일 UX 개선 (2025년 6월 28일)
- **아코디언 형식 카드**: 제목과 Hook만 먼저 표시, 클릭 시 확장
- **선택 버튼 분리**: 카드 클릭과 선택 액션 분리
- **포인트 가이드 팝업**: 클릭 가능한 모달로 변경
- **전체적인 모바일 최적화**: iOS 자동 확대 방지, 터치 친화적 UI
- **시나리오 상세 페이지 개선**: 탭 기반 UI, 타임라인 형식, 캡션 복사 기능

### 2. 게임화 요소 (Supabase 테이블 기반)
- **포인트 시스템**: `points_system` 테이블에서 동적 로드
- **레벨 시스템**: `level_system` 테이블에서 동적 로드
- **업적 시스템**: `achievement_system` 테이블에서 동적 로드
- **일일 도전**: `daily_challenges` 테이블 (개발 예정)

### 3. 영상 제작 프로세스
1. 아이디어 선택 (+10점)
2. 시나리오 확인
3. 영상 촬영 및 업로드 (+50점)
4. 메타데이터 입력 (+20점)
5. 완료 및 보상 획득 (+20점)

### 4. 사용자 관리
- URL 파라미터로 사용자 정보 전달
- 예시: `?user_id=emp001&user_name=김철수&company_id=cameraon&store_id=gangnam`
- 사용자별 통계 추적
- 실시간 진행 상황 업데이트
- 회사별/지점별 필터링 가능

### 5. 🎆 비디오 리뷰 시스템 (2025년 6월 29일 신규)
- **평가 시스템**: 별점(1-5) 전용 평가
- **익명 평가**: 제작자 정보 숨김으로 공정성 확보
- **포인트 시스템**: 평가당 +5포인트
- **연속 평가 보너스**: 5개마다 +20포인트
- **일일 목표**: 20개 달성 시 +50포인트

## 📦 데이터베이스 구조

### 핵심 테이블
1. **contents_idea** - 컨텐츠 아이디어 저장
2. **content_uploads** - 업로드된 영상 정보
3. **user_activities** - 사용자 활동 로그
4. **user_progress** - 사용자 진행 상황
5. **daily_challenges** - 일일 도전 과제

### 비디오 리뷰 테이블 (🎆 신규)
9. **video_reviews** - 비디오 평가 데이터
10. **review_sessions** - 연속 평가 세션 추적
11. **daily_review_goals** - 일일 평가 목표
12. **video_review_stats** (뷰) - 비디오별 평가 통계
13. **user_review_stats** (뷰) - 사용자별 평가 활동

### 게임 시스템 테이블 (동적 관리)
6. **points_system** - 활동별 점수 정의
   - activity_type: 활동 유형
   - points: 획득 점수
   - description: 설명
   - icon: 아이콘

7. **level_system** - 레벨별 요구 점수
   - level_number: 레벨 번호
   - level_name: 레벨 이름
   - required_points: 필요 점수
   - icon: 레벨 아이콘

8. **achievement_system** - 업적 시스템
   - achievement_code: 업적 코드
   - achievement_name: 업적 이름
   - condition_type: 조건 유형
   - points_reward: 보상 점수

## 🛠 기술 스택
- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Supabase (중요! 로컬 DB 아님)
- **Storage**: Supabase Storage (Public bucket: contents-videos)
- **Database**: PostgreSQL (Supabase 호스팅)
- **Project ID**: yenfccoefczqxckbizqa

## 📝 설치 방법

### 1. Supabase 프로젝트 설정

**⚠️ 중요: Supabase Dashboard에서 SQL을 실행하세요!**
- Dashboard: https://supabase.com/dashboard/project/yenfccoefczqxckbizqa
- SQL Editor에서 아래 파일들 실행:

```sql
-- 1. 신규 설치 시
-- /setup/create_tables.sql 실행
-- 게임 시스템 테이블 생성 SQL 실행

-- 2. 기존 테이블 업데이트 시 (company_id, store_id 추가)
-- /setup/add_company_store_columns.sql 실행

-- 3. 🆕 2025년 6월 29일 업데이트 (RLS 제거 및 새 기능)
-- /setup/update_database_2025_06_29.sql 실행

-- 4. ⚡ 데이터 무결성 문제시 즉시 수정
-- /setup/fix_jin_data_immediate.sql 실행
```

### 2. 환경 변수 설정 (config.js)
```javascript
const SUPABASE_CONFIG = {
    url: 'your-supabase-url',
    anonKey: 'your-anon-key'
};
```

### 3. Storage 버킷 생성
- 버킷 이름: `contents-videos`
- 설정: Public

### 4. 웹서버에 배포
```
# 기본 접속
http://localhost/mysite/contents_helper_website/

# 파라미터 포함 접속
http://localhost/mysite/contents_helper_website/?user_id=emp001&user_name=김철수&company_id=cameraon&store_id=gangnam
```

## ✅ 개발 현황

### Phase 1 (완료 ✅)
- [x] 프로젝트 구조 설정
- [x] 기본 UI 구현
- [x] Supabase 연동
- [x] 컨텐츠 아이디어 표시 기능
- [x] 영상 업로드 기능
- [x] 포인트 시스템
- [x] 레벨 시스템
- [x] 사용자 관리 시스템
- [x] URL 파라미터 처리
- [x] 동적 게임 설정 로드
- [x] 랭킹 시스템 (회사별/가게별)

### Phase 2 (진행 예정)
- [x] 리더보드 (랭킹 시스템) ✅
- [ ] 업적 시스템 구현
- [ ] 일일 보너스 기능
- [ ] 관리자 대시보드

### Phase 2.5 (새로운 기능 계획) 🆕
- [ ] 스토어별 성과 비교 시스템 (팀 단위 경쟁)
- [ ] "내 아이디어로 제작하기" 기능 (창의성 측정)
- [ ] 영상 공유 및 평가 시스템 (피어 리뷰)

📌 **상세 계획은 [feature-update-2025-06.md](./feature-update-2025-06.md) 참조**

### Phase 3 (예정)
- [ ] AI 기반 컨텐츠 품질 평가
- [ ] 소셜 미디어 자동 포스팅
- [ ] 분석 대시보드

## 📁 파일 구조
```
contents_helper_website/
├── index.html                    # 메인 페이지
├── style.css                     # 스타일시트  
├── script.js                     # 메인 JavaScript
├── config.js                     # 설정 파일
├── README.md                     # 프로젝트 문서
├── database-structure.md         # DB 구조 상세
├── project-report.md            # 프로젝트 보고서
├── feature-update-2025-06.md    # 새로운 기능 계획 🆕
├── setup/
│   ├── create_tables.sql        # 테이블 생성 SQL
│   └── add_company_store_columns.sql  # company_id, store_id 추가 SQL
└── assets/                      # 에셋 폴더
```

## 🎮 사용 방법

### URL 파라미터
```
# 모든 파라미터 포함
?user_id=emp001&user_name=김철수&company_id=cameraon&store_id=gangnam&email=kim@company.com

# 회사만 지정
?user_id=emp002&user_name=이영희&company_id=cameraon

# 지점만 지정
?user_id=emp003&user_name=박민수&store_id=busan001
```

### 점수 시스템 관리
1. Supabase 대시보드 접속
2. `points_system` 테이블에서 점수 수정
3. 변경사항이 실시간으로 반영됨

### 레벨 시스템 관리  
1. `level_system` 테이블에서 레벨 정보 수정
2. 새로운 레벨 추가 가능

## 🔄 업데이트 내역

### 2025년 6월 29일
- **🎆 비디오 리뷰 기능 추가**
  - 별점 전용 평가 시스템
  - 익명 평가로 공정성 확보
  - 평가당 +5포인트, 연속 평가 보너스
  - 새로운 테이블 및 뷰 생성
- **데이터 동기화 문제 해결**
  - 페이지 간 포인트 불일치 해결
  - DB 우선 로드 방식으로 변경

### 2025년 6월 28일 
- 모바일 UX 개선 (아코디언 카드, 탭 기반 UI)
- 포인트 가이드 팝업 추가
- 동적 게임 설정 로드 기능
- **company_id, store_id 파라미터 추가**
  - department 대신 company_id, store_id 사용
  - 모든 metadata에 company_id, store_id 저장
  - 회사별/지점별 필터링 기능 지원
- **데이터베이스 구조 개선**
  - company_id, store_id를 별도 컬럼으로 추가
  - 인덱스 추가로 성능 향상
  - 회사별/지점별 통계 뷰(View) 생성
- **포인트 가이드 모달 Supabase 연동**
  - 하드코딩된 점수 제거
  - points_system 테이블에서 동적 로드
  - 실시간 점수 변경 반영
- **🏅 랭킹 시스템 추가**
  - 회사 전체 / 가게별 랭킹 보기
  - TOP 50 표시 및 1,2,3위 메달 디자인
  - 현재 사용자 순위 하이라이트
  - 모바일 최적화 (플로팅 버튼)

## 📊 데이터베이스 회사별/지점별 관리

### 통계 뷰(View) 사용법
```sql
-- 특정 회사의 오늘 통계
SELECT * FROM company_stats 
WHERE company_id = 'ebd66ba7-fde7-4332-b6b5-0d8a7f615497' 
AND date = CURRENT_DATE;

-- 지점별 리더보드 TOP 10
SELECT * FROM store_leaderboard 
WHERE store_id = '16f4c231-185a-4564-b473-bad1e9b305e8'
ORDER BY rank
LIMIT 10;

-- 회사의 월간 성과
SELECT * FROM get_company_monthly_stats('cameraon', 2025, 6);
```

### 회사별 컨텐츠 필터링
```sql
-- 특정 회사용 아이디어만 표시
SELECT * FROM contents_idea 
WHERE company_id = 'cameraon' OR company_id IS NULL;

-- 특정 지점용 아이디어 우선 표시
SELECT * FROM contents_idea 
WHERE store_id = 'gangnam' OR store_id IS NULL
ORDER BY store_id DESC NULLS LAST;
```

## 🧪 빠른 테스트 가이드

### 📋 [QUICK_TEST_GUIDE.md](./QUICK_TEST_GUIDE.md) 참조
- 바로 사용 가능한 테스트 URL
- 데이터 무결성 문제 해결법
- Supabase MCP 사용법

### 테스트 URL (복사해서 바로 사용)
```
http://localhost/mysite/contents_helper_website/?user_id=0d2e61ad-e230-454e-8b90-efbe1c1a9268&user_name=Jin&company_id=ebd66ba7-fde7-4332-b6b5-0d8a7f615497&store_id=16f4c231-185a-4564-b473-bad1e9b305e8
```

### 테스트 체크리스트
- [ ] URL 파라미터 적용 확인
- [ ] 사용자 정보 표시 (Jin, Company: ebd66ba7..., Store: 16f4c231...)
- [ ] 아이디어 선택 및 포인트 획듍
- [ ] 비디오 업로드 성공
- [ ] metadata에 company_id, store_id 저장 확인
- [ ] localStorage 저장 확인
- [ ] 페이지 새로고침 후 데이터 유지 확인

## 🆘 문제 해결

### 1. URL 접속 문제 (404 에러)
**증상**: `http://localhost/mysite/contents_helper_website/` 접속 시 404 에러

**해결 방법**:
1. **file:// 프로토콜로 직접 열기**
   ```
   file:///Applications/XAMPP/xamppfiles/htdocs/mysite/contents_helper_website/index.html?파라미터
   ```

2. **Apache 설정 확인**
   - httpd.conf에서 DirectoryIndex 순서 확인
   - index.php index.html 순서로 설정

3. **직접 index.php 접속**
   ```
   http://localhost/mysite/contents_helper_website/index.php?파라미터
   ```

### 2. 데이터 무결성 문제 (User ≠ Store ≠ Company)
**증상**: 개인 포인트와 팀 성과가 일치하지 않음

**해결 방법**:
1. **Supabase Dashboard에서 SQL 실행**
   - `/setup/fix_data_integrity_issues.sql` 실행
   - 또는 Supabase MCP 도구 사용

2. **즉시 수정 스크립트**
   ```sql
   UPDATE content_uploads
   SET 
       company_id = 'ebd66ba7-fde7-4332-b6b5-0d8a7f615497',
       store_id = '16f4c231-185a-4564-b473-bad1e9b305e8'
   WHERE user_id = '0d2e61ad-e230-454e-8b90-efbe1c1a9268'
   AND (company_id IS NULL OR store_id IS NULL);
   ```

### 3. 랭킹 표시 문제
**증상**: 랭킹에서 10명만 보임

**해결**: 현재 최대 100명까지 표시 가능하도록 수정됨 ✅

### 4. 오늘 활동이 없을 때
**해결**: 자동으로 "🎬 오늘 활동이 없습니다" 메시지 표시됨 ✅

### 상세 가이드
- [QUICK_TEST_GUIDE.md](./docs/QUICK_TEST_GUIDE.md) 참조
- [SUPABASE_MCP_GUIDE.md](./docs/SUPABASE_MCP_GUIDE.md) 참조

## 📞 문의
Internal Use Only - Cameraon Team