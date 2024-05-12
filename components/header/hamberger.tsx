"use client";

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { useStore } from "@/lib/zustand/store";
import React from "react";
import { cn } from "@/lib/utils";

export const Hamburger = React.memo(function Hamburger({
    className,
    isClose,
}: {
    className?: string;
    isClose?: boolean;
}) {
    const openNav = useStore((state) => state.openNav);

    return (
        <Button
            size="icon"
            onClick={openNav}
            className={cn(
                "border border-atlantis-600 text-atlantis-600 dark:text-atlantis-400 dark:border-atlantis-400",
                className,
            )}
        >
            {isClose ? (
                <Cross1Icon className="h-5 w-5 rotate-0 scale-100 transition-all" />
            ) : (
                <HamburgerMenuIcon className="h-5 w-5 rotate-0 scale-100 transition-all" />
            )}
        </Button>
    );
});
