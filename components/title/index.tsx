type Props = {
    title: string[];
    hint: string;
};

export default function Title({ title = [], hint }: Props) {
    const [text, accent] = title;
    return (
        <div className="mx-auto w-full relative py-20 text-center">
            <h1 className="text-5xl text-zinc-500 dark:text-white/80 font-black uppercase">
                {text} <span className="text-atlantis-400">{accent}</span>
            </h1>
            <span className="text-8xl text-gray-300/60 dark:text-gray-50/10 absolute -z-10 left-0 right-0 top-1/2 tracking-widest leading-10 font-bold -translate-y-1/2 uppercase">
                {hint}
            </span>
        </div>
    );
}
