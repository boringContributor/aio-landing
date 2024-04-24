import { getSeminarById } from "@/lib/api";
import { RichText } from "@graphcms/rich-text-react-renderer";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import Link from "next/link";
import Balancer from "react-wrap-balancer";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    const id = ctx.params?.id as string
    if(!id) {
        return {
            notFound: true
        }
    }
    const resp = await getSeminarById(id);
  
    return {
      props: resp
    }
  }
  
  export default function Page(ssr: InferGetServerSidePropsType<typeof getServerSideProps>) {
    return (
        <div className="px-6 py-8 lg:px-8">
            <Link href={'/#seminare'}>Zurück</Link>
            <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">{ssr.title}</h1>
                <div className="mt-6 text-xl leading-8 break-words text-justify prose lg:prose-xl">
                    <Balancer>
                        <RichText content={ssr.description?.raw} renderers={{
                            ul: ({ children }) => <ul className="list-disc">{children}</ul>,
                            ol: ({ children }) => <ol className="list-decimal">{children}</ol>,
                            li: ({ children }) => <li className="mb-2">{children}</li>,
                            blockquote: ({ children }) => <blockquote className="border-l-4 border-gray-300 pl-4 italic">{children}</blockquote>
                        }} />
                     </Balancer>
                </div>
            </div>
        </div>
    )
}
