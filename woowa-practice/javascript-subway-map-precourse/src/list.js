const stationList = [];

export function addStationList(element) {
  stationList.push(element);

  console.log(stationList);
}

export function callStationList() {

  return stataionList;
}

export function deleteStationList(index) {
  stationList.splice(index, 1);
  conosle.log(stationList);
}

//굳이 또 나눌 필요는 없다고 생각.