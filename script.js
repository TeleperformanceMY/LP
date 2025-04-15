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
            share_via: "Share Via",
            preferred_language: "Preferred Language",
            scan_to_apply: "Scan to Apply"
        },
        zh: {
            about_us: "关于我们",
            careers: "职业机会",
            hot_job: "热门职位 🔥",
            opportunities: "工作机会 🌟",
            refer_friend: "推荐朋友",
            stay_connected: "保持联系",
            contact_us: "联系我们",
            language: "语言",
            hot_job_content: "本周热门职位!",
            hot_job_description: "查看我们的<strong>\"本周热门职位\"</strong>，加入我们屡获殊荣的团队吧！这个职位提供了绝佳的成长机会、具有竞争力的福利待遇，以及与尖端AI技术合作的机会。立即申请，成为我们追求卓越之旅的一部分！",
            apply_now: "立即申请！",
            find_job: "找到你的理想工作！",
            choose_language: "选择语言",
            choose_location: "选择地点",
            choose_job_type: "选择工作类型",
            generate_qr: "生成二维码并立即申请！",
            intro_text: "我们正在寻找<span class='highlight'>合适的人选</span>",
            team_response: "我们的团队将在<span class='highlighted-word'>48小时</span>内回复！",
            share_via: "分享",
            preferred_language: "首选语言",
            scan_to_apply: "扫码申请"
        },
        jp: {
            about_us: "会社概要",
            careers: "採用情報",
            hot_job: "ホットジョブ 🔥",
            opportunities: "求人情報 🌟",
            refer_friend: "友達を紹介",
            stay_connected: "つながりを保つ",
            contact_us: "お問い合わせ",
            language: "言語",
            hot_job_content: "今週の注目の求人!",
            hot_job_description: "当社の<strong>「今週の注目の求人」</strong>をチェックして、受賞歴のあるチームに参加しましょう！この役職は、素晴らしい成長機会、競争力のある福利厚生、最先端のAI技術に携わる機会を提供します。今すぐ応募して、私たちの卓越性への旅に参加しましょう！",
            apply_now: "今すぐ応募!",
            find_job: "理想の仕事を見つけよう!",
            choose_language: "言語を選択",
            choose_location: "場所を選択",
            choose_job_type: "職種を選択",
            generate_qr: "QRコードを生成して今すぐ応募!",
            intro_text: "私たちは<span class='highlight'>適任者</span>を探しています",
            team_response: "チームは<span class='highlighted-word'>48時間</span>以内に返信します!",
            share_via: "共有",
            preferred_language: "希望言語",
            scan_to_apply: "スキャンして応募"
        },
        kr: {
            about_us: "회사소개",
            careers: "채용정보",
            hot_job: "핫잡 🔥",
            opportunities: "채용기회 🌟",
            refer_friend: "친구추천",
            stay_connected: "연락유지",
            contact_us: "문의하기",
            language: "언어",
            hot_job_content: "이번 주 핫잡!",
            hot_job_description: "우리의 <strong>\"이번 주 핫잡\"</strong>을 확인하고 수상 경력이 있는 팀에 합류하세요! 이 역할은 훌륭한 성장 기회, 경쟁력 있는 혜택 및 최첨단 AI 기술을 사용할 수 있는 기회를 제공합니다. 지금 지원하여 우리의 탁월함을 향한 여정에 동참하세요!",
            apply_now: "지금 지원하세요!",
            find_job: "당신에게 딱 맞는 일자리를 찾아보세요!",
            choose_language: "언어 선택",
            choose_location: "위치 선택",
            choose_job_type: "직무 유형 선택",
            generate_qr: "QR 코드 생성 및 지금 지원!",
            intro_text: "우리는 <span class='highlight'>적임자</span>를 찾고 있습니다",
            team_response: "우리 팀은 <span class='highlighted-word'>48시간</span> 이내에 답변드립니다!",
            share_via: "공유하기",
            preferred_language: "선호 언어",
            scan_to_apply: "스캔하여 지원"
        },
        my: {
            about_us: "Tentang Kami",
            careers: "Kerjaya",
            hot_job: "Kerja Hangat 🔥",
            opportunities: "Peluang Pekerjaan 🌟",
            refer_friend: "Rakan Rujuk",
            stay_connected: "Kekal Berhubung",
            contact_us: "Hubungi Kami",
            language: "Bahasa",
            hot_job_content: "Kerja Hangat Minggu Ini!",
            hot_job_description: "Lihat <strong>\"Kerja Hangat Minggu Ini\"</strong> kami dan sertai pasukan pemenang anugerah kami! Peranan ini menawarkan peluang pertumbuhan yang hebat, faedah yang kompetitif, dan peluang untuk bekerja dengan teknologi AI canggih. Mohon sekarang dan jadilah sebahagian daripada perjalanan kami ke kecemerlangan!",
            apply_now: "Mohon Sekarang!",
            find_job: "Cari pekerjaan sempurna anda!",
            choose_language: "Pilih bahasa",
            choose_location: "Pilih lokasi",
            choose_job_type: "Pilih jenis pekerjaan",
            generate_qr: "Hasilkan Kod QR & Mohon Sekarang!",
            intro_text: "Kami mencari <span class='highlight'>Yang Satu</span>",
            team_response: "Pasukan kami akan membalas dalam masa <span class='highlighted-word'>48 jam!</span>",
            share_via: "Kongsi Melalui",
            preferred_language: "Bahasa Pilihan",
            scan_to_apply: "Imbas untuk Memohon"
        },
        th: {
            about_us: "เกี่ยวกับเรา",
            careers: "อาชีพ",
            hot_job: "งานร้อนแรงประจำสัปดาห์ 🔥",
            opportunities: "โอกาสในการทำงาน 🌟",
            refer_friend: "แนะนำเพื่อน",
            stay_connected: "ติดต่อกันไว้",
            contact_us: "ติดต่อเรา",
            language: "ภาษา",
            hot_job_content: "งานร้อนแรงประจำสัปดาห์!",
            hot_job_description: "ตรวจสอบ<strong>\"งานร้อนแรงประจำสัปดาห์\"</strong>ของเราและเข้าร่วมทีมที่ได้รับรางวัลของเรา! ตำแหน่งนี้เปิดโอกาสในการเติบโตอย่างยอดเยี่ยม สวัสดิการที่แข่งขันได้ และโอกาสในการทำงานกับเทคโนโลยี AI ล้ำสมัย สมัครตอนนี้และเป็นส่วนหนึ่งของการเดินทางสู่ความเป็นเลิศของเรา!",
            apply_now: "สมัครเลย!",
            find_job: "หางานในฝันของคุณ!",
            choose_language: "เลือกภาษา",
            choose_location: "เลือกสถานที่",
            choose_job_type: "เลือกประเภทงาน",
            generate_qr: "สร้าง QR Code และสมัครเลย!",
            intro_text: "เรากำลังตามหา<span class='highlight'>คนที่ใช่</span>",
            team_response: "ทีมงานของเราจะตอบกลับภายใน<span class='highlighted-word'>48 ชั่วโมง!</span>",
            share_via: "แชร์ผ่าน",
            preferred_language: "ภาษาที่ต้องการ",
            scan_to_apply: "สแกนเพื่อสมัคร",
            select_all_options: "กรุณาเลือกตัวเลือกทั้งหมด",
            no_job_found: "ไม่พบงานที่ตรงกับเงื่อนไข",
            share_job_text: "ดูโอกาสในการทำงานที่ Teleperformance!"
        }
    };

    // Translation function
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

    // Language dropdown functionality
    document.querySelectorAll('.dropdown-item[data-lang]').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const selectedLanguage = this.getAttribute('data-lang');
            updateContent(selectedLanguage);
            
            // Update URL with language parameter
            const urlParams = new URLSearchParams(window.location.search);
            urlParams.set('lang', selectedLanguage);
            window.history.replaceState(null, '', `${window.location.pathname}?${urlParams.toString()}`);
            
            // Reload job data for the selected language
            loadJobData(selectedLanguage);
        });
    });

    // Get current language from URL or default to English
    function getLanguageFromUrl() {
        const params = new URLSearchParams(window.location.search);
        return params.get('lang') || 'en';
    }

    // Initialize with current language
    const currentLanguage = getLanguageFromUrl();
    updateContent(currentLanguage);

    // Job data and dropdown functionality
    let jsonData = [];
    const languageSelect = document.getElementById('language-select');
    const locationSelect = document.getElementById('location-select');
    const jobTypeSelect = document.getElementById('job-type-select');

    async function loadJobData(lang = 'en') {
    try {
        const response = await fetch('data.json');
        if (!response.ok) throw new Error('Network response was not ok');
        jsonData = await response.json();
        populateDropdowns();
        setHotJob(lang);
    } catch (error) {
        console.error('Error loading job data:', error);
        // Fallback to static data
        jsonData = [
            // ... (keep your fallback data here)
        ];
        populateDropdowns();
        setHotJob(lang);
    } catch (error) {
            console.error('Error loading job data:', error);
            // Fallback to static data or show error message
            populateDropdowns();
        }
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
        
        if (hotJob) {
            document.getElementById('apply-btn').onclick = function(e) {
                e.preventDefault();
                window.open(generateFinalURL(hotJob['Evergreen link'], 'LandingPage', 'social'), '_blank');
            };
        }
    }

    // Populate dropdowns from JSON data
    function populateDropdowns() {
        // Get unique values for each dropdown
        const languages = [...new Set(jsonData.map(item => item.Language))];
        const locations = [...new Set(jsonData.map(item => item.Location))];
        
        // Clear existing options
        languageSelect.innerHTML = '<option value="" disabled selected>' + (languages[currentLanguage]?.choose_language || 'Choose your language') + '</option>';
        locationSelect.innerHTML = '<option value="" disabled selected>' + (languages[currentLanguage]?.choose_location || 'Choose your location') + '</option>';
        jobTypeSelect.innerHTML = '<option value="" disabled selected>' + (languages[currentLanguage]?.choose_job_type || 'Choose your job type') + '</option>';
        
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
    }

    // Update job types when language or location changes
    function updateJobTypes() {
        const selectedLanguage = languageSelect.value;
        const selectedLocation = locationSelect.value;
        
        // Clear existing options
        jobTypeSelect.innerHTML = '<option value="" disabled selected>' + (languages[currentLanguage]?.choose_job_type || 'Choose your job type') + '</option>';
        
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

    // Initialize dropdowns
    loadJobData(currentLanguage);
    
    // Add event listeners
    languageSelect.addEventListener('change', updateJobTypes);
    locationSelect.addEventListener('change', updateJobTypes);

    // Generate QR code functionality
    document.getElementById('generate-btn').addEventListener('click', function() {
        const language = languageSelect.value;
        const location = locationSelect.value;
        const jobType = jobTypeSelect.value;
        
        if (!language || !location || !jobType) {
            alert(languages[currentLanguage]?.select_all_options || 'Please select all options');
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
                size: 200,
                background: 'white',
                foreground: 'black',
                level: 'H'
            });
            
            // Set job URL
            const jobUrlElement = document.getElementById('job-url');
            jobUrlElement.href = job['Evergreen link'];
            jobUrlElement.textContent = job['Evergreen title'];
            
            // Show modal
            const qrModal = new bootstrap.Modal(document.getElementById('qrModal'));
            qrModal.show();
        } else {
            alert(languages[currentLanguage]?.no_job_found || 'No matching job found');
        }
    });

    // Share buttons
    document.getElementById('share-button-whatsapp').addEventListener('click', function() {
        const url = encodeURIComponent(document.getElementById('job-url').href);
        const text = encodeURIComponent(languages[currentLanguage]?.share_job_text || "Check out this job opportunity at Teleperformance!");
        window.open(`https://wa.me/?text=${text}%20${url}`, '_blank');
    });

    document.getElementById('share-button-line').addEventListener('click', function() {
        const url = encodeURIComponent(document.getElementById('job-url').href);
        const text = encodeURIComponent(languages[currentLanguage]?.share_job_text || "Check out this job opportunity at Teleperformance!");
        window.open(`https://line.me/R/msg/text/?${text}%0A%0A${url}`, '_blank');
    });

    // Function to generate final URL with UTM parameters
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

        finalURL.searchParams.set('iis', encodeURIComponent(iisValue).replace(/%20/g, '+'));
        finalURL.searchParams.set('iisn', encodeURIComponent(iisnValue).replace(/%2B/g, '+'));

        return decodeURIComponent(finalURL.toString());
    }

    // Add animation class to elements
    const animatedElements = document.querySelectorAll('.hero-section, .job-section, .hot-job-card, .find-job-card');
    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        setTimeout(() => {
            el.classList.add('animate-fade-in');
        }, index * 100);
    });
});
