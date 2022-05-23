// Turn off focus mode on scroll

const scrollHandler = (event) => {
  if (
    document.activeElement &&
    document.activeElement !== document.documentElement
  ) {
    document.documentElement.click();
  }
};

window.addEventListener("wheel", scrollHandler, { passive: true });
window.addEventListener("touchmove", scrollHandler, { passive: true });
