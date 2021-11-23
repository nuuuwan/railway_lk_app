import { WWW } from "@nuuuwan/utils-js-dev";

export default class TrainList {
  static async get() {
    const url = "/railway_lk_app/data/railway_lk.train_list.tsv";
    return await WWW.tsv(url);
  }
}
