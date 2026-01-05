import Link from "next/link";
import { Article } from "../../lib/api";
import { createSlug, toGermanDate } from "../../lib/utils";
import { SimpleLayout } from "../simple-layout";
import { ArrowRightIcon, CalendarIcon } from "@heroicons/react/20/solid";

type BlogProps = {
  articles: Article[]
}
export const Blog = (props: BlogProps) => {
  return (
    <SimpleLayout title="Aktuelles" id="aktuelles" show={props.articles.length > 0}>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {props.articles.map((article, index) => (
          <article
            key={article.title}
            className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
          >
            {/* Image Container */}
            <div className="relative w-full overflow-hidden">
              <div className="relative aspect-[16/9] sm:aspect-[3/2]">
                <img
                  src={article.titleBild.url}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Date badge */}
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-lg px-3 py-2 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-semibold text-gray-900">
                  <CalendarIcon className="w-4 h-4 text-red-700" />
                  {toGermanDate(article.createdAt, { day: "numeric", month: "short" })}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 flex flex-col p-6 sm:p-8">
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-bold leading-tight text-gray-900 group-hover:text-red-700 transition-colors mb-3">
                  <Link href={`aktuelles/${createSlug(article.title)}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed line-clamp-3">
                  {article.description.text}
                </p>
              </div>

              {/* Read more link */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-red-700 group-hover:gap-3 transition-all">
                <span>Weiterlesen</span>
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Hover accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/20 group-hover:to-red-100/10 transition-all duration-300 pointer-events-none rounded-2xl" />
          </article>
        ))}
      </div>
    </SimpleLayout>
  )
}
