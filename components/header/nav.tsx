import { BackpackIcon, EnvelopeOpenIcon, HomeIcon, PersonIcon } from "@radix-ui/react-icons";
import { useStore } from "@/lib/zustand/store";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/navigation";
import React from "react";
import { useTranslations } from "next-intl";

export const Nav = React.memo(function Nav() {
    const isOpen = useStore((state) => state.isOpen);
    const t = useTranslations("HEADER");

    const navs = React.useMemo(
        () => [
            { href: "/", title: t("introduction"), icon: <HomeIcon className="w-5 h-5" /> },
            { href: "/about", title: t("about_me"), icon: <PersonIcon className="w-5 h-5" /> },
            { href: "/portfolio", title: t("services"), icon: <BackpackIcon className="w-5 h-5" /> },
            { href: "/contact", title: t("contact"), icon: <EnvelopeOpenIcon className="w-5 h-5" /> },
        ],
        [],
    );

    return (
        <nav>
            <ul className="flex flex-col gap-2.5">
                {navs.map((nav, index) => (
                    <li
                        key={nav.href}
                        className={cn("transition-all duration-500", {
                            "translate-x-12 opacity-0": !isOpen,
                        })}
                        style={{ transitionDelay: `${isOpen ? index * 200 + 700 : 0}ms` }}
                    >
                        <NavLink {...nav} />
                    </li>
                ))}
            </ul>
        </nav>
    );
});

type NavLink = {
    href: string;
    icon: React.ReactNode;
    title: string;
};

const NavLink = React.memo(({ href, icon, title }: NavLink) => {
    const pathname = usePathname();
    const openNav = useStore((state) => state.openNav);

    return (
        <Link
            href={href}
            className={cn(
                "flex gap-2.5 text-lg items-center capitalize hover:text-special transition-all duration-300",
                {
                    "text-atlantis-400": pathname === href,
                    "text-zinc-500 dark:text-white/80": pathname !== href,
                },
            )}
            onClick={openNav}
        >
            {icon}
            <span>{title}</span>
        </Link>
    );
});
