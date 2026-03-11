"use client";

import {useTranslations} from "next-intl";

export function DeletePostButton() {

  const t = useTranslations("DeletePostButton");

  return (
    <button
      type="submit"
      onClick={(e) => {
        if (!confirm(t("confirmText"))) {
          e.preventDefault();
        }
      }}
    >
      {t("buttonText")}
    </button>
  );
}
