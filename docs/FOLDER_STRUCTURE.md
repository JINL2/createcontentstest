# 📁 Contents Helper Website - 폴더 구조
*최종 정리: 2025년 6월 29일*

## 🎯 깔끔하게 정리된 구조

```
contents_helper_website/
│
├── 📌 핵심 문서 (3개) - 시간축 관리 시스템
│   ├── PROJECT_CORE.md        # 불변의 핵심 정보
│   ├── whatbefore.md          # 직전 완료 작업
│   └── whatnext.md            # 다음 할 작업
│
├── 📄 메인 애플리케이션 (6개)
│   ├── index.html             # 메인 페이지
│   ├── script.js              # 핵심 JavaScript
│   ├── style.css              # 스타일시트
│   ├── config.js              # Supabase 설정
│   ├── index.php              # PHP 리다이렉트
│   └── README.md              # 프로젝트 소개
│
├── 🚧 개발 중인 기능 (4개)
│   ├── video-gallery.html     # 영상 갤러리
│   ├── video-gallery.js       # 갤러리 로직
│   ├── video-gallery.css      # 갤러리 스타일
│   └── admin-game-system.html # 관리자 도구
│
└── 📁 폴더들
    ├── assets/                # 이미지, 아이콘 리소스
    ├── backup/                # 백업 및 임시 파일
    ├── docs/                  # 모든 기술 문서
    ├── setup/                 # SQL 설치 스크립트
    └── tests/                 # 테스트 페이지
```

## 📂 폴더별 상세 내용

### `/docs` - 기술 문서 모음
```
docs/
├── database-structure.md         # DB 구조 상세
├── project-report.md            # 종합 보고서
├── feature-update-2025-06.md    # Phase 2.5 계획
├── QUICK_TEST_GUIDE.md          # 빠른 테스트 가이드
├── SUPABASE_MCP_GUIDE.md        # 데이터 수정 가이드
├── FOLDER_STRUCTURE.md          # 이 파일
├── 404_ERROR_FIX.md             # 404 에러 해결
├── JIN_TEST_GUIDE.md            # Jin 테스트 가이드
├── JIN_TEST_RESULTS.md          # Jin 테스트 결과
├── NEXT_STEPS_GUIDE.md          # 다음 단계 가이드
├── button-integration-guide.md   # 앱 통합 가이드
└── listen-customers-analysis.md  # 참고 프로젝트 분석
```

### `/tests` - 테스트 페이지
```
tests/
├── test-parameters.html         # URL 파라미터 테스트
├── test-video-upload.html       # 비디오 업로드 테스트
├── test-display.html            # 디스플레이 테스트
├── test-points-system.html      # 포인트 시스템 테스트
├── test-scenario.html           # 시나리오 테스트
├── test-schema-check.html       # 스키마 체크
├── test-api-direct.html         # API 직접 테스트
└── test-supabase-integrity.html # Supabase 무결성 테스트
```

### `/setup` - SQL 스크립트
```
setup/
├── create_tables.sql                     # 초기 테이블 생성
├── create_game_tables.sql               # 게임 시스템 테이블
├── add_company_store_columns.sql        # 회사/지점 컬럼 추가
├── update_database_2025_06_29.sql       # 최신 업데이트
├── convert_scenario_format.sql          # 시나리오 변환
├── fix_jin_data_immediate.sql           # Jin 데이터 수정
└── (기타 SQL 파일들)
```

### `/backup` - 백업 파일
```
backup/
├── .htaccess.backup             # Apache 설정 백업
├── script_upload_fix.js         # 스크립트 임시 수정
└── (기타 백업 파일들)
```

### `/assets` - 리소스
```
assets/
└── (이미지, 아이콘 등)
```

## 🚀 빠른 접근 가이드

### 새로운 개발자/AI를 위한 필독 순서
1. **PROJECT_CORE.md** - 프로젝트 핵심 이해
2. **whatbefore.md** - 현재 상태 파악
3. **whatnext.md** - 다음 작업 확인

### 작업별 참고 문서
- **DB 작업**: `/docs/database-structure.md`
- **테스트**: `/docs/QUICK_TEST_GUIDE.md`
- **문제 해결**: `/docs/SUPABASE_MCP_GUIDE.md`
- **새 기능**: `/docs/feature-update-2025-06.md`

## 📊 정리 결과

### Before (25+ 파일)
- 메인 디렉토리에 모든 파일 혼재
- 문서, 테스트, 백업 파일 섞여있음
- 구조 파악 어려움

### After (11개 파일)
- 메인: 핵심 파일만 11개
- 문서: `/docs`에 12개
- 테스트: `/tests`에 8개
- 백업: `/backup`에 보관
- **명확한 3단계 문서 시스템**

## 💡 관리 원칙

1. **메인 디렉토리**: 실행에 필요한 파일만
2. **3개 핵심 문서**: 항상 최신 상태 유지
3. **문서화**: 모든 기술 문서는 `/docs`로
4. **테스트**: 모든 테스트는 `/tests`로
5. **정리**: 사용하지 않는 파일은 `/backup`으로

---
*이제 프로젝트가 깔끔하게 정리되었습니다! 🎉*