import Image from "next/image";
import styles from "./page.module.css";

import { getCurrentUser } from "@/shared/auth/getCurrentUser";
import { getLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export default async function HomePage() {

  const user = await getCurrentUser();

  const locale = await getLocale();
  const t = await getTranslations("HomePage");

  return (
    <main className={styles.main}>
      <section className={styles.main_content}>
        <h1>{t("title")}</h1>
        {user && <p>{t("greeting")}, {user.role}!</p>}
        <p>{t("currentLocale")}: {locale}</p>
      </section>
      <Image
        src="/images/content/content.jpg"
        alt="Content image"
        width={503}
        height={667}
        priority
      />
    </main>
  );
}
