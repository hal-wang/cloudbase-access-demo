import { Router } from "@hbrwang/cloudbase-access";
import Auth from "./lib/Auth";

export const main = async (event: any) => {
  console.log("event", event);

  const router = new Router(event, new Auth());
  return await router.do();
};
