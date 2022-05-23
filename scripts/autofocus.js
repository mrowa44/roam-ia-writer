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
