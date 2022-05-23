// Autofocus

window.roamLastActiveBlock = null;

window.addEventListener('focus', (event) => {
    if (window.roamLastActiveBlock) {
        window.roamLastActiveBlock.focus();
    }
}, {passive: true});

window.addEventListener('blur', (event) => {
    window.roamLastActiveBlock = document.activeElement;
}, {passive: true});


// function simulateClick(element, shiftKey) {
//     const triggerMouseEvent = (node, eventType, shiftKey) => {
//         const clickEvent = new MouseEvent(eventType, {
//             shiftKey,
//             bubbles: true,
//             cancelable: true,
//         });
//         node.dispatchEvent(clickEvent);
//     };
//     triggerMouseEvent(element, "mouseover", shiftKey);
//     triggerMouseEvent(element, "mousedown", shiftKey);
//     triggerMouseEvent(element, "mouseup", shiftKey);
//     triggerMouseEvent(element, "click", shiftKey);
//     triggerMouseEvent(element, "mouseout", shiftKey);
// }

// window.addEventListener("focus", (event) => {
//     var dailyBlocks = document.querySelectorAll('.roam-log-page:first-of-type .rm-block-children .rm-block__input');
//     var lastDailyBlock = dailyBlocks.length > 0 ? dailyBlocks[Math.max(dailyBlocks.length - 1,0)] : null;
//     var blocks = document.querySelectorAll('.roam-article > div:first-of-type .rm-block-children .rm-block__input');
//     var lastBlock = blocks.length > 0 ? blocks[Math.max(blocks.length - 1,0)] : null;
//     var ghostBlock = document.getElementById('block-input-ghost')
//     if (lastDailyBlock) {
//         simulateClick(lastDailyBlock, false);
//         lastDailyBlock.scrollIntoViewIfNeeded();
//         return;
//     } else if (lastBlock) {
//         simulateClick(lastBlock, false);
//         lastBlock.scrollIntoViewIfNeeded();
//         return;
//     } else if (ghostBlock) {
//         simulateClick(ghostBlock, false);
//         ghostBlock.scrollIntoViewIfNeeded();
//         return;
//     }
// });





// Turn off focus mode on scroll

const scrollHandler = (event) => {
    if (document.activeElement && document.activeElement !== document.documentElement) {
        document.documentElement.click();
    }
}

window.addEventListener('wheel', scrollHandler, {passive: true});
window.addEventListener('touchmove', scrollHandler, {passive: true});

