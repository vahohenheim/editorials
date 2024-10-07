import React from "react";
import { NotionBlockType } from "../../notion.model";
import styles from './notion-block.module.css';
import { NotionBlockComponentProps } from "./notion-block.model";
import { COMPONENTS } from "./notion-block.constants";

export const NotionBlockComponent = ({ result }: NotionBlockComponentProps): React.ReactElement => {
    const Component = COMPONENTS[result.type as NotionBlockType];

    if(!Component) {
        return <div className={styles.block}><p>Unknown block type: {result.type}</p></div>;
    }

    return <div id={result.id} data-type={result.type} className={styles.block}><Component result={result} /></div>;
}
