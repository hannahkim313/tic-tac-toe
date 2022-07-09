/******************************************************************************/
/*
/*   Sections:
/* 
/*   1. Helper functions
/*   2. Home page
/*   3. Players page
/*   4. Game page
/*
/******************************************************************************/

// Helper function declarations start here. (1) //

const helperFunctions = (() => {
    const changeOnMouseOver = (initialImg, newImg) => {
        setTimeout(() => {
            initialImg.style.display = "none";
            newImg.style.display = "initial";
        }, 200);
    };

    const changeOnmouseOut = (initialImg, newImg) => {
        setTimeout(() => {
            initialImg.style.display = "initial";
            newImg.style.display = "none";
        }, 200);
    };

    const switchPageDisplay = (currentPage, newPage) => {
        currentPage.style.display = "none";
        newPage.style.display = "flex";
    };

    const hideElements = (...elements) => {
        for (const element of elements) {
            element.style.display = "none";
        }
    };

    return {
        changeOnMouseOver,
        changeOnmouseOut,
        switchPageDisplay,
        hideElements
    }
})();

// Home page declarations start here. (2) //

const homePage = (() => {
    const playButton = document.querySelector(".play");
    playButton.addEventListener("mouseover", e => {
        const greenIcon = playButton.firstElementChild;
        const whiteIcon = greenIcon.nextElementSibling;
        helperFunctions.changeOnMouseOver(greenIcon, whiteIcon)
    });

    playButton.addEventListener("mouseout", e => {
        const greenIcon = playButton.firstElementChild;
        const whiteIcon = greenIcon.nextElementSibling;
        helperFunctions.changeOnmouseOut(greenIcon, whiteIcon);
    });

    playButton.addEventListener("click", e => {
        const homePage = document.querySelector(".home-page");
        const playersPage = document.querySelector(".players-page");
        helperFunctions.switchPageDisplay(homePage, playersPage);
    });
})();

// Players page declarations start here. (3) //

const playersPage = (() => {
    let playerOneIndex = 1;
    let playerOneFinalIconIndex = "0";
    let playerTwoIndex = 1;
    let playerTwoFinalIconIndex = "0";
    const playerOneFinalName = document.querySelector(".player-one .name");
    const playerTwoFinalName = document.querySelector(".player-two .name");
    
    const loadIcons = () => {
        const playerIcons = document.querySelectorAll(
            ".players-page .img-container"
        );
        for (const icon of playerIcons) {
            if (icon === playerIcons[0] || icon === playerIcons[10]) {
                icon.style.display = "block";
            }
            else icon.style.display = "none";
        }
    };

    const displayIcon = (index, player) => {
        const playerOneIcons = document.querySelectorAll(
            ".players .player-one .img-container"
        );
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
            const playerTwoIcons = document.querySelectorAll(
                ".players .player-two .img-container"
            );
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

    const resetIndex = (player) => {
        if (player === "one") {
            const playerOneIcons = document.querySelectorAll(
                ".players .player-one .img-container"
            );
            if (playerOneIndex > playerOneIcons.length) playerOneIndex = 1;
            if (playerOneIndex < 1) playerOneIndex = playerOneIcons.length;
        }
        if (player === "two") {
            const playerTwoIcons = document.querySelectorAll(
                ".players .player-two .img-container"
            );
            if (playerTwoIndex > playerTwoIcons.length) playerTwoIndex = 1;
            if (playerTwoIndex < 1) playerTwoIndex = playerTwoIcons.length;
        }
    };

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
            const playerOneGamePageIconContainer = document.querySelector(
                ".game-page .player-one .img-container"
            );
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
            const playerTwoGamePageIconContainer = document.querySelector(
                ".game-page .player-two .img-container"
            );
            playerTwoGamePageIconContainer.appendChild(img);
        }
    };

    window.addEventListener("pageshow", e => {
        const playersPage = document.querySelector(".players-page");
        helperFunctions.hideElements(playersPage);
        loadIcons();
    });

    const backButton = document.querySelector(".back");
    backButton.addEventListener("mouseover", e => {
        const greenArrow = backButton.firstElementChild;
        const whiteArrow = greenArrow.nextElementSibling;
        helperFunctions.changeOnMouseOver(greenArrow, whiteArrow);
    });

    backButton.addEventListener("mouseout", e => {
        const greenArrow = backButton.firstElementChild;
        const whiteArrow = greenArrow.nextElementSibling;
        helperFunctions.changeOnmouseOut(greenArrow, whiteArrow);
    });

    backButton.addEventListener("click", e => {
        const playersPage = document.querySelector(".players-page");
        const homePage = document.querySelector(".home-page");
        helperFunctions.switchPageDisplay(playersPage, homePage);
    });
    
    const playerOneLeftBtn = document.querySelector(".player-one .left");
    playerOneLeftBtn.addEventListener("click", e => {
        playerOneIndex--;
        displayIcon(playerOneIndex, "one");
        resetIndex("one");
    });

    const playerOneRightBtn = document.querySelector(".player-one .right");
    playerOneRightBtn.addEventListener("click", e => {
        playerOneIndex++;
        displayIcon(playerOneIndex, "one");
        resetIndex("one");
    });

    const playerTwoLeftBtn = document.querySelector(".player-two .left");
    playerTwoLeftBtn.addEventListener("click", e => {
        playerTwoIndex--;
        displayIcon(playerTwoIndex, "two");
        resetIndex("two");
    });
    
    const playerTwoRightBtn = document.querySelector(".player-two .right");
    playerTwoRightBtn.addEventListener("click", e => {
        playerTwoIndex++;
        displayIcon(playerTwoIndex, "two");
        resetIndex("two");
    });

    const playerOneInput = document.querySelector(".player-one .name-settings input");
    playerOneInput.addEventListener("change", e => {
        playerOneFinalName.textContent += playerOneInput.value;
    });

    const playerTwoInput = document.querySelector(".player-two .name-settings input");
    playerTwoInput.addEventListener("change", e => {
        playerTwoFinalName.textContent += playerTwoInput.value;
    });

    const submitButton = document.querySelector(".submit");
    submitButton.addEventListener("click", e => {
        e.preventDefault();
        displayFinalPlayerIcon("one", playerOneFinalIconIndex);
        displayFinalPlayerIcon("two", playerTwoFinalIconIndex);
        if (!playerOneFinalName.textContent) playerOneFinalName.textContent = "Player 1";
        if (!playerTwoFinalName.textContent) playerTwoFinalName.textContent = "Player 2";
        const playersPage = document.querySelector(".players-page");
        const gamePage = document.querySelector(".game-page");
        helperFunctions.switchPageDisplay(playersPage, gamePage);
        const playerOneGamePageIconContainer = document.querySelector(
            ".game-page .player-one .img-container"
        );
        playerOneGamePageIconContainer.style.borderColor = "var(--pink)";
    });
})();

// Game page declarations start here. (4) //

const gamePage = (() => {
    const Player = (mark) => {
        const getMark = () => mark;

        const makeMove = (tile) => tile.textContent = getMark();

        return {
            makeMove
        }
    };

    const gameBoard = (() => {
        const getTileValues = (board) => {
            const tileValues = [];
            for (const tile of board) {
                tileValues.push(tile.textContent);
            }
            return tileValues;
        };

        const transformMark = (tiles, winningTileValues) => {
            let i = 0;
            for (const tile of tiles) {
                if (tile.getAttribute("data-index") == winningTileValues[i]) {
                    tile.style.fontSize = "2.5rem";
                    tile.style.color = "var(--green)";
                    tile.addEventListener("transitionend", e => tile.style.fontSize = "1.3rem");
                    i++;
                }
            }
        };

        const displayWinningValues = (tiles, tileValues) => {
            if (tileValues[0] === "X" && tileValues[1] === "X" && tileValues[2] === "X" ||
                tileValues[0] === "O" && tileValues[1] === "O" && tileValues[2] === "O") {
                    transformMark(tiles, [0, 1, 2]);
            }
            if (tileValues[0] === "X" && tileValues[4] === "X" && tileValues[8] === "X" ||
                tileValues[0] === "O" && tileValues[4] === "O" && tileValues[8] === "O") {
                    transformMark(tiles, [0, 4, 8]);
            }
            if (tileValues[0] === "X" && tileValues[3] === "X" && tileValues[6] === "X" ||
                tileValues[0] === "O" && tileValues[3] === "O" && tileValues[6] === "O") {
                    transformMark(tiles, [0, 3, 6]);
            }
            if (tileValues[1] === "X" && tileValues[4] === "X" && tileValues[7] === "X" ||
                tileValues[1] === "O" && tileValues[4] === "O" && tileValues[7] === "O") {
                    transformMark(tiles, [1, 4, 7]);
            }
            if (tileValues[2] === "X" && tileValues[4] === "X" && tileValues[6] === "X" ||
                tileValues[2] === "O" && tileValues[4] === "O" && tileValues[6] === "O") {
                    transformMark(tiles, [2, 4, 6]);
            }
            if (tileValues[2] === "X" && tileValues[5] === "X" && tileValues[8] === "X" ||
                tileValues[2] === "O" && tileValues[5] === "O" && tileValues[8] === "O") {
                    transformMark(tiles, [2, 5, 8]);
            }
            if (tileValues[3] === "X" && tileValues[4] === "X" && tileValues[5] === "X" ||
                tileValues[3] === "O" && tileValues[4] === "O" && tileValues[5] === "O") {
                    transformMark(tiles, [3, 4, 5]);
            }
            if (tileValues[6] === "X" && tileValues[7] === "X" && tileValues[8] === "X" ||
                tileValues[6] === "O" && tileValues[7] === "O" && tileValues[8] === "O") {
                    transformMark(tiles, [6, 7, 8]);
            }
        };

        return {
            getTileValues,
            displayWinningValues
        }
    })();

    const game = (() => {
        const checkForPlayerOneWin = (tileValues) => {
            return (
                tileValues[0] === "X" && tileValues[1] === "X" && tileValues[2] === "X" ||
                tileValues[0] === "X" && tileValues[4] === "X" && tileValues[8] === "X" ||
                tileValues[0] === "X" && tileValues[3] === "X" && tileValues[6] === "X" ||
                tileValues[1] === "X" && tileValues[4] === "X" && tileValues[7] === "X" ||
                tileValues[2] === "X" && tileValues[4] === "X" && tileValues[6] === "X" ||
                tileValues[2] === "X" && tileValues[5] === "X" && tileValues[8] === "X" ||
                tileValues[3] === "X" && tileValues[4] === "X" && tileValues[5] === "X" ||
                tileValues[6] === "X" && tileValues[7] === "X" && tileValues[8] === "X"
            )
        };

        const checkForPlayerTwoWin = (tileValues) => {
            return (
                tileValues[0] === "O" && tileValues[1] === "O" && tileValues[2] === "O" ||
                tileValues[0] === "O" && tileValues[4] === "O" && tileValues[8] === "O" ||
                tileValues[0] === "O" && tileValues[3] === "O" && tileValues[6] === "O" ||
                tileValues[1] === "O" && tileValues[4] === "O" && tileValues[7] === "O" ||
                tileValues[2] === "O" && tileValues[4] === "O" && tileValues[6] === "O" ||
                tileValues[2] === "O" && tileValues[5] === "O" && tileValues[8] === "O" ||
                tileValues[3] === "O" && tileValues[4] === "O" && tileValues[5] === "O" ||
                tileValues[6] === "O" && tileValues[7] === "O" && tileValues[8] === "O"
            )
        };

        const increaseScore = (player) => {
            if (player === "one") {
                const score = document.querySelector(".player-one .score");
                score.textContent = parseInt(score.textContent) + 1;
            }
            if (player === "two") {
                const score = document.querySelector(".player-two .score");
                score.textContent = parseInt(score.textContent) + 1;
            }
        };

        return {
            checkForPlayerOneWin,
            checkForPlayerTwoWin,
            increaseScore
        }
    })();

    let player = "one";
    const playerOne = Player("X");
    const playerTwo = Player("O");
    
    window.addEventListener("pageshow", e => {
        const gamePage = document.querySelector(".game-page");
        const homePopup = document.querySelector(".home-popup");
        const overlay = document.querySelector(".overlay");
        helperFunctions.hideElements(gamePage, homePopup, overlay);
    });
    
    const gameBoardTiles = document.querySelectorAll(".game-board button");
    for (const tile of gameBoardTiles) {
        tile.addEventListener("click", e => {
            if (tile.textContent === "X" || tile.textContent === "O") return;
            if (player === "one") {
                playerOne.makeMove(tile);
                const tileValues = gameBoard.getTileValues(gameBoardTiles);
                if (game.checkForPlayerOneWin(tileValues)) {
                    gameBoard.displayWinningValues(gameBoardTiles, tileValues);
                    game.increaseScore(player);
                };
                // Change color of/animate winning play.
                // Display pop up winning message?
                // Increase player one score.
                // Clear board on next click.
                // Increase round number.
                // Change active player border.
                player = "two";
            }
            else if (player === "two") {
                playerTwo.makeMove(tile);
                const tileValues = gameBoard.getTileValues(gameBoardTiles);
                if (game.checkForPlayerTwoWin(tileValues)) {
                    gameBoard.displayWinningValues(gameBoardTiles, tileValues);
                    game.increaseScore(player);
                };
                // Change color of/animate winning play.
                // Display pop up winning message?
                // Increase player two score.
                // Clear board on click.
                // Increase round number.
                // Change active player border.
                player = "one";
            }
        });
    }

    const homeButton = document.querySelector(".home");
    homeButton.addEventListener("click", e => {
        const homePopup = document.querySelector(".home-popup");
        const overlay = document.querySelector(".overlay");
        homePopup.style.display = "flex";
        overlay.style.display = "initial";
    });

    const yesButtonHome = document.querySelector(".home-popup .yes");
    yesButtonHome.addEventListener("click", e => location.reload());

    const noButtonHome = document.querySelector(".home-popup .no");
    noButtonHome.addEventListener("click", e => {
        const homePopup = document.querySelector(".home-popup");
        const overlay = document.querySelector(".overlay");
        helperFunctions.hideElements(homePopup, overlay);
    });

    const githubButton = document.querySelector(".github");
    githubButton.addEventListener("click", e => {
        window.open("https://github.com/hannahkim313/tic-tac-toe", "_blank");
    });
})();