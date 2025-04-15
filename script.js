document.addEventListener('DOMContentLoaded', function() {
    // Set current year in footer
    document.getElementById('current-year').textContent = new Date().getFullYear();

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
            language: "Language",
            hot_job_content: "Hot Job Of The Week!",
            hot_job_description: "Check out our <strong>\"Hot Job of the Week\"</strong> and join our award-winning team! This role offers fantastic growth opportunities, competitive benefits, and the chance to work with cutting-edge AI technology. Apply now and be part of our journey to excellence!",
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
            select_all_options: "Please select all options",
            no_job_found: "No matching job found",
            scan_to_apply: "Scan to Apply"
        },
        zh: {
            about_us: "关于我们",
            careers: "职业机会",
            hot_job: "热门职位 🔥",
            opportunities: "机会 🌟",
            refer_friend: "介绍个朋友",
            stay_connected: "保持联系",
            contact_us: "联系我们",
            language: "语言",
            hot_job_content: "本周热门职位!",
            hot_job_description: "查看我们的<strong>\"本周热门职位\"</strong>，加入我们屡获殊荣的团队吧！这个职位提供了绝佳的成长机会、具有竞争力的福利待遇，以及与尖端AI技术合作的机会。立即申请，成为我们追求卓越之旅的一部分！",
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
            select_all_options: "请选择所有选项",
            no_job_found: "未找到匹配的工作",
            scan_to_apply: "扫码申请"
        },
        jp: {
            about_us: "会社概要",
            careers: "採用情報",
            hot_job: "ホットジョブ 🔥",
            opportunities: "採用情報 🌟",
            refer_friend: "友達紹介",
            stay_connected: "つながりを続ける",
            contact_us: "お問い合わせ",
            language: "言語",
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
            select_all_options: "すべてのオプションを選択してください",
            no_job_found: "一致する仕事が見つかりません",
            scan_to_apply: "スキャンして応募"
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
            select_all_options: "모든 옵션을 선택하세요",
            no_job_found: "일치하는 직업을 찾을 수 없습니다",
            scan_to_apply: "스캔하여 지원"
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
            select_all_options: "Sila pilih semua pilihan",
            no_job_found: "Tiada pekerjaan yang sepadan ditemui",
            scan_to_apply: "Imbas untuk Memohon"
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
            select_all_options: "กรุณาเลือกตัวเลือกทั้งหมด",
            no_job_found: "ไม่พบงานที่ตรงกับเงื่อนไข",
            scan_to_apply: "สแกนเพื่อสมัคร"
        }
    };

    // Initialize variables
    let jsonData = [];
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobTypeSelect = document.getElementById('job-type-select');
    const generateBtn = document.getElementById('generate-btn');
    const applyBtn = document.getElementById('apply-btn');
    const urlParams = new URLSearchParams(window.location.search);

    // Get current language from URL
    function getLanguageFromUrl() {
        return urlParams.get('lang') || 'en';
    }

    // Update content based on language
    function updateContent(language) {
        const langContent = languages[language] || languages['en'];
        
        // Update all elements with data-translate attribute
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (langContent[key]) {
                if (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = langContent[key];
                } else {
                    element.innerHTML = langContent[key];
                }
            }
        });
        
        // Update dropdown options
        const dropdownOptions = {
            'language-select': 'choose_language',
            'location-select': 'choose_location',
            'job-type-select': 'choose_job_type'
        };
        
        for (const [id, key] of Object.entries(dropdownOptions)) {
            const select = document.getElementById(id);
            if (select && select.options.length > 0 && select.options[0].textContent.includes('Choose')) {
                select.options[0].textContent = langContent[key] || 'Choose';
            }
        }
    }

    // Load job data from JSON file
    function loadJobData() {
        fetch('data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                jsonData = data;
                populateDropdowns();
                setHotJob(getLanguageFromUrl());
            })
            .catch(error => {
                console.error('Error loading job data:', error);
                alert(languages[getLanguageFromUrl()]?.no_job_found || 'Failed to load job data. Using default data instead.');
                // Fallback to default data
/*                jsonData = [
                    {
                        "Positions": "Customer Success Specialist",
                        "Language": "Japanese",
                        "Location": "Penang",
                        "Evergreen title": "Customer Success Specialist - Japanese - Penang",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49421/customer-success-specialist---japanese---penang/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Customer Success Specialist",
                        "Language": "Korean",
                        "Location": "Penang",
                        "Evergreen title": "Customer Success Specialist - Korean - Penang",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49422/customer-success-specialist---korean---penang/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Customer Service Representative",
                        "Language": "English",
                        "Location": "Kuala Lumpur",
                        "Evergreen title": "Customer Service Representative - English - KL",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49423/customer-service-representative---english---kl/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Technical Support Specialist",
                        "Language": "Mandarin",
                        "Location": "Penang",
                        "Evergreen title": "Technical Support Specialist - Mandarin - Penang",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49424/technical-support-specialist---mandarin---penang/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Customer Service Representative",
                        "Language": "Thai",
                        "Location": "Bangkok",
                        "Evergreen title": "Customer Service Representative - Thai - Bangkok",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49425/customer-service-representative---thai---bangkok/job?mode=job&iis=LandingPage&iisn="
                    },
                    {
                        "Positions": "Sales Consultant",
                        "Language": "Malay",
                        "Location": "Kuala Lumpur",
                        "Evergreen title": "Sales Consultant - Malay - KL",
                        "Evergreen link": "https://careerseng-teleperformance.icims.com/jobs/49426/sales-consultant---malay---kl/job?mode=job&iis=LandingPage&iisn="
                    }
                ]; */
                populateDropdowns();
                setHotJob(getLanguageFromUrl());
            });
    }

    // Populate dropdowns with job data
    function populateDropdowns() {
        // Clear existing options
        languageSelect.innerHTML = '<option value="" disabled selected>' + (languages[getLanguageFromUrl()]?.choose_language || 'Choose your language') + '</option>';
        locationSelect.innerHTML = '<option value="" disabled selected>' + (languages[getLanguageFromUrl()]?.choose_location || 'Choose your location') + '</option>';
        jobTypeSelect.innerHTML = '<option value="" disabled selected>' + (languages[getLanguageFromUrl()]?.choose_job_type || 'Choose your job type') + '</option>';

        // Get unique languages, locations
        const uniqueLangs = [...new Set(jsonData.map(item => item.Language))];
        const uniqueLocs = [...new Set(jsonData.map(item => item.Location))];

        // Populate language dropdown
        uniqueLangs.forEach(lang => {
            const option = document.createElement('option');
            option.value = lang;
            option.textContent = lang;
            languageSelect.appendChild(option);
        });

        // Populate location dropdown
        uniqueLocs.forEach(loc => {
            const option = document.createElement('option');
            option.value = loc;
            option.textContent = loc;
            locationSelect.appendChild(option);
        });
    }

    // Update job types when language or location changes
    function updateJobTypes() {
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
        
        // Clear existing options
        jobTypeSelect.innerHTML = '<option value="" disabled selected>' + (languages[getLanguageFromUrl()]?.choose_job_type || 'Choose your job type') + '</option>';
        
        if (selectedLanguage && selectedLocation) {
            // Filter jobs based on selections
            const filteredJobs = jsonData.filter(item => 
                item.Language === selectedLanguage && 
                item.Location === selectedLocation
            );
            
            // Get unique job types
            const jobTypes = [...new Set(filteredJobs.map(item => item.Positions))];
            
            // Populate job types dropdown
            jobTypes.forEach(job => {
                const option = document.createElement('option');
                option.value = job;
                option.textContent = job;
                jobTypeSelect.appendChild(option);
            });
        }
    }

    // Generate QR code and show modal
    function openQrModal(url) {
        const qr = new QRious({
            element: document.getElementById('qr-code'),
            value: url,
            size: 200,
            background: 'white',
            foreground: 'black'
        });
        
        const jobUrlElement = document.getElementById('job-url');
        jobUrlElement.href = url;
        jobUrlElement.textContent = url;
        
        const qrModal = new bootstrap.Modal(document.getElementById('qrModal'));
        qrModal.show();
    }

    // Generate final URL with UTM parameters (your original working version)
    function generateFinalURL(baseURL, source, medium) {
        let finalURL = new URL(baseURL);
        let iisValue, iisnValue;

        switch (medium) {
            case 'social':
            case 'Social':
                iisValue = "Social Media";
                iisnValue = `${encodeURIComponent(source).replace(/%2B/g, '+')}`;
                break;
            case 'Career':
            case 'career':
                iisValue = "Career Fair";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'digital':
                iisValue = "Digital Ad";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'mobile':
            case 'Mobile':
                iisValue = "Mobile Stand";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'poster':
                iisValue = "Poster";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'flyers':
                iisValue = "Flyers";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'physical':
                iisValue = "Physical QR";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'FoTG':
                iisValue = "FoTG";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'banner1':
                iisValue = "Banner 1";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'banner2':
                iisValue = "Banner 2";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Email':
                iisValue = "Email Blast";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'public':
                iisValue = "Public Stands";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'grab':
                iisValue = "Grab";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            case 'Broadcast':
                iisValue = "Broadcast Comms";
                iisnValue = encodeURIComponent(source).replace(/%2B/g, '+');
                break;
            default:
                console.error("Unknown utm_medium");
                return baseURL;
        }

        // Replace "utm_source=" and "utm_medium=" in source and medium
        source = source.replace('utm_source=', '');
        medium = medium.replace('utm_medium=', '');

        finalURL.searchParams.set('mode', 'job');
        finalURL.searchParams.set('iis', encodeURIComponent(iisValue).replace(/%20/g, '+'));
        finalURL.searchParams.set('iisn', encodeURIComponent(iisnValue).replace(/%2B/g, '+'));

        return decodeURIComponent(finalURL.toString());
    }

    // Set hot job based on language
    function setHotJob(lang) {
        const hotJobs = {
            en: jsonData.find(job => job.Language === "English"),
            zh: jsonData.find(job => job.Language === "Mandarin"),
            jp: jsonData.find(job => job.Language === "Japanese"),
            kr: jsonData.find(job => job.Language === "Korean"),
            my: jsonData.find(job => job.Language === "Malay"),
            th: jsonData.find(job => job.Language === "Thai")
        };
        
        const hotJob = hotJobs[lang] || jsonData[0];
        
        if (hotJob && applyBtn) {
            applyBtn.onclick = function(e) {
                e.preventDefault();
                const urlParams = new URLSearchParams(window.location.search);
                const sourceParam = urlParams.get('utm_source') || '';
                const mediumParam = urlParams.get('utm_medium') || '';
                const finalLink = generateFinalURL(hotJob['Evergreen link'], sourceParam, mediumParam);
                window.open(finalLink, '_blank');
            };
        }
    }

    // Initialize event listeners
    function initEventListeners() {
        // Language and location dropdown changes
        if (languageSelect) languageSelect.addEventListener('change', updateJobTypes);
        if (locationSelect) locationSelect.addEventListener('change', updateJobTypes);

        // Generate QR button click
        if (generateBtn) {
            generateBtn.addEventListener('click', function() {
                const selectedLanguage = languageSelect.value;
                const selectedLocation = locationSelect.value;
                const selectedJob = jobTypeSelect.value;
                
                if (!selectedLanguage || !selectedLocation || !selectedJob) {
                    alert(languages[getLanguageFromUrl()]?.select_all_options || 'Please select all options');
                    return;
                }
                
                const jobData = jsonData.find(item => 
                    item.Language === selectedLanguage && 
                    item.Location === selectedLocation && 
                    item.Positions === selectedJob
                );
                
                if (jobData) {
                    const urlParams = new URLSearchParams(window.location.search);
                    const sourceParam = urlParams.get('utm_source') || '';
                    const mediumParam = urlParams.get('utm_medium') || '';
                    const finalLink = generateFinalURL(jobData["Evergreen link"], sourceParam, mediumParam);
                    openQrModal(finalLink);
                } else {
                    alert(languages[getLanguageFromUrl()]?.no_job_found || 'No matching job found');
                }
            });
        }

        // Language selector
        document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                const selectedLanguage = this.getAttribute('data-lang');
                updateContent(selectedLanguage);
                
                const urlParams = new URLSearchParams(window.location.search);
                urlParams.set('lang', selectedLanguage);
                window.history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
                
                setHotJob(selectedLanguage);
            });
        });

        // Share buttons
        document.getElementById('share-button-whatsapp')?.addEventListener('click', function() {
            const url = encodeURIComponent(document.getElementById('job-url').href);
            const text = encodeURIComponent("Check out this job opportunity at Teleperformance!");
            window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
        });

        document.getElementById('share-button-line')?.addEventListener('click', function() {
            const url = encodeURIComponent(document.getElementById('job-url').href);
            const text = encodeURIComponent("Check out this job opportunity at Teleperformance!");
            window.open(`https://line.me/R/msg/text/?${text}%0A%0A${url}`, '_blank');
        });
        document.getElementById("share-button-facebook").addEventListener("click", function() {
            const facebookMessage = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
            const facebookMessage2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
            const facebookCaption = encodeURIComponent(facebookMessage + "\n\n" + document.getElementById('job-url').href + "\n\n" + facebookMessage2);
            const facebookLink = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(document.getElementById('job-url').href)}&quote=${facebookCaption}`;
            window.open(facebookLink, "_blank", "width=600,height=400");
        });
        
        document.getElementById("share-button-IG").addEventListener("click", function() {
            const message = "🌟 Exciting news! Join our amazing team at Teleperformance! 🌟 We're expanding our family and want you to be a part of it. Click the link below to start your new journey :";
            const message2 = "\n\nLet's grow together! 🚀 #JoinTheTeam";
            const instagramLink = `https://www.instagram.com/?url=${encodeURIComponent(document.getElementById('job-url').href + "\n\n" + message + "\n\n" + message2)}`;
            window.open(instagramLink, "_blank");
        });
     
    }

    // Initialize everything
    function init() {
        updateContent(getLanguageFromUrl());
        loadJobData();
        initEventListeners();
    }

    init();
});
