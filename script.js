// Autofocus

window.roamLastActiveBlock = null;

window.addEventListener(
  "focus",
  (event) => {
    if (window.roamLastActiveBlock) {
      window.roamLastActiveBlock.focus();
    }
  },
  { passive: true }
);

window.addEventListener(
  "blur",
  (event) => {
    window.roamLastActiveBlock = document.activeElement;
  },
  { passive: true }
);





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
