import NotionLinkComponent from "../notion-link/notion-link.component";
import { NotionChildPageComponentProps } from "./notion-child-page.model";

const NotionChildPageComponent = ({ result }: NotionChildPageComponentProps): JSX.Element => {
    const label = result.child_page.title;
    return <NotionLinkComponent pageId={result.id} label={label} />
}

export default NotionChildPageComponent;

