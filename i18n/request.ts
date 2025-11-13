import { DEFAULT_LOCALE } from "../i18n";
import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";

export default getRequestConfig(async () => {
  const locale = (await headers()).get("x-next-intl-locale") || DEFAULT_LOCALE;
  
  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});