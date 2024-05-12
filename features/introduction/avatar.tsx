import Image from "next/image";

export default function Avatar() {
    return (
        <div className="lg:w-2/6 lg:border-l border-black/20 dark:border-white/20 h-screen py-24 text-center flex items-center w-full">
            <div className="relative flex flex-col gap-4 pb-5 after:border after:border-black/20 after:dark:border-white/20 after:absolute after:rounded-sm after:-inset-x-5 after:-inset-y-10 before:border before:border-black/20 before:dark:border-white/20 before:absolute before:rounded-sm before:-inset-x-10 before:-inset-y-6 w-3/5 mx-auto">
                <div className="aspect-square relative flex-1">
                    <Image
                        src={"/avatar_square.jpeg"}
                        fill
                        alt={"Tai Vo Tan"}
                        className="rounded-sm"
                        priority
                        sizes="(max-width: 768px) 33vw, (max-width: 1200px) 33vw, 33vw"
                    />
                </div>
                <div className="flex flex-col gap-2 text-black dark:text-white/80">
                    <h1 className="text-2xl font-semibold">@tai.votan</h1>
                </div>
            </div>
        </div>
    );
}
