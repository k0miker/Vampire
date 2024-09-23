import Map from "../MapHandler.js";

export default class Map5 {
  constructor(ctx) {
    this.ctx = ctx; // sSpeichern Sie den ctx-Parameter in der Instanz
    this.zombieCount =Math.ceil(Math.random()*10) ;
    this.bossCount = 0; 
    
    this.loadMapData().then(data => {
      this.map = data.map;
      this.overlay = data.overlay;

      // Initialisieren der Map-Instanz
      this.mapInstance = new Map(ctx, this.map, this.mapDefinition);
    });
  }

  async loadMapData() {
    try {
      const response = await fetch('path/to/map5.json'); // Pfad zur map5.json Datei
      const jsonData = await response.json();

      // Extrahieren der beiden Arrays aus der JSON-Datei
      const map = jsonData.layers[0].data;
      const overlay = jsonData.layers[1].data;

      return { map, overlay };
    } catch (error) {
      console.error('Fehler beim Laden der Map-Daten:', error);
      return { map: [], overlay: [] };
    }
  }

  // draw() {
  //     this.mapInstance.drawMap();
  // }
}
