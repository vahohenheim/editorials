import { JsonLdHelper } from "../../../_helpers/json-ld/json-ld.helper";
import { PROFILE_PAGE_JSON_LD } from "../../../_constants/structured-data.constants";

const JsonLdProfilePageComponent = () => {
  const profilePageJsonLd = JsonLdHelper.generateProfilePage(
    PROFILE_PAGE_JSON_LD.author,
    PROFILE_PAGE_JSON_LD.dateCreated,
    PROFILE_PAGE_JSON_LD.dateModified
  );

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(profilePageJsonLd)
      }}
    />
  );
};

export default JsonLdProfilePageComponent;
