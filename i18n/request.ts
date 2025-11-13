import { getRequestConfig } from "next-intl/server";
import { headers } from "next/headers";
import { LOCALES, DEFAULT_LOCALE } from "../i18n";

export default getRequestConfig(async () => {
  const headersList = await headers();
  const locale = headersList.get("x-next-intl-locale") || DEFAULT_LOCALE;

  // Walidacja locale
  if (!LOCALES.includes(locale as any)) {
    throw new Error(`Invalid locale: ${locale}`);
  }

  return {
    locale,
    messages: (await import(`../locales/${locale}.json`)).default,
  };
});