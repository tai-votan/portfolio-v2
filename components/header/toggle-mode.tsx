import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import React, { useMemo } from "react";
import { useTheme } from "next-themes";

export const ToggleMode = React.memo(function ToggleMode() {
    const { setTheme, theme } = useTheme();
    const themes: Record<string, string> = useMemo(() => ({ light: "dark", dark: "light" }), []);

    const handleSwitchMode = React.useCallback(() => setTheme(themes[theme || "light"]), [theme]);

    return (
        <Button
            variant="link"
            size="icon"
            className="border border-atlantis-600 text-atlantis-600 dark:text-atlantis-400 dark:border-atlantis-400"
            onClick={handleSwitchMode}
        >
            {theme === "dark" ? (
                <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all" />
            ) : (
                <MoonIcon className="h-5 w-5 rotate-0 scale-100 transition-all" />
            )}
        </Button>
    );
});
