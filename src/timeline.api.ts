import TimelineEntry from "./models/TimelineEntry";

export type TimelinePage = IEndpoint<PaginationContext, TimelineEntry[]>;
export type TimelineSave = IEndpoint<TimelineEntry, TimelineEntry>;
export type TimelineRemove = IEndpoint<number, boolean>;
