import { RichTextProps } from '@graphcms/rich-text-react-renderer';
import { gql, request } from 'graphql-request';

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
}

export type Team = {
    name: string;
    portrait: Image
}

export type TextInput = {
    raw: RichTextProps['content'];
}

export type Partner = {
    name: string;
    description: string;
    website: string;
    logo: Image;
}


type MainQueryResult = {
    introductions: Introduction[]
    images: ImageMeta[]
    teams: Team[]
    portfolios: Portfolio[]
    contacts: Contact[]
    partners: Partner[]
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
            }
            portfolios {
                title
                description {
                    raw
                }
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
    }`;

export const getCmsData = async () => {
    const data = await request<MainQueryResult>(process.env.HYGRAPH_URL as string, GET_MAIN_CONTENT_QUERY);

    return data;
}
