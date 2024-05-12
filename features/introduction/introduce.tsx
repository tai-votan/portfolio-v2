import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export default function Introduce() {
    const t = useTranslations("INTRODUCTION");

    return (
        <div className="lg:h-screen flex items-center justify-center flex-1 px-8 py-28">
            <div className="max-w-xl mx-auto flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                    <h1 className="pl-16 font-bold uppercase text-5xl text-atlantis-400 relative before:absolute before:top-1/2 before:left-0 before:h-1 before:w-10 before:bg-atlantis-400 before:rounded-lg">
                        {t("title")}
                    </h1>
                    <h2 className="pl-16 font-bold uppercase text-5xl block text-zinc-500 dark:text-white/80">
                        {t("position")}
                    </h2>
                </div>
                <p className="leading-relaxed text-zinc-500 dark:text-white/80 text-lg font-medium">
                    {t("description")}
                </p>
                <div className="flex">
                    <Link
                        className="relative rounded-full border border-atlantis-400 font-bold py-4 pl-8 pr-20 text-zinc-500 dark:text-white/80 overflow-hidden hover:text-white transition-all before:transition-all before:duration-300 before:ease-out hover:before:translate-x-0 before:absolute before:bg-atlantis-400 before:-inset-px before:translate-x-full"
                        href={{ pathname: "/about" }}
                    >
                        <span className="relative">{t("more_about_me")}</span>
                        <span className="flex items-center justify-center absolute -inset-y-px -right-px aspect-square rounded-full bg-atlantis-400">
                            <ArrowRightIcon className="w-6 h-6 dark:text-white/80" />
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    );
}
