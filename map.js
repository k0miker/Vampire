export default class Tileset {
    constructor(imageSrc, tileWidth, tileHeight, gap) {
        this.image = new Image();
        this.image.src = imageSrc;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.gap = gap;
        this.tiles = [];
        
        // Erstelle die Tilemap, sobald das Bild geladen wurde
        this.image.onload = () => {
            this.tiles = this.createTileMap();
        };
    }

    // Methode, um die Tilemap zu erstellen
    createTileMap() {
        const tileMap = [];
        const tilesetWidth = this.image.width; // Breite des Tilesets
        const tilesetHeight = this.image.height; // Höhe des Tilesets

        const cols = Math.floor((tilesetWidth + this.gap) / (this.tileWidth + this.gap));  // Anzahl der Spalten
        const rows = Math.floor((tilesetHeight + this.gap) / (this.tileHeight + this.gap)); // Anzahl der Reihen

        // Iteriere durch alle Reihen und Spalten, um die Startkoordinaten zu bestimmen
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                const tile = {
                    xStart: x * (this.tileWidth + this.gap),
                    yStart: y * (this.tileHeight + this.gap)
                };
                tileMap.push(tile);
            }
        }
        return tileMap;
    }

    // Methode, um ein spezifisches Tile zu holen
    getTile(index) {
        if (index >= 0 && index < this.tiles.length) {
            return this.tiles[index];
        }
        return null;
    }

    // Methode, um ein Tile für eine bestimmte Position zu holen
    getTileAtPosition(xPos, yPos) {
        const col = Math.floor(xPos / (this.tileWidth + this.gap));
        const row = Math.floor(yPos / (this.tileHeight + this.gap));
        const index = row * Math.floor(this.image.width / (this.tileWidth + this.gap)) + col;
        return this.getTile(index);
    }

    // Methode, um ein Tile an einer bestimmten Position zu zeichnen
    drawTile(ctx, xPos, yPos, tileX, tileY) {
        const tile = this.getTileAtPosition(tileX, tileY);
        if (tile) {
            ctx.drawImage(
                this.image,
                tile.xStart,
                tile.yStart,
                this.tileWidth,
                this.tileHeight,
                xPos,
                yPos,
                this.tileWidth,
                this.tileHeight
            );
        }
    }
}

// Beispielnutzung:
const tilesetImageSrc = 'tileset2.png'; // Lade das Tileset-Bild
const tileWidth = 16;
const tileHeight = 16;
const gap = 1; // 1-Pixel-Abstand zwischen den Kacheln

// Erstelle das Tileset-Objekt
const tileset = new Tileset(tilesetImageSrc, tileWidth, tileHeight, gap);

// Zeichne ein Tile, sobald das Bild geladen wurde
tileset.image.onload = function() {
    const canvas = document.querySelector("#gameCanvas");
    const ctx = canvas.getContext("2d");

    // Beispiel: Zeichne das Tile an der Position (32, 32) auf dem Canvas
    tileset.drawTile(ctx, 32, 32, 0, 0); // Zeichne das Tile an der Position (0, 0) im Tileset
};