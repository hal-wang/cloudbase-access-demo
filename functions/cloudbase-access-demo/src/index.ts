import { HttpResult, Router } from "@hbrwang/cloudbase-access";
import Auth from "./lib/Auth";

export const main = async (event: any) => {
  console.log("event", event);
  setHeaders();

  const router = new Router(event, new Auth());
  return (await router.do()).result;
};

function setHeaders(): void {
  const config = <Record<string, unknown>>require("./package.json");
  HttpResult.baseHeaders.version = config.version;

  HttpResult.baseHeaders.demo = "cloudbase-access-demo";
}
