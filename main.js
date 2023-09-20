class Tile {
    constructor(row, column, boardElement) {
        this.boardElement = boardElement;
        this.row = row;
        this.column = column;
        this.drawTile();
    }

    drawTile() {
        const tile = document.createElement("div");
        tile.className = "tile"; // Add the "tile" class for styling
        this.boardElement.appendChild(tile);
    }
}

class Board {
    constructor(size) {
        this.size = size;
        this.boardElement = document.querySelector("#board");
    }

    drawBoard() {
        for (let row = 0; row < this.size; row++) {
            for (let column = 0; column < this.size; column++) {
                const tile = new Tile(row, column, this.boardElement);
            }
        }
    }
}

const board = new Board(20);
board.drawBoard();
