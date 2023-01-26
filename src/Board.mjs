import normalize from "./Utils.mjs";

export class Board {
    width;
    height;
    board;
    isFalling;
    fallingBlockCoordinates;
    fallingBlock;

    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.board = Array.from(Array(this.height), () => {
            return Array.from(Array(this.width), () => {
                return '.';
            });
        });
        this.falling = false;
    }

    drop(block) {
        if (!this.isFalling) {
            this.fallingBlockCoordinates = {y: 0, x: Math.floor(this.width / 2)};
            this.board[this.fallingBlockCoordinates.y][this.fallingBlockCoordinates.x] = block.color;
            this.isFalling = true;
            this.fallingBlock = block;
        } else {
            throw new Error('already falling');
        }
    }

    tick() {
        if ((this.fallingBlockCoordinates.y >= this.height - 1) || (this.board[this.fallingBlockCoordinates.y + 1][this.fallingBlockCoordinates.x] != '.')) {
            this.isFalling = false;
        } else {
            this.board[this.fallingBlockCoordinates.y][this.fallingBlockCoordinates.x] = '.';
            this.fallingBlockCoordinates.y++;
            this.board[this.fallingBlockCoordinates.y][this.fallingBlockCoordinates.x] = this.fallingBlock.color;
        }
    }

    hasFalling() {
        return this.isFalling;
    }

    toString() {
        let x = '';

        for (let i = 0; i < this.height; i++) {
            for (let j = 0; j < this.width; j++) {
                x += this.board[i][j];
            }
            x += '\n';
        }

        return x;
    }
}
