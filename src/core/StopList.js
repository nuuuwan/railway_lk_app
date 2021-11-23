import { WWW } from "@nuuuwan/utils-js-dev";

export default class StopList {
  static async get(trainNo) {
    const url = `/railway_lk_app/data/railway_lk.train.${trainNo}.stop_list.tsv`;
    const stopList = await WWW.tsv(url);
    return stopList.map(function (d) {
      return {
        stationName: d["station_name"],
        timeArrive: parseInt(d["time_arrive"]),
        timeDepart: parseInt(d["time_depart"]),
      };
    });
  }
}
