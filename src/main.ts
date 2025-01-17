document.addEventListener("DOMContentLoaded", () => {
  const wrappers = document.querySelectorAll<HTMLAnchorElement>(".section__container--wrapper");

  wrappers.forEach((wrapper) => {
    const video = wrapper.querySelector<HTMLVideoElement>("video");

    wrapper.addEventListener("mouseenter", () => {
      if (video) {
        video.play(); 
      }
    });

    wrapper.addEventListener("mouseleave", () => {
      if (video) {
        video.pause(); 
      }
    });
  });

  // Selector de idioma
  const languageSelector = document.querySelector<HTMLAnchorElement>(".header__language-selector");
  const languageMenu = document.getElementById("language-menu");

  if (languageSelector && languageMenu) {
    languageSelector.addEventListener("click", (event) => {
      event.preventDefault();
      const isExpanded = languageSelector.getAttribute("aria-expanded") === "true";
      languageSelector.setAttribute("aria-expanded", (!isExpanded).toString());
      languageMenu.hidden = isExpanded;
    });

    document.addEventListener("click", (event) => {
      if (!languageSelector.contains(event.target as Node) && !languageMenu.contains(event.target as Node)) {
        languageSelector.setAttribute("aria-expanded", "false");
        languageMenu.hidden = true;
      }
    });
  }
});