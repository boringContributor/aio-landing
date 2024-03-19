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
                "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
    onClick
}: {
    className?: string;
    title?: string | React.ReactNode;
    description?: string | React.ReactNode;
    image?: string;
    onClick?: () => void;
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
            {image ? <Header image={image}/> : null}
            <div className="group-hover/bento:translate-x-2 transition duration-200">
                <div className="font-sans font-bold text-neutral-600mb-2 mt-2">
                    {title}
                </div>
                <div className="font-sans font-normal text-neutral-600 text-xs line-clamp-2">
                    {description}
                </div>
                <div className="flex divide-x divide-gray-200 cursor-pointer">
                <Link
                  href={`/vortrag/${title}`}
                  className="relative -mr-px inline-flex w-0 flex-1 gap-x-3 rounded-bl-lg border border-transparent py-4 pb-0 text-sm font-semibold text-gray-900"
                >
                  <ChevronRightIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Mehr erfahren
                </Link>
              </div>
            </div>
        </div>
    );
};


const Header = (props: { image: string }) => {
    return <div className="w-full aspect-w-16 aspect-h-10 rounded-tr-lg rounded-tl-lg overflow-hidden xl:aspect-w-16 xl:aspect-h-10 relative">
        <img className="object-fill" src={props.image} />
    </div>
}