import { TimeX } from "@nuuuwan/utils-js-dev";
import TrainList from "./TrainList.js";
import StopList from "./StopList.js";

export function getTimeCurrent() {
  return (TimeX.getUnixTime() + 5.5 * 3600) % 86400;
}

export default class SearchEngine {
  static async getTrainListExtended() {
    const trainList = await TrainList.get();
    const stopListList = await Promise.all(
      trainList.map(async function (d) {
        return await StopList.get(d.trainNo);
      })
    );

    return trainList
      .map(function (dTrainList, i) {
        const stopList = stopListList[i];
        const [stopLastDepart, stopNextArrive] =
          SearchEngine.getCurrentStops(stopList);

        return Object.assign({}, dTrainList, {
          stopList,
          stopLastDepart,
          stopNextArrive,
        });
      })
      .filter(function (train) {
        return train.stopLastDepart && train.stopNextArrive;
      })
      .sort(function (trainA, trainB) {
        return (
          trainA.stopNextArrive.timeDepart - trainB.stopNextArrive.timeDepart
        );
      });
  }

  static getCurrentStops(stopList) {
    const timeCurrent = getTimeCurrent();
    return stopList.reduce(
      function ([stopLastDepart, stopNextArrive], stop, iStop) {
        if (iStop > 0) {
          const stop1 = stopList[iStop - 1];
          const stop2 = stopList[iStop];
          if (
            stop1.timeArrive <= (timeCurrent + 60) &&
            stop2.timeDepart >= (timeCurrent - 60)
          ) {
            return [stop1, stop2];
          }
        }
        return [stopLastDepart, stopNextArrive];
      },
      [undefined, undefined]
    );
  }
}
