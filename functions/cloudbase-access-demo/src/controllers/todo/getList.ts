import { Action, HttpResult, RequestParams } from "@hbrwang/cloudbase-access";

export default class GetList extends Action {
  constructor() {
    super(["login"]);
  }

  async do(): Promise<HttpResult> {
    if (!this.requestParams) return this.badRequest();
    const { account } = this.requestParams.headers;

    return this.ok([
      {
        id: "1",
        content: "todo 1",
      },
      {
        id: "2",
        content: "todo 2",
      },
      {
        id: "3",
        content: "todo 3",
      },
      {
        id: "4",
        content: "todo account: " + account,
      },
    ]);
  }
}
