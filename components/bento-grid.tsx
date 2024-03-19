import { cn } from "@/lib/utils";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import Link from "next/link";


export const BentoGrid = ({
    className,
    children,
}: {
    className?: string;
    children?: React.ReactNode;
}) => {
    return (
        <div
            className={cn(
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
                className
            )}
        >
            {children}
        </div>
    );
};

export const BentoGridItem = ({
    className,
    title,
    description,
    image,
    onClick,
    people
}: {
    className?: string;
    title: string
    description: string
    image?: string;
    onClick?: () => void;
    people?: any[]
}) => {
    return (
        <div
            onClick={onClick}
            className={cn(
                "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input p-4 bg-white border border-transparent justify-between flex flex-col space-y-4  cursor-pointer",
                className,
                image ? "" : "h-min"
            )}
        >
            {image ? <Header image={image} /> : null}
            <div className="group-hover/bento:translate-x-2 transition duration-200 space-y-2">
                <div className="font-sans font-bold text-neutral-600mb-2 mt-2">
                    {title?.replace(/\\n/g, '')}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs line-clamp-2">
                    {description?.replace(/\\n/g, '')}
                </div>
                <div>
                    <div>
                        <dl className="flex w-full flex-none justify-between gap-x-8 sm:w-auto">
                            <div className="flex -space-x-0.5">
                                <dt className="sr-only">Halter</dt>
                                {people?.map((p) => (
                                    <dd key={p.url}>
                                        <img
                                            className="h-8 w-8 object-cover rounded-full bg-gray-50 ring-2 ring-white"
                                            src={p.url}
                                        />
                                    </dd>
                                ))}
                            </div>
                        </dl>
                    </div>
                    <div className="flex divide-x divide-gray-200">
                        <div
                            className="relative -mr-px inline-flex w-0 flex-1 gap-x-3 rounded-bl-lg border border-transparent py-4 pb-0 text-sm font-semibold text-gray-900"
                        >
                            <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                            Mehr erfahren
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};


const Header = (props: { image: string }) => {
    return <div className="w-full aspect-h-12 rounded-tr-lg rounded-tl-lg overflow-hidden relative">
        <img className="object-fill" src={props.image} />
    </div>
}