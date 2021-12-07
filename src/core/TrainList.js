import { WWW } from "@nuuuwan/utils-js-dev";

export default class TrainList {
  static async get() {
    const url = "/railway_lk_app/data/railway_lk.train_list.tsv";
    const trainList = await WWW.tsv(url);
    return trainList.splice(30, 50).map(function (d) {
      return {
        trainNo: d["train_no"],
        name: d["name"],
      };
    });
  }
}
