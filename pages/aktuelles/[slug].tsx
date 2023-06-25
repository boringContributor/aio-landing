import { RichText } from "@graphcms/rich-text-react-renderer";
import { GetServerSideProps, GetStaticProps, InferGetStaticPropsType } from "next";
import { BlogLayout } from "../../components/blog-layout";
import { getAllArticles, getSlugsForArticles } from "../../lib/api";
import { createSlug } from "../../lib/utils";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        }
    }
    
    const articels = await getAllArticles();

    const article = articels.find(article => createSlug(article.title) === params.slug)

    if (!article) {
        return {
            notFound: true
        }
    }
    return {
        props: article
    };
};



export async function getStaticPaths() {
    const slugs = await getSlugsForArticles()
    return {
        paths: slugs.map(slug => ({
            params: { slug },
        })),
        fallback: false,
    }
}

export default function BlogDetail(article: InferGetStaticPropsType<typeof getStaticProps>) {
    return <BlogLayout meta={{ date: new Date().toISOString(), title: article.title, description: article.description.text}}>
        <RichText content={article.description.raw} />
     </BlogLayout>
}

