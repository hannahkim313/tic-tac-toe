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

    const matchesComputedPropValue = (element, prop, propValue) => {
        const elementProps = window.getComputedStyle(element);
        return elementProps.getPropertyValue(prop) === propValue;
    };

    return {
        changeOnMouseOver,
        changeOnmouseOut,
        switchPageDisplay,
        hideElements,
        matchesComputedPropValue
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
        const getTileValues = () => {
            const tiles = document.querySelectorAll(".row button");
            const tileValues = [];
            for (const tile of tiles) {
                tileValues.push(tile.textContent);
            }
            return tileValues;
        };

        const isTileFilled = (tileValue) => tileValue === "X" || tileValue === "O";

        const transformMark = (tiles, winningTileValues) => {
            let i = 0;
            for (const tile of tiles) {
                if (tile.getAttribute("data-index") == winningTileValues[i]) {
                    tile.style.fontSize = "2.5rem";
                    tile.style.color = "var(--green)";
                    for (const tile of tiles) {
                        tile.disabled = true;
                    }
                    tile.addEventListener("transitionend", e => tile.style.fontSize = "1.3rem");
                    i++;
                }
            }
        };

        const clearBoard = () => {
            const tiles = document.querySelectorAll(".row button");
            for (const tile of tiles) {
                tile.textContent = "";
            }
        };

        return {
            getTileValues,
            isTileFilled,
            transformMark,
            clearBoard
        }
    })();

    const game = (() => {
        const checkForWin = (player) => {
        const tileValues = gameBoard.getTileValues();
        if (player === "one") {
            return (
                tileValues[0] === "X" && tileValues[1] === "X" && tileValues[2] === "X"
                || tileValues[0] === "X" && tileValues[4] === "X" && tileValues[8] === "X"
                || tileValues[0] === "X" && tileValues[3] === "X" && tileValues[6] === "X"
                || tileValues[1] === "X" && tileValues[4] === "X" && tileValues[7] === "X"
                || tileValues[2] === "X" && tileValues[4] === "X" && tileValues[6] === "X"
                || tileValues[2] === "X" && tileValues[5] === "X" && tileValues[8] === "X"
                || tileValues[3] === "X" && tileValues[4] === "X" && tileValues[5] === "X"
                || tileValues[6] === "X" && tileValues[7] === "X" && tileValues[8] === "X"
            )
        }
        if (player === "two") {
            return (
                tileValues[0] === "O" && tileValues[1] === "O" && tileValues[2] === "O"
                || tileValues[0] === "O" && tileValues[4] === "O" && tileValues[8] === "O"
                || tileValues[0] === "O" && tileValues[3] === "O" && tileValues[6] === "O"
                || tileValues[1] === "O" && tileValues[4] === "O" && tileValues[7] === "O"
                || tileValues[2] === "O" && tileValues[4] === "O" && tileValues[6] === "O"
                || tileValues[2] === "O" && tileValues[5] === "O" && tileValues[8] === "O"
                || tileValues[3] === "O" && tileValues[4] === "O" && tileValues[5] === "O"
                || tileValues[6] === "O" && tileValues[7] === "O" && tileValues[8] === "O"
            )
        }
        };

        const checkForTie = () => {
            const tileValues = gameBoard.getTileValues();
            return tileValues.every(gameBoard.isTileFilled);
        };

        const displayWinnerPopup = (player) => {
            if (player === "one") {
                const name = document.querySelector(".player-one .name");
                const winner = document.querySelector(".winner");
                winner.textContent = `${name.textContent} wins!`;
            }
            if (player === "two") {
                const name = document.querySelector(".player-two .name");
                const winner = document.querySelector(".winner");
                winner.textContent = `${name.textContent} wins!`;
            }

            const popup = document.querySelector(".winner-popup");
            setTimeout(() => {
                popup.style.display = "flex";
            }, 2600);
        };

        const displayWin = (player) => {
            const tiles = document.querySelectorAll(".row button");
            const tileValues = gameBoard.getTileValues();
            if (
                tileValues[0] === "X" && tileValues[1] === "X" && tileValues[2] === "X"
                || tileValues[0] === "O" && tileValues[1] === "O" && tileValues[2] === "O"
            ) {
                gameBoard.transformMark(tiles, [0, 1, 2]);
            }
            if (
                tileValues[0] === "X" && tileValues[4] === "X" && tileValues[8] === "X"
                || tileValues[0] === "O" && tileValues[4] === "O" && tileValues[8] === "O"
            ) {
                gameBoard.transformMark(tiles, [0, 4, 8]);
            }
            if (
                tileValues[0] === "X" && tileValues[3] === "X" && tileValues[6] === "X"
                || tileValues[0] === "O" && tileValues[3] === "O" && tileValues[6] === "O"
            ) {
                gameBoard.transformMark(tiles, [0, 3, 6]);
            }
            if (
                tileValues[1] === "X" && tileValues[4] === "X" && tileValues[7] === "X"
                || tileValues[1] === "O" && tileValues[4] === "O" && tileValues[7] === "O"
            ) {
                gameBoard.transformMark(tiles, [1, 4, 7]);
            }
            if (
                tileValues[2] === "X" && tileValues[4] === "X" && tileValues[6] === "X"
                || tileValues[2] === "O" && tileValues[4] === "O" && tileValues[6] === "O"
            ) {
                gameBoard.transformMark(tiles, [2, 4, 6]);
            }
            if (
                tileValues[2] === "X" && tileValues[5] === "X" && tileValues[8] === "X"
                || tileValues[2] === "O" && tileValues[5] === "O" && tileValues[8] === "O"
            ) {
                gameBoard.transformMark(tiles, [2, 5, 8]);
            }
            if (
                tileValues[3] === "X" && tileValues[4] === "X" && tileValues[5] === "X"
                || tileValues[3] === "O" && tileValues[4] === "O" && tileValues[5] === "O"
            ) {
                gameBoard.transformMark(tiles, [3, 4, 5]);
            }
            if (
                tileValues[6] === "X" && tileValues[7] === "X" && tileValues[8] === "X"
                || tileValues[6] === "O" && tileValues[7] === "O" && tileValues[8] === "O"
            ) {
                gameBoard.transformMark(tiles, [6, 7, 8]);
            }

            displayWinnerPopup(player);
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

        const changeRoundNum = () => {
            const round = document.querySelector(".heading p");
            const num = round.textContent.substring(5);
            round.textContent = `Round ${parseInt(num) + 1}`;
        };

        const makePlayerActive = (player) => {
            const playerOne = document.querySelector(
                ".game-play .player-one .img-container"
            );
            const playerTwo = document.querySelector(
                ".game-play .player-two .img-container"
            );
            if (player === "one") {
                playerOne.style.borderColor = "var(--pink)";
                playerTwo.style.borderColor = "white";
            }
            if (player === "two") {
                playerOne.style.borderColor = "white";
                playerTwo.style.borderColor = "var(--pink)";
            }
        };

        const reset = () => {
            const round = document.querySelector(".heading p");
            round.textContent = "Round 1";
            const scores = document.querySelectorAll(".score");
            for (const score of scores) {
                score.textContent = "0";
            }
            gameBoard.clearBoard();
        };

        return {
            checkForWin,
            checkForTie,
            displayWin,
            increaseScore,
            changeRoundNum,
            makePlayerActive,
            reset
        }
    })();

    let player = "one";
    const playerOne = Player("X");
    const playerTwo = Player("O");
    
    window.addEventListener("pageshow", e => {
        const gamePage = document.querySelector(".game-page");
        const homePopup = document.querySelector(".home-popup");
        const winnerPopup = document.querySelector(".winner-popup");
        const tiePopup = document.querySelector(".tie-popup");
        const resetPopup = document.querySelector(".reset-popup");
        const overlay = document.querySelector(".overlay");
        helperFunctions.hideElements(
            gamePage, homePopup, winnerPopup, tiePopup, resetPopup, overlay
        );
    });
    
    const tiles = document.querySelectorAll(".row button");
    for (const tile of tiles) {
        tile.addEventListener("click", e => {
            const winnerPopup = document.querySelector(".winner-popup");
            if (
                helperFunctions.matchesComputedPropValue(winnerPopup, "display", "flex")
                || tile.textContent === "X"
                || tile.textContent === "O"
            ) {
                return;
            }
            
            if (player === "one") {
                playerOne.makeMove(tile);
                if (game.checkForWin(player)) {
                    game.displayWin(player);
                    game.increaseScore(player);
                    game.makePlayerActive(player);
                    player = "two";
                }
                else if (game.checkForTie()) {
                    const tiePopup = document.querySelector(".tie-popup");
                    tiePopup.style.display = "flex";
                    player = "two";
                }
                else {
                    player = "two";
                    game.makePlayerActive(player);
                }
            }
            else if (player === "two") {
                playerTwo.makeMove(tile);
                if (game.checkForWin(player)) {
                    game.displayWin(player);
                    game.increaseScore(player);
                    game.makePlayerActive(player);
                    player = "one";
                }
                else if (game.checkForTie()) {
                    const tiePopup = document.querySelector(".tie-popup");
                    tiePopup.style.display = "flex";
                    player = "one";
                }
                else {
                    player = "one";
                    game.makePlayerActive(player);
                }
            }
        });
    }

    const continueButtonWinner = document.querySelector(".winner-popup .continue");
    continueButtonWinner.addEventListener("click", e => {
        const winnerPopup = document.querySelector(".winner-popup");
        helperFunctions.hideElements(winnerPopup);
        gameBoard.clearBoard();
        game.changeRoundNum();
        game.makePlayerActive(player);
        const tiles = document.querySelectorAll(".row button");
        for (const tile of tiles) {
            tile.disabled = false;
            tile.style.color = "var(--main-font-color)";
        }
    });

    const continueButtonTie = document.querySelector(".tie-popup .continue");
    continueButtonTie.addEventListener("click", e => {
        const tiePopup = document.querySelector(".tie-popup");
        helperFunctions.hideElements(tiePopup);
        gameBoard.clearBoard();
        game.changeRoundNum();
        game.makePlayerActive(player);
        const tiles = document.querySelectorAll(".row button");
        for (const tile of tiles) {
            tile.disabled = false;
            tile.style.color = "var(--main-font-color)";
        }
    });

    const homeButton = document.querySelector(".home");
    homeButton.addEventListener("click", e => {
        const winnerPopup = document.querySelector(".winner-popup");
        if (helperFunctions.matchesComputedPropValue(winnerPopup, "display", "flex")) {
            helperFunctions.hideElements(winnerPopup);
        }
        const tiePopup = document.querySelector(".tie-popup");
        if (helperFunctions.matchesComputedPropValue(tiePopup, "display", "flex")) {
            helperFunctions.hideElements(tiePopup);
        }
        const homePopup = document.querySelector(".home-popup");
        homePopup.style.display = "flex";
        const overlay = document.querySelector(".overlay");
        overlay.style.display = "initial";
    });

    const yesButtonHome = document.querySelector(".home-popup .yes");
    yesButtonHome.addEventListener("click", e => location.reload());

    const noButtonHome = document.querySelector(".home-popup .no");
    noButtonHome.addEventListener("click", e => {
        const winnerPopup = document.querySelector(".winner-popup");
        if (
            helperFunctions.matchesComputedPropValue(winnerPopup, "display", "none")
            && game.checkForWin("one") || game.checkForWin("two")
        ) {
            winnerPopup.style.display = "flex";
        }
        const tiePopup = document.querySelector(".tie-popup");
        if (
            helperFunctions.matchesComputedPropValue(tiePopup, "display", "none")
            && game.checkForTie()
        ) {
            tiePopup.style.display = "flex";
        }
        const homePopup = document.querySelector(".home-popup");
        const overlay = document.querySelector(".overlay");
        helperFunctions.hideElements(homePopup, overlay);
    });

    const resetButton = document.querySelector(".reset");
    resetButton.addEventListener("click", e => {
        const winnerPopup = document.querySelector(".winner-popup");
        if (helperFunctions.matchesComputedPropValue(winnerPopup, "display", "flex")) {
            helperFunctions.hideElements(winnerPopup);
        }
        const tiePopup = document.querySelector(".tie-popup");
        if (helperFunctions.matchesComputedPropValue(tiePopup, "display", "flex")) {
            helperFunctions.hideElements(tiePopup);
        }
        const resetPopup = document.querySelector(".reset-popup");
        resetPopup.style.display = "flex";
        const overlay = document.querySelector(".overlay");
        overlay.style.display = "initial";
    });
    
    const yesButtonReset = document.querySelector(".reset-popup .yes");
    yesButtonReset.addEventListener("click", e => {
        const resetPopup = document.querySelector(".reset-popup");
        helperFunctions.hideElements(resetPopup);
        const overlay = document.querySelector(".overlay");
        helperFunctions.hideElements(overlay);
        game.reset();
        game.makePlayerActive(player);
        const tiles = document.querySelectorAll(".row button");
        for (const tile of tiles) {
            tile.disabled = false;
            tile.style.color = "var(--main-font-color)";
        }
    });

    const noButtonReset = document.querySelector(".reset-popup .no");
    noButtonReset.addEventListener("click", e => {
        const winnerPopup = document.querySelector(".winner-popup");
        if (
            helperFunctions.matchesComputedPropValue(winnerPopup, "display", "none")
            && game.checkForWin("one") || game.checkForWin("two")
        ) {
            winnerPopup.style.display = "flex";
        }
        const tiePopup = document.querySelector(".tie-popup");
        if (
            helperFunctions.matchesComputedPropValue(tiePopup, "display", "none")
            && game.checkForTie()
        ) {
            tiePopup.style.display = "flex";
        }
        const resetPopup = document.querySelector(".reset-popup");
        const overlay = document.querySelector(".overlay");
        helperFunctions.hideElements(resetPopup, overlay);
    });

    const githubButton = document.querySelector(".github");
    githubButton.addEventListener("click", e => {
        window.open("https://github.com/hannahkim313/tic-tac-toe", "_blank");
    });
})();