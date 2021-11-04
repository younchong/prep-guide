import stationHandler from './station.js';
import lineHandler from './line.js';
import sectionManageHandler from './section.js';
import printHandler from './print.js';

export default function Subway() {
  stationHandler();
  lineHandler();
  sectionManageHandler();
  printHandler();
}

Subway();