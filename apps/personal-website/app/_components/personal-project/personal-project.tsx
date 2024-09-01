import classNames from "classnames";
import { PersonalProject, PersonalProjectStatus } from "../../_models/personal-project";
import { Badge } from "@editorials/ui/server";
import Link from "next/link";

const PersonalProjectComponent = ({ project }: { project: PersonalProject }) => {
    return (
      <Link key={project.id} href={project.link || "#"} scroll={true}>
        <div
          key={project.id}
          className={classNames("flex flex-col justify-start items-start flex-grow-1 flex-shrink-0 h-full relative gap-1 p-6 rounded-lg border backdrop-blur-sm min-h-[200px]", { ["border-gray-100 dark:border-gray-950"]: project.status === PersonalProjectStatus.COMING_SOON, ["cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"]: project.status !== PersonalProjectStatus.COMING_SOON })}>
          <div className="w-full flex justify-between items-center">
            <p
              className={classNames("text-lg", { ["opacity-60"]: project.status === PersonalProjectStatus.COMING_SOON })}>
              {project.icon}
            </p>
            <div>
              {project.status === PersonalProjectStatus.COMING_SOON &&
                <Badge variant="outline">coming soon</Badge>}
              {project.status === PersonalProjectStatus.ACTIVE && <Badge variant="outline" className="gap-1.5">
                <svg
                  width="9"
                  height="9"
                  viewBox="0 0 6 6"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="none"
                >
                  <circle cx="3" cy="3" r="3" fill="#4F7EFF"></circle>
                </svg>
                active
              </Badge>}

            </div>
          </div>

          <p
            className={classNames("w-full text-xl font-bold text-semibold", { ["opacity-60"]: project.status === PersonalProjectStatus.COMING_SOON })}>
            {project.title}
          </p>
          <p
            className={classNames("text-sm text-slate-600 dark:text-slate-300", { ["opacity-60"]: project.status === PersonalProjectStatus.COMING_SOON })}>
            {project.description}
          </p>
        </div>
      </Link>
    )
}

export default PersonalProjectComponent;
