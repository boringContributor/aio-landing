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

export type Portfolio = {
    title: string;
    description: TextInput;
    order: number;
}

export type Team = {
    name: string;
    portrait: Image
    order: number;
}

export type TextInput = {
    raw: RichTextProps['content'];
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

type MainQueryResult = {
    introductions: Introduction[]
    images: ImageMeta[]
    teams: Team[]
    portfolios: Portfolio[]
    contacts: Contact[]
    partners: Partner[]
    articles: Article[]
}

const GET_MAIN_CONTENT_QUERY = gql`
        query {
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
                order
            }
            portfolios {
                title
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

    const data = await request<{ articles: Article[]}>(process.env.HYGRAPH_URL as string, GET_SLUGS);
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

    const data = await request<{ articles: Article[]}>(process.env.HYGRAPH_URL as string, GET_ARTICLES);
    return data.articles;
};