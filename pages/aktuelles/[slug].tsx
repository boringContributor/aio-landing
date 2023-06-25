import { GetStaticProps, InferGetStaticPropsType } from "next";
import { BlogLayout } from "../../components/blog-layout";

export const getStaticProps: GetStaticProps = async ({ params }) => {
    if (!params) {
        return {
            notFound: true
        }
    }
    // const query = gql`
    // query {
    //     blogPost(where: { slug: "${params.slug}" }) {
    //         title
    //         description{
    //             text
    //             markdown
    //         }
    //         date
    //         backgroundURL{
    //             url
    //         }
    //     }
    // }`;

    // const data = await request<any>(process.env.graphql as string, query);

    // if (!data.blogPost) {
    //     return {
    //         notFound: true
    //     }
    // }
    return {
        props: params
        // revalidate: 60 * 60 // Enables ISR -> Cache response for 1 hour (60 seconds * 60 minutes)
    };
};

export async function getStaticPaths() {
    return {
        paths: [{params: {slug: 'wir-heissen-sie-wilkommen'}}],
        fallback: false,
    }
}
export default function BlogDetail(test: InferGetStaticPropsType<typeof getStaticProps>) {
    return <BlogLayout meta={{ date: new Date().toISOString(), title: 'Wir heissen Sie Willkommen!', description: 'Wir heissen Sie Willkommen!'}}>
            Ihre Gesundheit - Unsere Motivation. Erkrankungen, Unfälle oder einseitige Belastungen führen oft zu erheblichen Einschränkungen der Lebensqualität. Mit einem breiten Behandlungsspektrum von kassenzugelassenen Therapien und auch privaten Leistungen, begleitet Sie unser hoch qualifiziertes und motiviertes Team gerne auf Ihrem Weg zur Gesundheit. Viele Informationen über uns und unsere Angebote finden Sie hier auf unserer Website. Kontaktieren Sie uns und vereinbaren Ihren persönlichen Termin.
        </BlogLayout>
}

