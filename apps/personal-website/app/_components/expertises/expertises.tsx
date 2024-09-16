import { Expertise } from "../expertise/expertise"
import SectionComponent from "../section/section"
import styles from './expertises.module.css';
import { EXPERTISES } from "../../_constants/resume";
import { Button } from "@editorials/ui/server";
import Link from "next/link";
import { getScopedI18n } from "../../../locales/server";

const ExpertisesComponent = async ({ hasLinkToResume = true }: { hasLinkToResume?: boolean }) => {
  const scopedT = await getScopedI18n('expertises');

  return (
        <SectionComponent>
          <div className={styles.grid}>
            {EXPERTISES.map((expertise, index) => <Expertise key={index} expertise={expertise} />)}
          </div>
          {hasLinkToResume && <div className="flex flex-col items-center justify-center pt-10">
            <Link href="/resume" scroll={true}>
              <Button
                className={styles.button}
                variant="default"
              >
                {scopedT('cta')}
              </Button>
            </Link>
          </div>}
        </SectionComponent>
  )
}

export default ExpertisesComponent;
