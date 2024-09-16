export default class Tileset {
    constructor() {
        this.image = "./tileset.png";
        this.tileWidth = 16;
        this.tileHeight = 16;
        this.gap = 1;
        this.tiles = this.createTileMap();
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
}

// Beispielnutzung:
const tilesetImage = new Image();
tilesetImage.src = 'tileset2.png'; // Lade das Tileset-Bild

// Definiere die Kachelgröße (16x16) und den Abstand (1 Pixel)
const tileWidth = 16;
const tileHeight = 16;
const gap = 1; // 1-Pixel-Abstand zwischen den Kacheln

// Erstelle das Tileset-Objekt, sobald das Bild geladen wurde
tilesetImage.onload = function() {
    const tileset = new Tileset(tilesetImage, tileWidth, tileHeight, gap);
    
    // Zeige die erstellte Tilemap in der Konsole an
    console.log(tileset.tiles);

    // Hole ein spezifisches Tile, z.B. das 10. Tile in der Map
    const tileInfo = tileset.getTile(10);
    console.log(tileInfo);
};
