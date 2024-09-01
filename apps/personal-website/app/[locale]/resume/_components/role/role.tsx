import { Role } from "../../../../_models/experience";
import DurationComponent from "../duration/duration";

const RoleComponent = ({ role }: { role: Role }) => {
  return (
    <div
      className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
      <div
        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
        <p
          className="self-stretch flex-grow-0 flex-shrink-0 text-xl font-bold">
          {role.job}
        </p>
        <p className="self-stretch flex-grow-0 flex-shrink-0 text-base">
          <DurationComponent startDate={role.startDate} endDate={role.endDate} duration={role.duration} />
        </p>
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-secondary-foreground" dangerouslySetInnerHTML={{ __html: role.content }} />
    </div>
  )
}

export default RoleComponent;
