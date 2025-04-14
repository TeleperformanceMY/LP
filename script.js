document.addEventListener('DOMContentLoaded', function() {
    // Menu toggle functionality
    const menuToggle = document.querySelector('.menu-toggle');
    const menuWrapper = document.querySelector('.menu-wrapper');
    
    menuToggle.addEventListener('click', function() {
        menuWrapper.classList.toggle('open');
    });

    // Language translation functionality
    const languages = {
          en: {
            about_us: "About Us",
            careers: "Careers",
            hot_job: "Hot Job 🔥",
            opportunities: "Job Opportunities 🌟",
            refer_friend: "Refer A Friend",
            stay_connected: "Stay Connected",
            contact_us: "Contact Us",
            language: 'Language',
            hot_job_content: "Hot Job Of The Week!",
            hot_job_description: "Check out our <strong>“Hot Job of the Week”</strong> and join our award-winning team! This role offers fantastic growth opportunities, competitive benefits, and the chance to work with cutting-edge AI technology. Apply now and be part of our journey to excellence!",
            apply_now: "Apply Now!",
            find_job: "Find your perfect job!",
            choose_language: "Choose your language",
            choose_location: "Choose your location",
            choose_job_type: "Choose your job type",
            generate_qr: "Generate QR Code & Apply Now!",
            intro_text: "We are on the hunt for the <span class='highlight'>One</span>",
            team_response: "Our team will respond within <span class='highlighted-word'>48 hours!</span>",
            intro_text1: "Find your perfect <span class='highlight'><br>Job!</br></span>",
            intro_text2: "Our team will respond within <span class='highlighted-word'>48 hours!</span>",
            share_via: "Share via",
            preferred_language: "Preferred Language",
            stay_connected: "Stay Connected",
        }, 
        zh: {
            about_us: "关于我们",
            careers: "职业机会",
            hot_job: "热门职位 🔥",
            opportunities: "机会 🌟",
            refer_friend: "介绍个朋友",
            stay_connected: "保持联系",
            contact_us: "联系我们",
            language: '语言',
            hot_job_content: "本周热门职位!",
            hot_job_description: "查看我们的<strong>“本周热门职位”</strong>，加入我们屡获殊荣的团队吧！这个职位提供了绝佳的成长机会、具有竞争力的福利待遇，以及与尖端AI技术合作的机会。立即申请，成为我们追求卓越之旅的一部分！",
            apply_now: "立即申请！",
            find_job: "找到你的理想工作！",
            choose_language: "首选语言",
            choose_location: "选择您的位置",
            choose_job_type: "选择您的工作类型",
            generate_qr: "生成二维码并立即申请！",
            intro_text: "我们正在寻找那个<span class='highlight'>合适的人</span>",
            team_response: "我们的团队将在<span class='highlighted-word'> 48 小时</span>内回复！",
            intro_text1: "找到你的完美 <span class='highlight'><br>工作</br></span>",
            intro_text2: "我们的团队将在<span class='highlighted-word'> 48 小时</span>内回复！",
            share_via: "分享",
            preferred_language: "首选语言",
            stay_connected: "保持联系",
        },
        jp: {
            about_us: "会社概要",
            careers: "採用情報",
            hot_job: "ホットジョブ 🔥",
            opportunities: "採用情報 🌟",
            refer_friend: "友達紹介",
            stay_connected: "つながりを続ける",
            contact_us: "お問い合わせ",
            language: '言語',
            hot_job_content: "今週の注目のお仕事!",
            hot_job_description: "当社の<strong>「今週の注目のお仕事」</strong>をチェックして、受賞歴のあるチームに参加しませんか！この職務は、素晴らしい成長の機会、競争力のある福利厚生、そして最先端のAI テクノロジーを活用する機会を提供します。今すぐ応募して、私たちの卓越性への旅の一員になりませんか！",
            apply_now: "今すぐ応募!",
            find_job: "理想の仕事を見つける!",
            choose_language: "勤務地を選択",
            choose_location: "あなたの場所を選択してください",
            choose_job_type: "職種を選ぶ",
            generate_qr: "QRコードを作成し、今すぐご応募ください！",
            intro_text: "私たちは<span class='highlight'>誰か</span>を探しています",
            team_response: "<span class='highlighted-word'>48時間</span>以内に返信いたします！",
            intro_text1: "理想の<span class='highlight'><br>お仕事</br></span>を見つけましょう！",
            intro_text2: "<span class='highlighted-word'>48時間</span>以内に返信いたします！",
            share_via: "共有",
            preferred_language: "首選言語",
            stay_connected: "つながりを続ける",
        },
    kr: {
        about_us: "회사소개 / About TP",
        careers: "인재채용 / 커리어",
        stay_connected: "문의/연락처",
        contact_us: "문의하기",
        language: "언어",
        hot_job: "주간 인기 채용공고",
        hot_job_description: "주간 인기 채용공고를 확인하고 최고의 팀에 합류하세요!",
        apply_now: "지원하기",
        find_job: "여러분의 최고의 직장을 찾으세요!",
        choose_language: "언어 선택",
        choose_location: "국가/지역 선택",
        choose_job_type: "직무 유형 선택",
        generate_qr: "QR코드 생성 및 지원하기",
        intro_text: "함께할 인재를 찾습니다.",
        team_response: "48시간 내 관련 부서에서 응답할 예정입니다.",
        intro_text1: "여러분의 최고의 <br>직장을</br> 찾으세요!",
        intro_text2: "우리 팀은 <span class='highlighted-word'>48시간</span> 내에 답변드립니다.",
        share_via: "공유하기",
        preferred_language: "선호하는 언어",
        },
    my: {
        about_us: "Tentang Kami",
        careers: "Peluang Kerjaya",
        stay_connected: "Terus Berhubung",
        contact_us: "Hubungi Kami",
        language: "Bahasa",
        hot_job: "Kerja hangat minggu ini",
        hot_job_description: "Semak Kerja Hangat Minggu Ini dan sertai pasukan kami!",
        apply_now: "Mohon Sekarang!",
        find_job: "Cari pekerjaan impian anda!",
        choose_language: "Pilih bahasa anda",
        choose_location: "Pilih lokasi anda",
        choose_job_type: "Pilih jenis pekerjaan anda",
        generate_qr: "Jana kod QR dan mohon sekarang!",
        intro_text: "Kami sedang mencari orang yang sesuai.",
        team_response: "Pasukan kami akan bertindak balas dalam masa 48 jam!",
        intro_text1: "Cari pekerjaan<br>terbaik</br>anda!",
        intro_text2: "Pasukan kami akan bertindak balas dalam <span class='highlighted-word'>48 jam</span>!",
        share_via: "Kongsi melalui",
        preferred_language: "Bahasa Pilihan",
        },
    th: {
        about_us: "เกี่ยวกับเรา",
        careers: "อาชีพ",
        stay_connected: "เชื่อมต่อกับเรา",
        contact_us: "ติดต่อเรา",
        language: "ภาษา",
        hot_job: "ตำแหน่งงานด่วนประจำสัปดาห์",
        hot_job_description: "ตรวจสอบตำแหน่งงานด่วนประจำสัปดาห์และเข้าร่วมทีมของเรา!",
        apply_now: "สมัครตอนนี้!",
        find_job: "หางานที่ใช่สำหรับคุณ!",
        choose_language: "เลือกภาษาของคุณ",
        choose_location: "เลือกตำแหน่งที่ตั้ง",
        choose_job_type: "เลือกประเภทงาน",
        generate_qr: "สร้าง QR และสมัครได้เลย",
        intro_text: "เรากำลังตามหา คนที่ใช่",
        team_response: "ทีมงานของเราจะตอบกลับภายใน 48 ชั่วโมง!",
        intro_text1: "หางานที่<br>ดีที่สุด</br>สำหรับคุณ!",
        intro_text2: "ทีมงานของเราจะตอบกลับใน <span class='highlighted-word'>48 ชั่วโมง</span>!",
        share_via: "แชร์ผ่าน",
        preferred_language: "ภาษาที่ต้องการ",
    }
    };
    // Translation function
    function updateContent(language) {
        const langContent = languages[language] || languages['en'];
        
        for (const [selector, key] of Object.entries({
            '.intro-text h1': 'intro_text',
            '.hot-job h2': 'hot_job_content',
            '.hot-job p': 'hot_job_description',
            '.find-job h2': 'find_job',
            '.generate-btn': 'generate_qr',
            '.container h1': 'team_response',
            '.langlabel': 'preferred_language',
            '.loclabel': 'choose_location',
            '.jobt': 'choose_job_type'
        })) {
            const element = document.querySelector(selector);
            if (element && langContent[key]) {
                element.innerHTML = langContent[key];
            }
        }
    }

    // Language dropdown functionality
    document.querySelectorAll('.language-dropdown a[data-lang]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLanguage = this.getAttribute('data-lang');
            updateContent(selectedLanguage);
        });
    });

    // Job dropdown functionality
    let jsonData = [];
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobTypeSelect = document.getElementById('job-type-select');

    // Populate dropdowns from JSON data
    fetch('data.json')
        .then(response => response.json())
        .then(data => {
            jsonData = data;
            
            // Get unique values for each dropdown
            const languages = [...new Set(data.map(item => item.Language))];
            const locations = [...new Set(data.map(item => item.Location))];
            
            // Populate language dropdown
            languages.forEach(lang => {
                const option = document.createElement('option');
                option.value = lang;
                option.textContent = lang;
                languageSelect.appendChild(option);
            });
            
            // Populate location dropdown
            locations.forEach(loc => {
                const option = document.createElement('option');
                option.value = loc;
                option.textContent = loc;
                locationSelect.appendChild(option);
            });
        });

    // Update job types when language or location changes
    function updateJobTypes() {
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
        
        // Clear existing options
        jobTypeSelect.innerHTML = '<option value="" disabled selected>Choose your job type</option>';
        
        if (selectedLanguage && selectedLocation) {
            // Filter jobs based on selections
            const jobs = jsonData.filter(item => 
                item.Language === selectedLanguage && 
                item.Location === selectedLocation
            );
            
            // Get unique job types
            const jobTypes = [...new Set(jobs.map(item => item.Positions))];
            
            // Populate job types dropdown
            jobTypes.forEach(job => {
                const option = document.createElement('option');
                option.value = job;
                option.textContent = job;
                jobTypeSelect.appendChild(option);
            });
        }
    }

    languageSelect.addEventListener('change', updateJobTypes);
    locationSelect.addEventListener('change', updateJobTypes);

    // Generate QR code functionality
    document.getElementById('generate-btn').addEventListener('click', function() {
        const language = languageSelect.value;
        const location = locationSelect.value;
        const jobType = jobTypeSelect.value;
        
        if (!language || !location || !jobType) {
            alert('Please select all options');
            return;
        }
        
        // Find the matching job
        const job = jsonData.find(item => 
            item.Language === language && 
            item.Location === location && 
            item.Positions === jobType
        );
        
        if (job) {
            // Generate QR code
            const qr = new QRious({
                element: document.getElementById('qr-code'),
                value: job['Evergreen link'],
                size: 200
            });
            
            // Set job URL
            document.getElementById('job-url').href = job['Evergreen link'];
            document.getElementById('job-url').textContent = job['Evergreen link'];
            
            // Show modal
            document.getElementById('qr-modal').style.display = 'flex';
        } else {
            alert('No matching job found');
        }
    });

    // Close modal
    document.querySelector('.close').addEventListener('click', function() {
        document.getElementById('qr-modal').style.display = 'none';
    });

    // Share buttons
    document.getElementById('share-button-whatsapp').addEventListener('click', function() {
        const url = encodeURIComponent(document.getElementById('job-url').href);
        const text = encodeURIComponent("Check out this job opportunity at Teleperformance!");
        window.open(`https://wa.me/?text=${text}%20${url}`);
    });

    document.getElementById('share-button-line').addEventListener('click', function() {
        const url = encodeURIComponent(document.getElementById('job-url').href);
        const text = encodeURIComponent("Check out this job opportunity at Teleperformance!");
        window.open(`https://line.me/R/msg/text/?${text}%0A%0A${url}`);
    });

    // Apply button
    document.getElementById('apply-btn').addEventListener('click', function(e) {
        e.preventDefault();
        window.open(this.getAttribute('href'), '_blank');
    });
});
