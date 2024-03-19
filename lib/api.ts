import { RichTextProps } from '@graphcms/rich-text-react-renderer';
import { gql, request } from 'graphql-request';
import { createSlug } from './utils';

type ImageMeta = {
    list: Image[]
}
type Image = {
    url: string;
}

type Introduction = {
    introductionImage: Image
    introduction: TextInput
}

export type Contact = {
    addresse: string;
    telefon: string;
    email: string;
}

export type Course = {
    id: string;
    title: string;
    people: Image[];
    description: TextInput;
    order: number;
}

export type Presentation = {
    id: string;
    title: string;
    description: TextInput;
    order: number;
}

export type Team = {
    name: string;
    portrait: Image
    description: TextInput;
    order: number;
}

export type TextInput = {
    raw: RichTextProps['content'];
    html: string;
    text: string;
}

export type Partner = {
    name: string;
    description: string;
    website: string;
    logo: Image;
}

export type Article = {
    title: string;
    description: TextInput;
    titleBild: Image;
    createdAt: string;
}

export type Coaching = {
    id: string;
    title: string;
    description: TextInput;
    image: string
}

export type Workshop = {
    id: string;
    title: string;
    description: TextInput;
    image: string
}

type MainQueryResult = {
    introductions: Introduction[]
    images: ImageMeta[]
    teams: Team[]
    courses: Course[]
    contacts: Contact[]
    partners: Partner[]
    articles: Article[]
    presentations: Presentation[]
    coachings: Coaching[]
    seminars: Workshop[]
}

const GET_MAIN_CONTENT_QUERY = gql`
        query {
            seminars {
                id
                title
                description {
                    raw
                    text
                }
                image
            }
            coachings {
                id
                title
                description {
                    raw
                    text
                }
                image
            }
            presentations {
                id
                title
                description {
                    raw
                    text
                }
            }
            introductions {
                introductionImage {
                    url
                }
                introduction {
                    raw
                }
            }
            images {
                list {
                    url
                }
            } 
            teams {
                name
                portrait {
                    url
                }
                description {
                    raw
                }
                order
            }
            courses {
                id
                title
                people {
                    url
                }
                description {
                    raw
                }
                order
            }
            contacts {
                addresse
                telefon
                email
            }
            partners {
                name
                description
                website
                logo {
                    url
                }
            }
            articles {
                title
                createdAt
                description {
                    raw
                    text
                }
                titleBild {
                    url
                }
            }
    }`;

export const getCmsData = async () => {
    const data = await request<MainQueryResult>(process.env.HYGRAPH_URL as string, GET_MAIN_CONTENT_QUERY);
    return data;
}

export const getSlugsForArticles = async () => {
    const GET_SLUGS = gql`
    query {
        articles {
            title
        }
    }`;

    const data = await request<{ articles: Article[] }>(process.env.HYGRAPH_URL as string, GET_SLUGS);
    return data.articles.map(article => createSlug(article.title))
}

export const getAllArticles = async () => {
    const GET_ARTICLES = gql`
    query {
        articles {
            title
            createdAt
            description {
                raw
                text
            }
            titleBild {
                url
            }
        }
    }`;

    const data = await request<{ articles: Article[] }>(process.env.HYGRAPH_URL as string, GET_ARTICLES);
    return data.articles;
};

export const getArticleById = async (id: string) => {

    const GET_ARTICLE_BY_ID = gql`
        query GetArticleById($id: ID!) {
            portfolio(where: {id: $id}) { 
                title
                description {
                    raw
                }
                order
            }
        }`;

    const data = await request<{ portfolio: Article }>(process.env.HYGRAPH_URL as string, GET_ARTICLE_BY_ID, { id });

    return data.portfolio;
}

export const getPresentations = async () => {
    const GET_PRESENTATIONS = gql`
    query {
        presentations {
            title
            description {
                raw
            }
        }
    }`;

    const data = await request<{ presentations: Presentation[] }>(process.env.HYGRAPH_URL as string, GET_PRESENTATIONS);
    return data.presentations;
}

export const getPresentationById = async (id: string) => {

    const GET_PRESENTATION_BY_ID = gql`
            query GetCourseById($id: ID!) {
                presentation(where: {id: $id}) { 
                    id
                    title
                    description {
                        raw
                    }
                }
            }`;

    const data = await request<{ presentation: Presentation }>(process.env.HYGRAPH_URL as string, GET_PRESENTATION_BY_ID, { id });

    return data.presentation;
}

export const getCoachingById = async (id: string) => {
        const GET_COACHING_BY_ID = gql`
                query GetCourseById($id: ID!) {
                    coaching(where: {id: $id}) { 
                        title
                        description {
                            raw
                        }
                        image
                    }
                }`;
    
        const data = await request<{ coaching: Coaching }>(process.env.HYGRAPH_URL as string, GET_COACHING_BY_ID, { id });
    
        return data.coaching;
}

export const getSeminarById = async (id: string) => {
    const GET_SEMINAR_BY_ID = gql`
            query GetSeminarById($id: ID!) {
                seminar(where: {id: $id}) { 
                    title
                    description {
                        raw
                    }
                    image
                }
            }`;

    const data = await request<{ seminar: Workshop }>(process.env.HYGRAPH_URL as string, GET_SEMINAR_BY_ID, { id });

    return data.seminar;
}