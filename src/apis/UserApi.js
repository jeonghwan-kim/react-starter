import request from "./request";
import User from "../models/User";

export default class UserApi {
  static get() {
    return request("GET", "/api/profile").then(({ body }) => {
      return new User(body);
    });
  }
}
