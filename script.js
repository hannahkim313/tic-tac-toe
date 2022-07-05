/******************************************************************************/
/* Module declarations start here.
/******************************************************************************/

const playerIconSelection = (() => {

    /** Variable declarations start here. */

    let playerOneIndex = 1;
    let playerTwoIndex = 1;

    const playerIcons = document.querySelectorAll(".img-container");

    const playerOneIcons = document.querySelectorAll(".player-one .img-container");
    const playerOneLeftBtn = document.querySelector(".player-one .left");
    const playerOneRightBtn = document.querySelector(".player-one .right");

    const playerTwoIcons = document.querySelectorAll(".player-two .img-container");
    const playerTwoLeftBtn = document.querySelector(".player-two .left");
    const playerTwoRightBtn = document.querySelector(".player-two .right");

    /** Function declarations start here. */

    /**
     * Displays the first player icon and hides the rest of the icons.
     */
    function loadIcons() {
        for (icon of playerIcons) {
            if (icon === playerIcons[0] || icon === playerIcons[10]) {
                icon.style.display = "block";
            }
            else icon.style.display = "none";
        }
    }

    /**
     * Displays the next or previous icon in list for each player.
     * @param {Number} index - Index number of icon in list.
     * @param {String} player - Player number.
     */
    function displayIcon(index, player) {
        if (player === "one") {
            for (icon of playerOneIcons) {
                if (index > playerOneIcons.length) index = 1;
                if (index < 1) index = playerOneIcons.length;
                if (icon === playerOneIcons[index - 1]) icon.style.display = "block";
                else icon.style.display = "none";
            }
        }
        if (player === "two") {
            for (icon of playerTwoIcons) {
                if (index > playerTwoIcons.length) index = 1;
                if (index < 1) index = playerTwoIcons.length;
                if (icon === playerTwoIcons[index - 1]) icon.style.display = "block";
                else icon.style.display = "none";
            }
        }
    }

    /**
     * Checks if index is out of range and, if it is, resets the value.
     * @param {String} player - Player number.
     */
    function resetIndex(player) {
        if (player === "one") {
            if (playerOneIndex > playerOneIcons.length) playerOneIndex = 1;
            if (playerOneIndex < 1) playerOneIndex = playerOneIcons.length;
        }
        if (player === "two") {
            if (playerTwoIndex > playerTwoIcons.length) playerTwoIndex = 1;
            if (playerTwoIndex < 1) playerTwoIndex = playerTwoIcons.length;
        }
    }

    /** Event listeners start here. */

    window.addEventListener("pageshow", e => loadIcons());
    
    playerOneLeftBtn.addEventListener("click", e => {
        playerOneIndex--;
        displayIcon(playerOneIndex, "one");
        resetIndex("one");
    });

    playerOneRightBtn.addEventListener("click", e => {
        playerOneIndex++;
        displayIcon(playerOneIndex, "one");
        resetIndex("one");
    });

    playerTwoLeftBtn.addEventListener("click", e => {
        playerTwoIndex--;
        displayIcon(playerTwoIndex, "two");
        resetIndex("two");
    });

    playerTwoRightBtn.addEventListener("click", e => {
        playerTwoIndex++;
        displayIcon(playerTwoIndex, "two");
        resetIndex("two");
    });
})();

const backButton = (() => {

    /** Variable declarations start here. */

    const button = document.querySelector(".back");
    const greenArrow = button.firstElementChild;
    const whiteArrow = greenArrow.nextElementSibling;
    
    /** Event listeners start here. */

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