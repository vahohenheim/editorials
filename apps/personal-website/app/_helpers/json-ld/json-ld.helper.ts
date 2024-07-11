import { JsonLdBreadcrumbList, JsonLdListItem, JsonLdNewsArticle, JsonLdOrganization, JsonLdPerson, JsonLdProfilePage, JsonLdAuthor, JsonLdAuthorType, JsonLdBreadcrumbItem } from './json-ld.model';

export class JsonLdHelper {
    public static generateNewsArticle(
        title: string,
        image: Array<string>,
        datePublished: string,
        dateModified: string,
        author: Array<JsonLdAuthor>
    ): JsonLdNewsArticle {
        const newsArticle: JsonLdNewsArticle = {
            '@context': 'https://schema.org',
            '@type': 'NewsArticle',
            headline: title || '',
            image: image,
            datePublished: datePublished,
            dateModified: dateModified
        };

        if (author && author.length > 0) {
            return { ...newsArticle, author: author.map(JsonLdHelper.generateAuthor) };
        }

        return newsArticle;
    }

    private static generateOrganization(author: JsonLdAuthor): JsonLdOrganization {
        return {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: `${author.firstname + ' ' + author.lastname || ''}`,
            image: author.avatar || '',
            description: author.description || '',
            url: author.link || ''
        };
    }

    private static generatePerson(author: JsonLdAuthor): JsonLdPerson {
        return {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: `${author.firstname + ' ' + author.lastname || ''}`,
            image: author.avatar || '',
            jobTitle: author.job || '',
            description: author.description || '',
            url: author.link || ''
        };
    }

    private static generateAuthor(author: JsonLdAuthor): JsonLdOrganization | JsonLdPerson {
        switch (author.type) {
            case JsonLdAuthorType.ORGANIZATION:
                return JsonLdHelper.generateOrganization(author);
            case JsonLdAuthorType.PERSON:
            default:
                return JsonLdHelper.generatePerson(author);
        }
    }

    public static generateProfilePage(author: Array<JsonLdAuthor>, dateCreated: string, dateModified: string): JsonLdProfilePage {
        const profilePage: JsonLdProfilePage = {
            '@context': 'https://schema.org',
            '@type': 'ProfilePage',
            dateCreated,
            dateModified
        };

        if (author[0]) {
            return { ...profilePage, mainEntity: JsonLdHelper.generateAuthor(author[0]) };
        }

        return profilePage;
    }

    public static generateBreadcrumbList(items: Array<JsonLdBreadcrumbItem>): JsonLdBreadcrumbList {
        return {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: items.map(JsonLdHelper.generateListItem)
        };
    }

    private static generateListItem(item: JsonLdBreadcrumbItem, index: number): JsonLdListItem {
        return {
            '@context': 'https://schema.org',
            '@type': 'ListItem',
            position: index + 1,
            name: item.label,
            item: item.link
        };
    }
}
