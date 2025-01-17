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
});