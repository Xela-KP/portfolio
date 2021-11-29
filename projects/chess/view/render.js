import { DIMENSION } from '../model/game.js'
import { assets } from './assets_path.js';
import { numToAlpha } from './num_to_alpha.js';

export function renderBoard(chessBoard) {
    console.log('rendering board');
    let table = $('table');
    let colors = ['hsl(30, 50%, 90%)', 'hsl(30, 50%, 30%)'];

    for (let y = DIMENSION; y > 0; y--) {
        let row = $('<tr/>').prop('id', y);
        for (let x = 0; x < DIMENSION; x++) {
            let tile = $('<td/>')
                .prop('id', numToAlpha[x + 1] + (y))
                .css('background-color', colors[(x + y) % 2]);
            row.append(tile);
        }
        table.append(row);
    }

    renderPieces(chessBoard);
}

export function renderPieces(chessBoard) {
    for (let y = DIMENSION; y > 0; y--) {
        for (let x = 0; x < DIMENSION; x++) {
            let domTile = $('td#' + numToAlpha[x + 1] + (y));
            let logicTile = chessBoard[DIMENSION - y][x];
            if (logicTile.heldPiece !== null) {
                domTile.css('background-image', `url(${assets[logicTile.heldPiece.name]})`)
            } else {
                domTile.css('background-image', 'none');
            }
        }
    }
}