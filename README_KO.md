# Contents Helper - 게임화된 콘텐츠 제작 플랫폼

직원들이 재미있게 콘텐츠를 만들 수 있도록 돕는 게임화 플랫폼입니다.

## 🎮 주요 기능

- **콘텐츠 아이디어**: AI 생성 콘텐츠 아이디어와 시나리오 제공
- **게임화 시스템**: 포인트, 레벨, 업적 시스템
- **비디오 리뷰**: 다른 제작자의 비디오 평가
- **팀 성과**: 팀 통계 및 랭킹 추적
- **모바일 최적화**: 모바일 콘텐츠 제작에 최적화된 디자인

## 🚀 빠른 시작

### 필요 사항

- 웹 서버 (Apache, Nginx 또는 정적 호스팅)
- Supabase 계정 (무료 플랜 사용 가능)

### 설치 방법

1. 저장소 복제:
```bash
git clone https://github.com/yourusername/contents-helper.git
cd contents-helper
```

2. 설정 파일 복사:
```bash
cp config.example.js config.js
```

3. `config.js`에 Supabase 인증 정보 입력:
```javascript
const SUPABASE_CONFIG = {
    url: 'YOUR_SUPABASE_URL',
    anonKey: 'YOUR_SUPABASE_ANON_KEY'
};
```

4. 데이터베이스 설정:
   - Supabase 대시보드 접속
   - `setup/` 폴더의 SQL 스크립트를 순서대로 실행
   - 자세한 내용은 `docs/database-structure.md` 참조

5. 웹 서버 또는 호스팅 플랫폼에 배포

### 사용 방법

URL 파라미터와 함께 플랫폼 접속:
```
https://yoursite.com/?user_id=USER_ID&user_name=NAME&company_id=COMPANY&store_id=STORE
```

## 📱 주요 페이지

- **메인 페이지** (`index.html`): 콘텐츠 아이디어 선택 및 제작 플로우
- **비디오 리뷰** (`video-review.html`): 다른 제작자의 비디오 평가
- **팀 통계**: 팀 성과 및 랭킹 확인

## 🛠️ 기술 스택

- **프론트엔드**: 바닐라 JavaScript, HTML5, CSS3
- **백엔드**: Supabase (PostgreSQL + Auth)
- **스토리지**: Supabase Storage (비디오 저장)
- **빌드 불필요**: 컴파일 없이 바로 배포 가능

## 📚 더 자세한 정보

- [빠른 시작 가이드](QUICK_START.md)
- [데이터베이스 구조](docs/database-structure.md)
- [프로젝트 문서](docs/README.md)

## 🤝 기여하기

기여를 환영합니다! Pull Request를 자유롭게 제출해주세요.

## 📝 라이선스

이 프로젝트는 MIT 라이선스 하에 있습니다. 자세한 내용은 [LICENSE](LICENSE) 파일을 참조하세요.

---

콘텐츠 크리에이터를 위해 ❤️로 만들었습니다
