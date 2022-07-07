/******************************************************************************/
/* Module declarations start here.
/******************************************************************************/

/**
 *   Sections:
 * 
 *   1. Helper functions
 *   1. Home page
 *   2. Players page
 *   3. Game page
 */

// Helper function declarations start here. (1) //

const helperFunctions = (() => {

    /**
     * Changes the image displayed on a button during a mouseover event.
     * @param {Object} initialImg - Element object of initial image.
     * @param {Object} newImg - Element object of new image.
     */
    const changeOnMouseOver = (initialImg, newImg) => {
        setTimeout(() => {
            initialImg.style.display = "none";
            newImg.style.display = "initial";
        }, 200);
    };

    /**
     * Changes the image displayed on a button during a mouseout event.
     * @param {Object} initialImg - Element object of initial image.
     * @param {Object} newImg - Element object of new image.
     */
    const changeOnmouseOut = (initialImg, newImg) => {
        setTimeout(() => {
            initialImg.style.display = "initial";
            newImg.style.display = "none";
        }, 200);
    };

    /**
     * Changes page displayed on window.
     * @param {Object} currentPage - Element object of current page.
     * @param {Object} newPage - Element object of new page.
     */
    const switchPageDisplay = (currentPage, newPage) => {
        currentPage.style.display = "none";
        newPage.style.display = "flex";
    };

    return {
        changeOnMouseOver,
        changeOnmouseOut,
        switchPageDisplay
    }
})();

// Home page declarations start here. (2) //

const homePage = (() => {

    // Variable declarations start here.
    
    const homePage = document.querySelector(".home-page");

    const playersPage = document.querySelector(".players-page");

    const playButton = document.querySelector(".play");
    const greenIcon = playButton.firstElementChild;
    const whiteIcon = greenIcon.nextElementSibling;

    // Event listeners start here.

    playButton.addEventListener("mouseover", e => {
        helperFunctions.changeOnMouseOver(greenIcon, whiteIcon)
    });

    playButton.addEventListener("mouseout", e => {
        helperFunctions.changeOnmouseOut(greenIcon, whiteIcon);
    });

    playButton.addEventListener("click", e => {
        helperFunctions.switchPageDisplay(homePage, playersPage);
    });
})();

// Players page declarations start here. (3) //

const playersPage = (() => {

    // Variable declarations start here.

    const homePage = document.querySelector(".home-page");

    const playersPage = document.querySelector(".players-page");
    const playerIcons = document.querySelectorAll(".players-page .img-container");

    const backButton = document.querySelector(".back");
    const greenArrow = backButton.firstElementChild;
    const whiteArrow = greenArrow.nextElementSibling;
    
    let playerOneIndex = 1;
    let playerOneSelectedIcon;
    let playerTwoIndex = 1;
    let playerTwoSelectedIcon;
    
    const playerOneIcons = document.querySelectorAll(".players .player-one .img-container");
    const playerOneLeftBtn = document.querySelector(".player-one .left");
    const playerOneRightBtn = document.querySelector(".player-one .right");
    
    const playerTwoIcons = document.querySelectorAll(".players .player-two .img-container");
    const playerTwoLeftBtn = document.querySelector(".player-two .left");
    const playerTwoRightBtn = document.querySelector(".player-two .right");
    
    const submitButton = document.querySelector(".submit");

    const gamePage = document.querySelector(".game-page");
    const playerOneGamePageIconContainer = document.querySelector(".game-page .player-one .img-container");
    const playerTwoGamePageIconContainer = document.querySelector(".game-page .player-two .img-container");

    // Function declarations start here.

    /**
     * Displays the first player icon and hides the rest of the icons
     * upon page load.
     */
     const loadIcons = () => {
        for (const icon of playerIcons) {
            if (icon === playerIcons[0] || icon === playerIcons[10]) {
                icon.style.display = "block";
            }
            else icon.style.display = "none";
        }
    };

    /**
     * Displays the next or previous icon in list of icons.
     * @param {Number} index - Index number of icon in list.
     * @param {String} player - Player number.
     */
     const displayIcon = (index, player) => {
        if (player === "one") {
            for (const icon of playerOneIcons) {
                if (index > playerOneIcons.length) index = 1;
                if (index < 1) index = playerOneIcons.length;
                if (icon === playerOneIcons[index - 1]) {
                    icon.style.display = "block";
                    playerOneSelectedIcon = icon.firstElementChild;
                }
                else icon.style.display = "none";
            }
        }
        if (player === "two") {
            for (const icon of playerTwoIcons) {
                if (index > playerTwoIcons.length) index = 1;
                if (index < 1) index = playerTwoIcons.length;
                if (icon === playerTwoIcons[index - 1]) {
                    icon.style.display = "block";
                    playerTwoSelectedIcon = icon.firstElementChild;
                }
                else icon.style.display = "none";
            }
        }
    };

    /**
     * Checks if index is out of range and, if it is, resets the value.
     * @param {String} player - Player number.
     */
    const resetIndex = (player) => {
        if (player === "one") {
            if (playerOneIndex > playerOneIcons.length) playerOneIndex = 1;
            if (playerOneIndex < 1) playerOneIndex = playerOneIcons.length;
        }
        if (player === "two") {
            if (playerTwoIndex > playerTwoIcons.length) playerTwoIndex = 1;
            if (playerTwoIndex < 1) playerTwoIndex = playerTwoIcons.length;
        }
    };

    // Event listeners start here.

    window.addEventListener("pageshow", e => {
        playersPage.style.display = "none";
        loadIcons();
    });

    backButton.addEventListener("mouseover", e => {
        helperFunctions.changeOnMouseOver(greenArrow, whiteArrow);
    });
    
    backButton.addEventListener("mouseout", e => {
        helperFunctions.changeOnmouseOut(greenArrow, whiteArrow);
    });

    backButton.addEventListener("click", e => {
        helperFunctions.switchPageDisplay(playersPage, homePage);
    });
    
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

    submitButton.addEventListener("click", e => {
        e.preventDefault();
        playerOneGamePageIconContainer.appendChild(playerOneSelectedIcon);
        playerTwoGamePageIconContainer.appendChild(playerTwoSelectedIcon);
        helperFunctions.switchPageDisplay(playersPage, gamePage);
    });
})();

// Game page declarations start here. (4) //

const gamePage = (() => {

    // Variable declarations start here.

    const gamePage = document.querySelector(".game-page");

    // Event listeners start here.

    window.addEventListener("pageshow", e => gamePage.style.display = "none");
})();