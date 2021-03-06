import {IEndpoint} from "../types";

export type IFetchEntries = IEndpoint<IPaginationContext, ITimelineEntry[]>;
export type ICreateEntry = IEndpoint<ITimelineEntry, ITimelineEntry>;
export type IUpdateEntry = IEndpoint<Partial<ITimelineEntry>, ITimelineEntry>;

export interface IPaginationContext {
  page:number;
  limit:number;
}

export interface IEntity {
  id?:number;
}

export interface ITimelineEntry {
  message:string;
  imageURL:string;
  label:string;
  labelURL:string;
}
