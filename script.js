/******************************************************************************/
/* Module declarations start here.
/******************************************************************************/

const backButton = (() => {
    const button = document.querySelector(".back");
    const greenArrow = button.firstElementChild;
    const whiteArrow = greenArrow.nextElementSibling;
    
    button.addEventListener("mouseover", e => {
        setTimeout(() => {
            greenArrow.style.display = "none";
            whiteArrow.style.display = "initial";
        }, 200);
    });
    
    button.addEventListener("mouseout", e => {
        setTimeout(() => {
            greenArrow.style.display = "initial";
            whiteArrow.style.display = "none";
        }, 200);
    });
})();