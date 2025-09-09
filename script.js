// រង់ចាំឲ្យ HTML ទាំងអស់ផ្ទុករួចរាល់សិន
document.addEventListener("DOMContentLoaded", function () {
  // កំណត់អថេរសម្រាប់ធាតុសំខាន់ៗ
  const themeToggle = document.getElementById("theme-toggle");
  const body = document.body;
  const sunIcon = document.querySelector(".sun-icon");
  const moonIcon = document.querySelector(".moon-icon");

  // ទិន្នន័យ Link ទាំងអស់ (ត្រឡប់ទៅទម្រង់ដើម)
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
    personal: {
      name: "ក្រុមការងារពិសេស",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
      links: [
        { name: "ប៊ន ចន្ថា", url: "https://t.me/Ch_Tha002", role: "បច្ចេកទេស" },
        { name: "ឡោក ឆាណុន", url: "https://t.me/Maanon885", role: "បច្ចេកទេស" },
        {
          name: "រឿន ស្រីណែត",
          url: "https://t.me/roeurnsreyneth",
          role: "រដ្ឋបាល និង បច្ចេកទេស",
        },
        {
          name: "ប៉ី ថាវរី",
          url: "https://t.me/Peythavry",
          role: "ជំនួយរដ្ឋបាល",
        },
        {
          name: "សយ គឹមសុដានី",
          url: "https://t.me/Soykeomsodany",
          role: "ជំនួយរដ្ឋបាល",
        },
        {
          name: "ហឹន ចាន់ថៃ",
          url: "https://t.me/CHANTHAI6435",
          role: "ជំនួយរដ្ឋបាល",
        },
      ],
    },
    group: {
      name: "Telegram",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
      links: [{ name: "ក្រុមការងារ", url: "https://t.me/ITSupportKR" }],
    },
   guides: {
      name: "ការណែនាំផ្សេងៗ",
      icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"/></svg>`,
      links: [
        // --- Item ដែលមានស្រាប់ ---
        { name: "របៀបសុំច្បាប់ចេញក្រៅ(ឆាប់ៗនេះ)", url: "#" },
        {
          name: "របៀបសុំច្បាប់ឈប់សម្រាប់",
          url: "https://youtu.be/ZeXD2ibq6co?si=hCffpKldl28vmGip", 
        },
        { name: "របៀបបង្កើតគណនីប្រព័ន្ធវត្តមាន", url: "https://youtu.be/RNw7d4j9BPM" },

        // --- បន្ថែម Item ថ្មីចំនួន 5 នៅត្រង់នេះ ---
        { name: "A...", url: "ដាក់ Link នៅទីនេះ" },
        { name: "A...", url: "ដាក់ Link នៅទីនេះ" },
        { name: "A...", url: "ដាក់ Link នៅទីនេះ" },
        { name: "A...", url: "ដាក់ Link នៅទីនេះ" },
        { name: "A...", url: "ដាក់ Link នៅទីនេះ" },
      ],
    },

  const groupNav = document.getElementById("group-nav");
  const linkBox = document.getElementById("link-box");
  const searchInput = document.getElementById("searchInput");
  const backToTopBtn = document.getElementById("backToTopBtn");
  let activeGroupKey = "bot";

  if (!groupNav || !linkBox) {
    console.error(
      "Critical HTML elements 'group-nav' or 'link-box' not found."
    );
    return;
  }

  // មុខងារសម្រាប់បង្ហាញ Links (ត្រឡប់ទៅទម្រង់ដើម)
  function renderLinks(groupKey) {
    const group = data[groupKey];
    if (!group) return;

    const linksHtml = group.links
      .map((link) => {
        const roleHtml = link.role
          ? `<span class="link-item-role">តួនាទី : ${link.role}</span>`
          : "";

        return `
            <a href="${link.url}" class="link-item" target="_blank" rel="noopener noreferrer">
                <div class="icon-wrapper">
                    ${group.icon}
                </div>
                <div class="link-item-details">
                    <span class="link-item-name">${link.name}</span>
                    ${roleHtml}
                </div>
            </a>
        `;
      })
      .join("");

    linkBox.innerHTML = linksHtml;
  }

  // មុខងារសម្រាប់បង្កើតប៊ូតុង Navigation
  function renderNavButtons() {
    let buttonsHtml = "";
    for (const key in data) {
      buttonsHtml += `
          <button class="nav-button" data-group="${key}">
              ${data[key].icon}
              <span>${data[key].name}</span>
          </button>
      `;
    }
    groupNav.innerHTML = buttonsHtml;

    const navButtons = document.querySelectorAll(".nav-button");
    navButtons.forEach((button) => {
      button.addEventListener("click", () => {
        navButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        activeGroupKey = button.dataset.group;
        renderLinks(activeGroupKey);

        searchInput.value = "";
      });
    });

    if (navButtons.length > 0) {
      navButtons[0].classList.add("active");
    }
  }

  // --- ផ្នែកគ្រប់គ្រង Theme (Dark/Light Mode) ---
  const updateThemeIcons = (isDarkMode) => {
    sunIcon.style.display = isDarkMode ? "none" : "block";
    moonIcon.style.display = isDarkMode ? "block" : "none";
  };
  const applyTheme = (theme) => {
    if (theme === "dark") {
      body.classList.add("dark-theme");
      updateThemeIcons(true);
    } else {
      body.classList.remove("dark-theme");
      updateThemeIcons(false);
    }
  };
  const toggleTheme = () => {
    const currentTheme = body.classList.contains("dark-theme")
      ? "light"
      : "dark";
    applyTheme(currentTheme);
    localStorage.setItem("theme", currentTheme);
  };
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem("theme");
    const hour = new Date().getHours();
    const isNight = hour < 6 || hour >= 18;
    if (savedTheme) {
      applyTheme(savedTheme);
    } else {
      applyTheme(isNight ? "dark" : "light");
    }
  };
  themeToggle.addEventListener("click", toggleTheme);

  // --- ផ្នែកគ្រប់គ្រង Search & Back to Top ---
  function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const navButtons = document.querySelectorAll(".nav-button");

    if (!searchTerm) {
      renderLinks(activeGroupKey);
      navButtons.forEach((btn) => {
        if (btn.dataset.group === activeGroupKey) {
          btn.classList.add("active");
        }
      });
      return;
    }

    navButtons.forEach((btn) => btn.classList.remove("active"));

    let searchResultsHtml = "";
    for (const groupKey in data) {
      const group = data[groupKey];
      group.links.forEach((link) => {
        if (link.name.toLowerCase().includes(searchTerm)) {
          const roleHtml = link.role
            ? `<span class="link-item-role">តួនាទី : ${link.role}</span>`
            : "";
          searchResultsHtml += `
              <a href="${link.url}" class="link-item" target="_blank" rel="noopener noreferrer">
                  <div class="icon-wrapper">
                      ${group.icon}
                  </div>
                  <div class="link-item-details">
                      <span class="link-item-name">${link.name}</span>
                      ${roleHtml}
                  </div>
              </a>
          `;
        }
      });
    }

    linkBox.innerHTML =
      searchResultsHtml || "<p class='no-results'>រកមិនឃើញលទ្ធផលទេ។</p>";
  }

  function handleScroll() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      backToTopBtn.style.display = "block";
    } else {
      backToTopBtn.style.display = "none";
    }
  }

  function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  searchInput.addEventListener("input", handleSearch);
  window.addEventListener("scroll", handleScroll);
  backToTopBtn.addEventListener("click", scrollToTop);

  // ចាប់ផ្តើមដំណើរការទាំងអស់
  function initializeApp() {
    renderNavButtons();
    renderLinks(activeGroupKey);
    initializeTheme();
  }

  initializeApp();
});
