import { Button } from "@/components/ui/button";
import { locales, usePathname, useRouter } from "@/navigation";
import React from "react";
import { useLocale } from "next-intl";

export const ToggleLang = React.memo(function ToggleLang() {
    const router = useRouter();
    const pathname = usePathname();
    const locale = useLocale() as (typeof locales)[number];
    const lang = React.useMemo(() => ({ vi: "en", en: "vi" }), []);

    const handleSwitchLanguage = () => router.push(pathname, { locale: lang[locale] });

    return (
        <Button
            variant="link"
            size="icon"
            className="border border-atlantis-600 text-atlantis-600 dark:text-atlantis-400 dark:border-atlantis-400 uppercase text-lg hover:no-underline"
            onClick={handleSwitchLanguage}
        >
            {lang[locale]}
        </Button>
    );
});
