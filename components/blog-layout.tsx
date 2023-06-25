import Head from 'next/head'
import { useRouter } from 'next/router'
import ArrowLeftIcon from '@heroicons/react/24/outline/ArrowLeftIcon'
import { Prose } from './prose';


export function formatDate(dateString: string) {
    const date = new Date(dateString);

    return new Intl.DateTimeFormat("de-DE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }).format(date)
    }


export function BlogLayout({
  children,
  meta
}: { 
    children: React.ReactNode; 
    meta: {
        title: string;
        description: string;
        date: string;
    }
}) {
  const router = useRouter()


  return (
    <>
      <Head>
        <title>{`${meta.title}`}</title>
        <meta name="description" content={meta.description} />
      </Head>
      <div className="mt-16 lg:mt-32">
        <div className="xl:relative">
          <div className="mx-auto max-w-2xl">
            <button
            type="button"
            onClick={() => router.push("/#aktuelles")}
            aria-label="Go back to main"
            className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition  lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
            <ArrowLeftIcon className="h-4 w-4 stroke-zinc-800 transition group-hover:stroke-zinc-900" />
            </button>
            <article>
              <header className="flex flex-col">
                <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl">
                  {meta.title}
                </h1>
                <time
                  className="order-first flex items-center text-base text-zinc-500"
                >
                  <span className="h-4 w-0.5 rounded-full bg-zinc-500" />
                  <span className="ml-3">{formatDate(meta.date)}</span>
                </time>
              </header>
              <Prose className="mt-8">{children}</Prose>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}
