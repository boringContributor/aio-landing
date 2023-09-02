import Link from "next/link";
import { Article } from "../../lib/api";
import { createSlug, toGermanDate } from "../../lib/utils";
import { SimpleLayout } from "../simple-layout";

type BlogProps = {
  articles: Article[]
}
export const Blog = (props: BlogProps) => {
  return (
    <SimpleLayout title="Aktuelles" id="aktuelles" show={props.articles.length > 0}>
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {props.articles.map((article) => (
          <article key={article.title} className="flex flex-col items-start justify-between">
            <div className="relative w-full">
              <img
                src={article.titleBild.url}
                alt={article.title}
                className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
            </div>
            <div className="max-w-xl">
              <div className="mt-8 flex items-center gap-x-4 text-xs text-gray-500">
                  {toGermanDate(article.createdAt, { year: "numeric", month: "long", day: "numeric" })}
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <Link href={`aktuelles/${createSlug(article.title)}`}>
                    <span className="absolute inset-0" />
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{article.description.text}</p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </SimpleLayout>
  )
}
