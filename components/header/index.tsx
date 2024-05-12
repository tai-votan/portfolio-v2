"use client";

import { Cross1Icon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/zustand/store";
import { cn } from "@/lib/utils";
import React from "react";
import { Nav } from "@/components/header/nav";
import { ToggleMode } from "@/components/header/toggle-mode";
import { ToggleLang } from "@/components/header/toggle-lang";
import { Hamburger } from "@/components/header/hamberger";

function Header() {
    const { openNav, isOpen, isScroll, setScroll } = useStore((state) => state);
    const handleScroll = React.useCallback(() => setScroll(window.scrollY !== 0), []);

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        if (window.scrollY > 100) {
            handleScroll();
        }

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Hamburger className="fixed z-50 top-6 right-6" />
            <header
                className={cn(
                    "fixed inset-y-0 right-0 z-50 w-full lg:w-2/6 bg-white dark:bg-zinc-800 transition-all duration-1000 flex flex-col p-24",
                    { "translate-x-full": !isOpen, "lg:w-1/4": isScroll },
                )}
            >
                <div className="absolute z-50 top-6 right-6 flex gap-2">
                    <ToggleMode />
                    <ToggleLang />
                    <Hamburger isClose />
                </div>
                <Nav />
            </header>
            <div
                className={cn(
                    "fixed inset-0 z-40 opacity-90 dark:bg-zinc-900 bg-neutral-200 transition-all duration-1000 ",
                    { "-translate-x-full": !isOpen },
                )}
                onClick={openNav}
            />
        </>
    );
}

export default Header;
