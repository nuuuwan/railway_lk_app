import TrainList from "./TrainList.js";
import StopList from "./StopList.js";

export default class SearchEngine {
  static async getTrainsForStation(stationName) {
    const trainList = await TrainList.get();
    const stopListList = await Promise.all(
      trainList.map(async function (d) {
        return await StopList.get(d.trainNo);
      })
    );

    return trainList
      .map(function (dTrainList, i) {
        const stopList = stopListList[i];
        const dStopListList = stopList.filter(
          (d) => d.stationName === stationName
        );

        if (dStopListList.length === 1) {
          return Object.assign({}, dTrainList, dStopListList[0]);
        } else {
          return null;
        }
      })
      .filter((d) => d !== null)
      .sort(function (a, b) {
        if (a.timeArrive && b.timeArrive) {
          return a.timeArrive - b.timeArrive;
        }
        if (a.timeDepart && b.timeDepart) {
          return a.timeDepart - b.timeDepart;
        }
        return a.stationName.localeCompare(b.stationName);
      });
  }
}
