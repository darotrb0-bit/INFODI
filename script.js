// រង់ចាំให้เอกสาร HTML ทั้งหมดโหลดเสร็จก่อน ទើបเริ่มដំណើរការโค้ด JavaScript
document.addEventListener("DOMContentLoaded", function () {
  // --- ส่วนของการកំណត់អថេរសម្រាប់เรียกใช้ Element ពី HTML ---
  const body = document.body;
  const groupNav = document.getElementById("group-nav");
  const linkBox = document.getElementById("link-box");
  const searchInput = document.getElementById("searchInput");
  const backToTopBtn = document.getElementById("backToTopBtn");
  const themeToggle = document.getElementById("theme-toggle");
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  // --- ส่วนของข้อมูลทั้งหมด ---
  // ទិន្នន័យ Link ទាំងអស់ត្រូវបានរៀបចំជា Object
  const data = {
    bot: {
      name: "Telegram Bot",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 8V4H8"/><rect x="4" y="12" width="16" height="8" rx="2"/><path d="M2 12h20"/><path d="M17.5 12V8a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v4"/></svg>`,
      links: [
        { name: "Chart Bot", url: "https://t.me/NewFormDI_bot" },
        { name: "ច្បាប់ចេញក្រៅ", url: "https://t.me/PermisstionDI_bot" },
        { name: "ច្បាប់ឈប់សម្រាក", url: "https://t.me/LEPermisstionDI_bot" },
      ],
    },
    system: {
      name: "ប្រព័ន្ធ",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="10" y1="14" x2="21" y2="3"></line><path d="M21 3L11 3L11 14L21 3 Z"></path><path d="M21 14l-4 4h-7a4 4 0 0 1-4-4V5a4 4 0 0 1 4-4h11"></path></svg>`,
      links: [
        {
          name: "ប្រព័ន្ធវត្តមាន",
          url: "https://script.google.com/macros/s/AKfycbwzoUILD8sccXGtPLAcAgfAx-lrqAvnxKV4W2MJ6_jK5z9I0IqC6WJQu1kEe6whd1cC/exec",
        },
      ],
    },
    guides: {
      name: "ការណែនាំផ្សេងៗ",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      links: [
        { name: "របៀបសុំច្បាប់ចេញក្រៅ", url: "https://youtu.be/4jsgGXezbTg?si=g_9fx21L_X_eI_2F" },
        { name: "សុំច្បាប់ចេញក្រៅ || របៀបបញ្ជាក់ការចូលមកវិញ", url: "https://youtube.com/shorts/wPsdiChLu9o?feature=share" },
        { name: "របៀបសុំច្បាប់ឈប់សម្រាក", url: "https://youtu.be/ZeXD2ibq6co?si=kCiA34p7AtAA0wsF" },
        { name: "របៀបបង្កើតគណនីប្រព័ន្ធវត្តមាន", url: "https://youtu.be/RNw7d4j9BPM?si=AmiXFwAByBguO4-a" },
        { name: "របៀបបរក្សាទុកអ៊ីម៉ែលក្នុងប្រព័ន្ធ(ឆាប់ៗនេះ)", url: "#" },
      ],
    },
    personal: {
      name: "ក្រុមការងារពិសេស",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      links: [
        { name: "ប៊ន ចន្ថា", url: "https://t.me/Ch_Tha002", role: "បច្ចេកទេស" },
        { name: "ឡោក ឆាណុន", url: "https://t.me/Maanon_CH", role: "បច្ចេកទេស" },
        { name: "រឿន ស្រីណែត", url: "https://t.me/roeurnsreyneth", role: "រដ្ឋបាល និង បច្ចេកទេស" },
        { name: "ប៉ី ថាវរី", url: "https://t.me/Peythavry", role: "ជំនួយរដ្ឋបាល" },
        { name: "សយ គឹមសុដានី", url: "https://t.me/Soykeomsodany", role: "ជំនួយរដ្ឋបាល" },
        { name: "ហឹន ចាន់ថៃ", url: "https://t.me/CHANTHAI6435", role: "ជំនួយរដ្ឋបាល" },
      ],
    },
    group: {
      name: "Telegram",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      links: [{ name: "ក្រុមការងារ", url: "https://t.me/ITSupportKR" }],
    },
  };

  // កំណត់กลุ่มเริ่มต้นที่ถูกเลือก
  let activeGroupKey = Object.keys(data)[0]; // យក Key แรกสุดใน data object

  // --- ส่วนของฟังก์ชันជំនួយ (Helper Functions) ---

  /**
   * ฟังก์ชันសម្រាប់ดึงយក YouTube Video ID ពី URL
   * @param {string} url - URL ของวิดีโอ YouTube
   * @returns {string|null} - คืนค่าเป็น Video ID หรือ null ถ้าไม่พบ
   */
  function getYouTubeVideoId(url) {
    let videoId = null;
    try {
      const urlObj = new URL(url);
      if (urlObj.hostname === "youtu.be") {
        videoId = urlObj.pathname.slice(1);
      } else if (urlObj.hostname.includes("youtube.com")) {
        videoId = urlObj.searchParams.get("v");
      }
    } catch (e) {
      // ไม่ต้องทำอะไรถ้า URL ไม่ถูกต้อง
    }
    return videoId;
  }

  /**
   * ฟังก์ชันសម្រាប់สร้าง HTML សម្រាប់ Link Item មួយ
   * @param {object} link - Object ของ Link (มี name, url, role)
   * @param {object} group - Object ของกลุ่ม (เพื่อเอา icon)
   * @returns {string} - คืนค่าเป็น HTML string
   */
  function createLinkItemHtml(link, group) {
    const videoId = getYouTubeVideoId(link.url);

    // ตรวจสอบถ้าเป็น YouTube video
    if (videoId) {
      const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      return `
        <a href="${link.url}" class="link-item link-item--video" data-video-id="${videoId}" rel="noopener noreferrer">
          <div class="thumbnail-container">
            <img src="${thumbnailUrl}" alt="${link.name}" loading="lazy">
            <div class="play-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5 3 19 12 5 21 5 3"/></svg>
            </div>
          </div>
          <div class="video-details">
            <span class="link-item-name">${link.name}</span>
          </div>
        </a>`;
    }

    // สำหรับ Link ธรรมดา
    const roleHtml = link.role ? `<span class="link-item-role">តួនាទី : ${link.role}</span>` : "";
    return `
      <a href="${link.url}" class="link-item" target="_blank" rel="noopener noreferrer">
        <div class="icon-wrapper">${group.icon}</div>
        <div class="link-item-details">
          <span class="link-item-name">${link.name}</span>
          ${roleHtml}
        </div>
      </a>`;
  }

  // --- ส่วนของฟังก์ชันหลัก (Core Functions) ---

  /**
   * បង្ហាញ Link ទាំងអស់ในกลุ่มที่ถูกเลือก
   * @param {string} groupKey - Key ของกลุ่มใน data object (e.g., 'bot', 'system')
   */
  function renderLinks(groupKey) {
    const group = data[groupKey];
    if (!group) return;

    const linksHtml = group.links.map((link) => createLinkItemHtml(link, group)).join("");
    linkBox.innerHTML = linksHtml;
  }

  /**
   * สร้างปุ่มนำทาง (Navigation Buttons) ទាំងអស់จากข้อมูล
   */
  function renderNavButtons() {
    let buttonsHtml = "";
    for (const key in data) {
      buttonsHtml += `
        <button class="nav-button ${key === activeGroupKey ? 'active' : ''}" data-group="${key}">
          ${data[key].icon}
          <span>${data[key].name}</span>
        </button>`;
    }
    groupNav.innerHTML = buttonsHtml;

    // เพิ่ม Event Listener ให้กับปุ่มทั้งหมด
    document.querySelectorAll(".nav-button").forEach((button) => {
      button.addEventListener("click", () => {
        // เปลี่ยนกลุ่มที่ถูกเลือก (Active Group)
        activeGroupKey = button.dataset.group;

        // อัปเดต UI
        document.querySelectorAll(".nav-button").forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");
        renderLinks(activeGroupKey);

        // ล้างค่าในช่องค้นหา
        searchInput.value = "";
      });
    });
  }

  /**
   * จัดการการค้นหา
   */
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    
    // ถ้าช่องค้นหาว่างเปล่า ให้แสดงกลุ่มที่ถูกเลือกปัจจุบัน
    if (!searchTerm) {
      renderLinks(activeGroupKey);
      document.querySelectorAll(".nav-button").forEach(btn => {
        btn.classList.toggle('active', btn.dataset.group === activeGroupKey);
      });
      return;
    }

    // ถ้ามีคำค้นหา ให้ลบ active class ออกจากปุ่มทั้งหมด
    document.querySelectorAll(".nav-button").forEach((btn) => btn.classList.remove("active"));
    
    let searchResultsHtml = "";
    for (const groupKey in data) {
      const group = data[groupKey];
      group.links.forEach((link) => {
        if (link.name.toLowerCase().includes(searchTerm)) {
          searchResultsHtml += createLinkItemHtml(link, group);
        }
      });
    }

    // แสดงผลการค้นหา หรือแสดงข้อความ "រកមិនឃើញ"
    linkBox.innerHTML = searchResultsHtml || `<p class='no-results'>រកមិនឃើញលទ្ធផលទេ។</p>`;
  }

  // --- ส่วนของการจัดการ Theme (Dark/Light Mode) ---
  
  function applyTheme(theme) {
    body.classList.toggle("dark-theme", theme === "dark");
    sunIcon.style.display = theme === "dark" ? "none" : "block";
    moonIcon.style.display = theme === "dark" ? "block" : "none";
  }

  function toggleTheme() {
    const isDarkMode = body.classList.contains("dark-theme");
    const newTheme = isDarkMode ? "light" : "dark";
    applyTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  }

  function initializeTheme() {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      // ถ้าไม่มี theme ที่บันทึกไว้ ให้ตั้งค่าตามเวลากลางคืน/กลางวัน
      const hour = new Date().getHours();
      const isNight = hour < 6 || hour >= 18;
      applyTheme(isNight ? "dark" : "light");
    }
  }

  // --- ส่วนของการจัดการ Video Modal ---

  function setupVideoModal() {
    const videoModal = document.getElementById("videoModal");
    const videoPlayer = document.getElementById("videoPlayer");
    const closeModalBtn = document.querySelector(".close-modal-btn");

    if (!videoModal || !videoPlayer || !closeModalBtn) return;
    
    const closeModal = () => {
      videoModal.classList.remove('active');
      videoPlayer.src = ""; // សំខាន់มาก! ដើម្បីหยุดវីដេអូ
    };

    // ใช้ Event Delegation เพื่อจัดการคลิกบน Video Card
    document.body.addEventListener('click', function(event) {
      const videoLink = event.target.closest('.link-item--video');
      if (videoLink) {
        event.preventDefault(); // ការពារកុំให้เปิด Tab ថ្មី
        const videoId = videoLink.dataset.videoId;
        if (videoId) {
          videoPlayer.src = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`;
          videoModal.classList.add('active');
        }
      }
    });

    closeModalBtn.addEventListener('click', closeModal);
    videoModal.addEventListener('click', (event) => {
      if (event.target === videoModal) closeModal(); // ปิดเมื่อคลิกที่พื้นหลัง
    });
  }

  // --- ส่วนของการจัดการปุ่ม Back to Top ---

  function handleScroll() {
    const isScrolled = document.body.scrollTop > 200 || document.documentElement.scrollTop > 200;
    backToTopBtn.style.display = isScrolled ? "block" : "none";
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // --- ส่วนของการเริ่มต้นแอปพลิเคชันทั้งหมด ---

  function initializeApp() {
    // ตรวจสอบว่า Element ที่จำเป็นมีอยู่หรือไม่
    if (!groupNav || !linkBox) {
      console.error("Critical HTML elements 'group-nav' or 'link-box' not found.");
      return;
    }

    // เริ่มต้นการทำงานทั้งหมด
    initializeTheme();
    renderNavButtons();
    renderLinks(activeGroupKey);
    setupVideoModal();

    // เพิ่ม Event Listeners
    searchInput.addEventListener("input", handleSearch);
    window.addEventListener("scroll", handleScroll);
    backToTopBtn.addEventListener("click", scrollToTop);
    themeToggle.addEventListener("click", toggleTheme);
  }

  // ចាប់ផ្តើមដំណើរការแอปพลิเคชัน
  initializeApp();
});
