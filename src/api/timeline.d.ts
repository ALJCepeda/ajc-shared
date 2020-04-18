type TimelinePage = IEndpoint<PaginationContext, ITimelineEntry[]>;
type TimelineSave = IEndpoint<ITimelineEntry, ITimelineEntry>;
type TimelineRemove = IEndpoint<number, boolean>;
