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
    let playerOneFinalIconIndex = "0";
    let playerTwoIndex = 1;
    let playerTwoFinalIconIndex = "0";
    
    const playerOneIcons = document.querySelectorAll(".players .player-one .img-container");
    const playerOneLeftBtn = document.querySelector(".player-one .left");
    const playerOneRightBtn = document.querySelector(".player-one .right");
    
    const playerTwoIcons = document.querySelectorAll(".players .player-two .img-container");
    const playerTwoLeftBtn = document.querySelector(".player-two .left");
    const playerTwoRightBtn = document.querySelector(".player-two .right");

    const playerOneInput = document.querySelector(".player-one .name-settings input");
    const playerTwoInput = document.querySelector(".player-two .name-settings input");
    
    const submitButton = document.querySelector(".submit");

    const gamePage = document.querySelector(".game-page");
    const playerOneGamePageIconContainer = document.querySelector(".game-page .player-one .img-container");
    const playerTwoGamePageIconContainer = document.querySelector(".game-page .player-two .img-container");

    const playerOneFinalName = document.querySelector(".player-one .name");
    const playerTwoFinalName = document.querySelector(".player-two .name");

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
                    playerOneFinalIconIndex = icon.firstElementChild.getAttribute("data-index");
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
                    playerTwoFinalIconIndex = icon.firstElementChild.getAttribute("data-index");
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

    /**
     * Displays the players' selected icons on the game page.
     * @param {String} player - Player number.
     * @param {String} index - Index number of icon in list.
     */
    const displayFinalPlayerIcon = (player, index) => {
        if (player === "one") {
            const img = document.createElement("img");
            if (index === "0") {
                img.src = "img/cat.png";
                img.alt = "Cat icon";
            }
            if (index === "1") {
                img.src = "img/elephant.png";
                img.alt = "Elephant icon";
            }
            if (index === "2") {
                img.src = "img/koala.png";
                img.alt = "Koala icon";
            }
            if (index === "3") {
                img.src = "img/monkey.png";
                img.alt = "Monkey icon";
            }
            if (index === "4") {
                img.src = "img/owl.png";
                img.alt = "Owl icon";
            }
            if (index === "5") {
                img.src = "img/panda.png";
                img.alt = "Panda icon";
            }
            if (index === "6") {
                img.src = "img/rabbit.png";
                img.alt = "Rabbit icon";
            }
            if (index === "7") {
                img.src = "img/sheep.png";
                img.alt = "Sheep icon";
            }
            if (index === "8") {
                img.src = "img/snail.png";
                img.alt = "Snail icon";
            }
            if (index === "9") {
                img.src = "img/turtle.png";
                img.alt = "Turtle icon";
            }
            playerOneGamePageIconContainer.appendChild(img);
        }
        if (player === "two") {
            const img = document.createElement("img");
            if (index === "0") {
                img.src = "img/cat.png";
                img.alt = "Cat icon";
            }
            if (index === "1") {
                img.src = "img/elephant.png";
                img.alt = "Elephant icon";
            }
            if (index === "2") {
                img.src = "img/koala.png";
                img.alt = "Koala icon";
            }
            if (index === "3") {
                img.src = "img/monkey.png";
                img.alt = "Monkey icon";
            }
            if (index === "4") {
                img.src = "img/owl.png";
                img.alt = "Owl icon";
            }
            if (index === "5") {
                img.src = "img/panda.png";
                img.alt = "Panda icon";
            }
            if (index === "6") {
                img.src = "img/rabbit.png";
                img.alt = "Rabbit icon";
            }
            if (index === "7") {
                img.src = "img/sheep.png";
                img.alt = "Sheep icon";
            }
            if (index === "8") {
                img.src = "img/snail.png";
                img.alt = "Snail icon";
            }
            if (index === "9") {
                img.src = "img/turtle.png";
                img.alt = "Turtle icon";
            }
            playerTwoGamePageIconContainer.appendChild(img);
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

    playerOneInput.addEventListener("change", e => {
        playerOneFinalName.textContent += playerOneInput.value;
    });

    playerTwoInput.addEventListener("change", e => {
        playerTwoFinalName.textContent += playerTwoInput.value;
    });

    submitButton.addEventListener("click", e => {
        e.preventDefault();
        displayFinalPlayerIcon("one", playerOneFinalIconIndex);
        displayFinalPlayerIcon("two", playerTwoFinalIconIndex);
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