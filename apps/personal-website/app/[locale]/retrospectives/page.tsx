import { Metadata } from "next";
import { RETROSPECTIVES_METADATA } from "./metadata";
import CardRetrospectiveComponent from "./_components/card/card";

export function generateMetadata({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }): Metadata {
  return { ...RETROSPECTIVES_METADATA, openGraph: { ...RETROSPECTIVES_METADATA.openGraph, locale: locale === "en" ? "en_US" : "fr_FR" } }
}

const RetrospectivesPage = async ({ params: { locale = 'en' } }: { params: { locale: 'en' | 'fr' } }) => {

  return (
    <main>
      <CardRetrospectiveComponent title={"test"} description={"test"} link={"#"} date={"2022"} image={"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"} />
    </main>
  )
};

export default RetrospectivesPage;
