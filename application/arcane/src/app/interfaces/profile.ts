import {IPost} from "./post";

export interface IProfile {
  username: string,
  email: string,
  _id: string,
  figurines: IPost[],
  __v: number;

}
