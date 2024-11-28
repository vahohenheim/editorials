import { Metadata } from "next";
import { RETROSPECTIVE_METADATA } from "./metadata";

export function generateMetadata({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }): Metadata {
  return { ...RETROSPECTIVE_METADATA, openGraph: { ...RETROSPECTIVE_METADATA.openGraph, locale: locale === "en" ? "en_US" : "fr_FR" } }
}

const RetrospectivePage = async ({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }) => {

  return (
    <main>
    </main>
  )
};

export default RetrospectivePage;
