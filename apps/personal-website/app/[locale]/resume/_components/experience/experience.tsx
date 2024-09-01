import { ExperienceComponentProps } from "./experience.model";
import Image from "next/image";
import styles from "./experience.module.css";
import {
	Badge,
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle
} from "@editorials/ui/server";
import CompanyIconComponent from "../../../../_components/company-icon/company-icon";
import RoleComponent from "../role/role";
import DurationComponent from "../duration/duration";

const ExperienceComponent = ({
	experience
}: ExperienceComponentProps) => {
	return (
    <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-8">
      <div
        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
        <CompanyIconComponent company={experience.company} className="shrink-0 fill-gray-700 dark:fill-gray-300 cursor-pointer mb-2" height={40}/>
        <p className="self-stretch flex-grow-0 flex-shrink-0 text-2xl">
            <span className="self-stretch flex-grow-0 flex-shrink-0 text-2xl font-bold">
              {experience.company.name}
            </span>
          <span className="self-stretch flex-grow-0 flex-shrink-0 text-2xl">
              , {experience.company.location}
            </span>
        </p>
        <p
          className="self-stretch flex-grow-0 flex-shrink-0 text-base font-semibold">
          <DurationComponent startDate={experience.startDate} endDate={experience.endDate} duration={experience.duration} />
        </p>
      </div>
      <div className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 gap-6">
        {experience.roles.map((role, index) => <RoleComponent key={index} role={role} />)}
      </div>
    </div>
  );
};

export default ExperienceComponent;
