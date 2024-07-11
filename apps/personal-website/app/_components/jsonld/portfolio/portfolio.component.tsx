import { JsonLdHelper } from "../../../_helpers/json-ld/json-ld.helper";
import { PERSON_JSON_LD } from "../../../_constants/structured-data.constants";

const JsonLdPortfolioComponent = () => {
    const portfolioJsonLd = JsonLdHelper.generatePortfolio({
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        "name": "Portfolio",
        "creator": JsonLdHelper.generateAuthor(PERSON_JSON_LD),
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
