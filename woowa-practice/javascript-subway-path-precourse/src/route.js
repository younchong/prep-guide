import { stations, lines, section } from './lineInfo.js';
import Dijkstra from './utils/Dijkstra.js';
import makeResultBoard from './page.js';

export default function findRoute(departure, arrive, option) {
  const stationManager = new Dijkstra();
  let result;
  stations.forEach(station => stationManager.addVertex(station));

  if (option === "time") {
    for (let i = 0; i < section.length; i++) {
      stationManager.addEdge(section[i]["start"], section[i]["end"], section[i]["time"]);
    }
    result = stationManager.findShortestPath(departure, arrive);
  } else {
    for (let i = 0; i < section.length; i++) {
      stationManager.addEdge(section[i]["start"], section[i]["end"], section[i]["distance"]);
    }
    result = stationManager.findShortestPath(departure, arrive);
  }

  makeResultBoard(option, result);
}