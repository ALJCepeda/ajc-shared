export type IEndpoint<IRequest, IResponse> = {
  request:IRequest;
  response:IResponse;
}

export interface IAPIAction<
  IAPI,
  IRequest = IAPI extends IEndpoint<infer U, any> ? U : unknown,
  IResponse = IAPI extends IEndpoint<any, infer U> ? U : unknown
> {
  handle(payload: IRequest): Promise<IResponse>;
}


export interface IDataQuery<IQuery, IBody> {
  query:IQuery,
  body:IBody
}