export type JsonLdAuthor = {
    avatar: string;
    firstname: string;
    lastname: string;
    job: string;
    description: string;
    link?: string;
    type?: JsonLdAuthorType;
}

export enum JsonLdAuthorType {
    PERSON = 'Person',
    ORGANIZATION = 'Organization'
}

export type JsonLdBreadcrumbItem = {
    label: string;
    link: string;
};


export type JsonLdBreadcrumbList = {
    '@context': 'https://schema.org';
    '@type': 'BreadcrumbList';
    itemListElement: Array<JsonLdListItem>;
};

export type JsonLdListItem = {
    '@context': 'https://schema.org';
    '@type': 'ListItem';
    position: number;
    name: string;
    item: string;
};

export type JsonLdNewsArticle = {
    '@context': 'https://schema.org';
    '@type': 'NewsArticle';
    headline: string;
    image: Array<string>;
    datePublished: string;
    dateModified: string;
    author?: Array<JsonLdPerson | JsonLdOrganization>;
};

export type JsonLdOrganization = {
    '@context': 'https://schema.org';
    '@type': 'Organization';
    name: string;
    image?: string;
    description?: string;
    url?: string;
    member?: Array<JsonLdPerson | JsonLdOrganization>;
};

export type JsonLdPerson = {
    '@context': 'https://schema.org';
    '@type': 'Person';
    name: string;
    jobTitle?: string;
    url?: string;
    alternateName?: string;
    identifier?: string;
    description?: string;
    image?: string;
    sameAs?: Array<string>;
    interactionStatistic?: Array<JsonLdInteractionCounter>;
    agentInteractionStatistic?: JsonLdInteractionCounter;
};

export type JsonLdProfilePage = {
    '@context': 'https://schema.org';
    '@type': 'ProfilePage';
    dateCreated: string;
    dateModified: string;
    mainEntity?: JsonLdPerson | JsonLdOrganization;
};

export type JsonLdInteractionCounter = {
    '@context': 'https://schema.org';
    '@type': 'InteractionCounter';
    interactionType: 'https://schema.org/FollowAction' | 'https://schema.org/WriteAction' | 'https://schema.org/LikeAction';
    userInteractionCount: number;
};
