import { isMobile } from "@/app/utils/isMobile/isMobile";
import { headers } from "next/headers";

export default async function MobileCheck() {
  const userAgent = (await headers()).get("user-agent") || "";
  const mobileCheck = isMobile(userAgent);

  return mobileCheck;
}
