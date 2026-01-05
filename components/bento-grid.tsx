import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "@heroicons/react/20/solid";


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
                "grid md:auto-rows-[20rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6 max-w-7xl mx-auto",
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
                "group relative row-span-1 rounded-2xl hover:shadow-2xl transition-all duration-300 bg-white border border-gray-100 cursor-pointer overflow-hidden",
                "hover:scale-[1.02] hover:-translate-y-1",
                className,
                !image && "flex flex-col justify-between min-h-[240px] p-6 sm:p-8"
            )}
        >
            {/* Header Image */}
            {image && <Header image={image} />}

            {/* Content Container */}
            <div className={cn(
                "flex flex-col h-full p-6 sm:p-8",
                image ? "pt-4" : ""
            )}>
                {/* Instructors - Top */}
                {people && people.length > 0 && (
                    <div className="flex -space-x-2 mb-4">
                        {people.map((p) => (
                            <img
                                key={p.url}
                                className="h-9 w-9 sm:h-10 sm:w-10 object-cover rounded-full bg-gray-100 ring-3 ring-white shadow-md"
                                src={p.url}
                                alt=""
                            />
                        ))}
                    </div>
                )}

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-red-700 transition-colors">
                    {title?.replace(/\\n/g, '')}
                </h3>

                {/* Description with gradient fade */}
                <div className="relative flex-grow mb-4">
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                        {description}
                    </p>
                    <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-white to-transparent pointer-events-none" />
                </div>

                {/* CTA Button */}
                <div className="flex items-center gap-2 text-sm font-semibold text-red-700 group-hover:text-red-900 group-hover:gap-3 transition-all mt-auto">
                    <span>Mehr erfahren</span>
                    <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </div>
            </div>

            {/* Hover accent overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/20 group-hover:to-red-100/10 transition-all duration-300 pointer-events-none rounded-2xl" />
        </div>
    );
};


const Header = (props: { image: string }) => {
    return (
        <div className="w-full h-40 sm:h-48 overflow-hidden relative rounded-t-2xl">
            <img
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                src={props.image}
                alt=""
            />
        </div>
    )
}