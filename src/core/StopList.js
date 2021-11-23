import { WWW } from "@nuuuwan/utils-js-dev";

export default class StopList {
  static async get(trainNo) {
    const url = `/railway_lk_app/data/railway_lk.train.${trainNo}.stop_list.tsv`;
    return await WWW.tsv(url);
  }
}
