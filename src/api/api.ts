import axios from "axios";
import { UserType } from "./types.ts";

export class Api {
  public static async getCertainAmountOfUsers(limit: number) {
    const res = await axios.get<UserType[]>(`https://fakestoreapi.com/users?limit=${limit}`);
    return res.data;
  }
}