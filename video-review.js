// Supabase 초기화
const { createClient } = supabase;
const supabaseClient = createClient(SUPABASE_CONFIG.url, SUPABASE_CONFIG.anonKey);

// 카테고리와 감정 이모지 매핑
const CATEGORY_EMOJI = {
    '일상': '🏠',     // 집
    '음식': '🍴',     // 접시
    '패션': '👗',     // 드레스
    '뷰티': '💄',     // 립스틱
    '여행': '✈️',      // 비행기
    '정보': '💡'      // 전구
};

const EMOTION_EMOJI = {
    '기쁨': '😄',     // 웃는 얼굴
    '놀람': '😲',     // 놀란 얼굴
    '감동': '🥹',     // 눈물 흘리는 얼굴
    '재미': '😆',     // 크게 웃는 얼굴
    '유용': '👍'      // 엄지척
};

// 전역 상태 관리
let currentState = {
    userId: null,
    userName: null,
    companyId: null,
    storeId: null,
    currentVideo: null,
    videoQueue: [],
    reviewedToday: 0,
    dailyTarget: 20,
    earnedPoints: 0,
    reviewStreak: 0,
    lastRating: null
};

// URL 파라미터 파싱
function getURLParameters() {
    const params = new URLSearchParams(window.location.search);
    return {
        user_id: params.get('user_id'),
        user_name: params.get('user_name') || params.get('name'),
        company_id: params.get('company_id'),
        store_id: params.get('store_id')
    };
}

// 초기화
document.addEventListener('DOMContentLoaded', async () => {
    console.log('Video Review 초기화 중...');
    console.log('Supabase Config:', SUPABASE_CONFIG);
    console.log('Supabase Client:', supabaseClient);
    
    // 사용자 정보 설정
    const urlParams = getURLParameters();
    currentState.userId = urlParams.user_id;
    currentState.userName = urlParams.user_name || 'Anonymous';
    currentState.companyId = urlParams.company_id;
    currentState.storeId = urlParams.store_id;
    
    console.log('Current State:', currentState);
    
    if (!currentState.userId) {
        showError('사용자 정보가 없습니다.');
        setTimeout(() => {
            window.location.href = 'index.html';
        }, 2000);
        return;
    }
    
    // 오늘 평가 진행 상황 로드 (에러가 있어도 계속)
    try {
        await loadTodayProgress();
    } catch (e) {
        console.error('진행 상황 로드 실패:', e);
    }
    
    // 별점 이벤트 리스너
    setupStarRating();
    
    // 첫 비디오 로드
    await loadNextVideo();
});

// 오늘 평가 진행 상황 로드
async function loadTodayProgress() {
    try {
        console.log('오늘 평가 진행 상황 로드 중...');
        const today = new Date().toISOString().split('T')[0];
        
        // 오늘 평가한 비디오 수 조회
        // metadata에서 actual_user_id로 조회
        const { count, error } = await supabaseClient
            .from('video_reviews')
            .select('*', { count: 'exact', head: true })
            .filter('metadata->>actual_user_id', 'eq', currentState.userId)
            .gte('created_at', today + 'T00:00:00')
            .lte('created_at', today + 'T23:59:59');
        
        if (error) {
            console.error('video_reviews 테이블 조회 오류:', error);
            // 테이블이 없을 수 있으므로 계속 진행
        }
        
        currentState.reviewedToday = count || 0;
        console.log(`오늘 평가한 비디오: ${currentState.reviewedToday}개`);
        
        // UI 업데이트
        updateProgressUI();
        
    } catch (error) {
        console.error('진행 상황 로드 오류:', error);
        // 에러가 있어도 계속 진행
    }
}

// 진행 상황 UI 업데이트
function updateProgressUI() {
    document.getElementById('todayReviewed').textContent = currentState.reviewedToday;
    document.getElementById('todayTarget').textContent = currentState.dailyTarget;
    document.getElementById('reviewStreak').textContent = currentState.reviewStreak;
    document.getElementById('earnedPoints').textContent = currentState.earnedPoints;
    
    // 프로그레스 바 업데이트
    const progress = Math.min((currentState.reviewedToday / currentState.dailyTarget) * 100, 100);
    document.getElementById('reviewProgressFill').style.width = `${progress}%`;
}

// 사용자 정보를 숨기기 위한 설정
const HIDE_USER_INFO = true;

// 다음 비디오 로드
async function loadNextVideo() {
    showLoadingState();
    
    try {
        console.log('비디오 로드 시작...');
        console.log('Company ID:', currentState.companyId);
        
        // 같은 company_id의 비디오 가져오기
        let query = supabaseClient
            .from('content_uploads')
            .select('*')
            .eq('status', 'uploaded')
            .order('created_at', { ascending: false })
            .limit(50);
        
        // company_id로 필터링 (필수)
        if (currentState.companyId) {
            query = query.eq('company_id', currentState.companyId);
        } else {
            console.error('company_id가 없습니다!');
            showError('회사 정보가 없습니다.');
            return;
        }
        
        const { data: videos, error } = await query;
        
        if (error) {
            console.error('Supabase 쿼리 오류:', error);
            throw error;
        }
        
        if (!videos || videos.length === 0) {
            console.log('같은 회사의 비디오가 없습니다.');
            showEmptyState();
            return;
        }
        
        console.log(`같은 회사의 비디오 ${videos.length}개 발견`);
        
        // 이미 평가한 비디오 필터링
        const reviewedVideos = await getReviewedVideos();
        const unreviewed = videos.filter(v => !reviewedVideos.includes(v.id));
        
        console.log(`평가하지 않은 비디오: ${unreviewed.length}개`);
        
        if (unreviewed.length === 0) {
            showEmptyState();
            return;
        }
        
        // 첫 번째 비디오 선택
        currentState.currentVideo = unreviewed[0];
        displayVideo(currentState.currentVideo);
        
    } catch (error) {
        console.error('비디오 로드 오류:', error);
        showError('비디오를 불러올 수 없습니다.');
    }
}

// 이미 평가한 비디오 ID 목록 가져오기
async function getReviewedVideos() {
    try {
        console.log('이미 평가한 비디오 조회 중...');
        // metadata에서 actual_user_id로 조회
        const { data, error } = await supabaseClient
            .from('video_reviews')
            .select('video_id')
            .filter('metadata->>actual_user_id', 'eq', currentState.userId);
        
        if (error) {
            console.error('video_reviews 테이블 조회 오류:', error);
            // 테이블이 없을 수 있으므로 빈 배열 반환
            return [];
        }
        
        const reviewedIds = data ? data.map(r => r.video_id) : [];
        console.log(`이미 평가한 비디오: ${reviewedIds.length}개`);
        return reviewedIds;
        
    } catch (error) {
        console.error('평가 목록 조회 오류:', error);
        return [];
    }
}

// 비디오 표시
function displayVideo(video) {
    hideLoadingState();
    
    const videoElement = document.getElementById('reviewVideo');
    const playerDiv = document.getElementById('videoPlayer');
    const controlsDiv = document.getElementById('reviewControls');
    
    console.log('비디오 표시 시작:', video);
    console.log('비디오 URL:', video.video_url);
    
    // 비디오 소스 설정
    videoElement.src = video.video_url;
    
    // 비디오 이벤트 리스너 추가
    videoElement.onloadedmetadata = () => {
        console.log('비디오 메타데이터 로드 완료');
    };
    
    videoElement.oncanplay = () => {
        console.log('비디오 재생 준비 완료');
    };
    
    videoElement.onerror = (e) => {
        console.error('비디오 로드 에러:', e);
        console.error('에러 타입:', videoElement.error);
        // 비디오 에러 시 다음 비디오로 이동
        showError('비디오를 재생할 수 없습니다. 다음 비디오로 이동합니다.');
        setTimeout(() => loadNextVideo(), 2000);
    };
    
    videoElement.load();
    
    // 비디오 정보 표시 (사용자 정보 숨김)
    document.getElementById('videoTitle').textContent = video.title || 'Video không có tiêu đề';
    
    // 비디오 재생 시도
    videoElement.play().catch(e => {
        console.log('자동 재생 실패, 음소거 후 재시도:', e);
        videoElement.muted = true;
        videoElement.play();
    });
    
    // 태그 표시
    const tagsContainer = document.getElementById('videoTags');
    const tags = video.metadata?.tags || [];
    tagsContainer.innerHTML = tags.map(tag => 
        `<span class="video-tag">#${tag}</span>`
    ).join('');
    
    // UI 표시
    playerDiv.style.display = 'block';
    controlsDiv.style.display = 'flex';
    
    // 별점 초기화
    resetStarRating();
}

// 상대 시간 계산
function getRelativeTime(timestamp) {
    const now = new Date();
    const time = new Date(timestamp);
    const diff = now - time;
    
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    
    if (minutes < 60) return `${minutes} phút trước`;
    if (hours < 24) return `${hours} giờ trước`;
    return `${days} ngày trước`;
}

// 별점 평가 설정
function setupStarRating() {
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function() {
            const rating = parseInt(this.dataset.rating);
            selectRating(rating);
        });
        
        star.addEventListener('mouseenter', function() {
            const rating = parseInt(this.dataset.rating);
            highlightStars(rating);
        });
    });
    
    document.getElementById('starRating').addEventListener('mouseleave', function() {
        if (currentState.lastRating) {
            highlightStars(currentState.lastRating);
        } else {
            resetStarRating();
        }
    });
}

// 별점 선택
async function selectRating(rating) {
    currentState.lastRating = rating;
    highlightStars(rating);
    
    // 자동으로 평가 저장하고 다음 비디오로
    await submitRating(rating);
}

// 별 하이라이트
function highlightStars(rating) {
    const stars = document.querySelectorAll('.star');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

// 별점 초기화
function resetStarRating() {
    currentState.lastRating = null;
    const stars = document.querySelectorAll('.star');
    stars.forEach(star => star.classList.remove('active'));
    document.getElementById('commentSection').style.display = 'none';
    document.getElementById('commentInput').value = '';
}

// 별점 평가 제출
async function submitRating(rating) {
    if (!currentState.currentVideo) return;
    
    // 평가 애니메이션
    const player = document.getElementById('videoPlayer');
    player.classList.add('fade-out');
    
    // 리뷰 저장
    await saveReview('rate', rating, null);
    
    // 포인트 애니메이션
    const points = 5; // 평가 시 +5포인트
    showPointsAnimation(points);
    
    // 연속 평가 체크
    currentState.reviewStreak++;
    if (currentState.reviewStreak % 5 === 0) {
        showStreakAnimation();
        // 연속 평가 보너스
        await addBonusPoints(20);
    }
    
    // 다음 비디오
    setTimeout(() => {
        player.classList.remove('fade-out');
        loadNextVideo();
    }, 1000);
}

// 리뷰 저장
async function saveReview(action, rating, comment) {
    if (!currentState.currentVideo) return;
    
    try {
        // reviewer_id를 전달하지 않고 metadata에 user_id 저장
        const reviewData = {
            video_id: currentState.currentVideo.id,
            reviewer_id: '00000000-0000-0000-0000-000000000000', // 기본 UUID
            action: action,
            rating: rating,
            comment: comment,
            metadata: {
                actual_user_id: currentState.userId,  // 실제 user_id를 metadata에 저장
                reviewer_name: currentState.userName,
                company_id: currentState.companyId,
                store_id: currentState.storeId
            }
        };
        
        const { error } = await supabaseClient
            .from('video_reviews')
            .insert([reviewData]);
        
        if (error) throw error;
        
        // 평가 수 증가
        currentState.reviewedToday++;
        
        // 포인트 계산 및 추가
        const points = calculatePoints(action, rating, !!comment);
        currentState.earnedPoints += points;
        
        // 사용자 포인트 업데이트
        await updateUserPoints(points);
        
        // UI 업데이트
        updateProgressUI();
        
        // 일일 목표 달성 체크
        if (currentState.reviewedToday === currentState.dailyTarget) {
            await addBonusPoints(50);
            showSuccess('🎉 일일 목표 달성! +50 보너스 포인트!');
        }
        
    } catch (error) {
        console.error('리뷰 저장 오류:', error);
        showError('평가를 저장할 수 없습니다.');
    }
}

// 포인트 계산
function calculatePoints(action, rating, hasComment) {
    if (action === 'rate' && rating > 0) {
        return 5; // 평가 시 +5포인트
    }
    return 0;
}

// 사용자 포인트 업데이트
async function updateUserPoints(points) {
    try {
        // 현재 포인트 조회
        const { data: userData, error: fetchError } = await supabaseClient
            .from('user_progress')
            .select('total_points')
            .eq('user_id', currentState.userId)
            .single();
        
        if (fetchError) throw fetchError;
        
        const newTotalPoints = (userData?.total_points || 0) + points;
        
        // 포인트 업데이트
        const { error: updateError } = await supabaseClient
            .from('user_progress')
            .update({ 
                total_points: newTotalPoints,
                updated_at: new Date().toISOString()
            })
            .eq('user_id', currentState.userId);
        
        if (updateError) throw updateError;
        
    } catch (error) {
        console.error('포인트 업데이트 오류:', error);
    }
}

// 보너스 포인트 추가
async function addBonusPoints(points) {
    currentState.earnedPoints += points;
    await updateUserPoints(points);
    updateProgressUI();
}

// UI 헬퍼 함수들
function showLoadingState() {
    document.getElementById('loadingState').style.display = 'block';
    document.getElementById('videoPlayer').style.display = 'none';
    document.getElementById('emptyState').style.display = 'none';
    document.getElementById('reviewControls').style.display = 'none';
    document.getElementById('commentSection').style.display = 'none';
}

function hideLoadingState() {
    document.getElementById('loadingState').style.display = 'none';
}

function showEmptyState() {
    console.log('Showing empty state...');
    document.getElementById('emptyState').style.display = 'block';
    document.getElementById('loadingState').style.display = 'none';
    document.getElementById('videoPlayer').style.display = 'none';
    document.getElementById('reviewControls').style.display = 'none';
    document.getElementById('commentSection').style.display = 'none';
}

function showPointsAnimation(points) {
    const animation = document.getElementById('pointsAnimation');
    document.getElementById('animatedPointsValue').textContent = points;
    
    animation.style.display = 'block';
    
    setTimeout(() => {
        animation.style.display = 'none';
    }, 1000);
}

function showStreakAnimation() {
    const animation = document.getElementById('streakAnimation');
    animation.style.display = 'block';
    
    setTimeout(() => {
        animation.style.display = 'none';
    }, 2000);
}

function showSuccess(message) {
    const toast = document.getElementById('successToast');
    toast.querySelector('.toast-message').textContent = message;
    toast.style.display = 'flex';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

function showError(message) {
    const toast = document.getElementById('errorToast');
    toast.querySelector('.toast-message').textContent = message;
    toast.style.display = 'flex';
    
    setTimeout(() => {
        toast.style.display = 'none';
    }, 3000);
}

// 뒤로가기
function goBack() {
    const params = new URLSearchParams();
    if (currentState.userId) params.append('user_id', currentState.userId);
    if (currentState.userName) params.append('user_name', currentState.userName);
    if (currentState.companyId) params.append('company_id', currentState.companyId);
    if (currentState.storeId) params.append('store_id', currentState.storeId);
    
    window.location.href = `index.html?${params.toString()}`;
}

// 전역 함수로 내보내기
window.goBack = goBack;