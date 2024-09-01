import { JsonLd } from "../../../_helpers/json-ld/json-ld";
import { PERSON_JSON_LD } from "../../../_constants/structured-data";

const JsonLdPortfolioComponent = () => {
    const portfolioJsonLd = JsonLd.generatePortfolio({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Portfolio",
        "creator": JsonLd.generateAuthor(PERSON_JSON_LD),
        "workExample": []
    });

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(portfolioJsonLd)
            }}
        />
    );
};

export default JsonLdPortfolioComponent;
