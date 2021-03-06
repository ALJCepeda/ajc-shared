import {IEndpoint} from "../types";

export type ILogin = IEndpoint<ICredentials, boolean>;
export type IFetchAppState = IEndpoint<null, IAppState>;

export interface IAppState {
  isAuthenticated: boolean
}

export interface ICredentials {
  username:string;
  password:string;
}