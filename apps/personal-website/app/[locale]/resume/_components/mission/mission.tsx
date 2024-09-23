import DurationComponent from "../duration/duration";
import { getScopedI18n } from "../../../../../locales/server";
import { Mission } from "../../../../_models/mission";
import dayjs from "dayjs";
import { formatDateDifference } from "../../../../_utils/format-date-difference";
import { RoleId } from "../../../../_models/role";

const MissionComponent = async ({ mission, lang }: { mission: Mission, lang: 'fr' | 'en' }) => {
  const scopedT = await getScopedI18n(`experiences.roles.${mission.id}`);
  const rolesScopedT = await getScopedI18n(`roles`);

  return (
    <div
      className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-2">
      <div
        className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative gap-1">
        <p
          className="self-stretch flex-grow-0 flex-shrink-0 text-xl font-bold">
          {mission.roles.map((role: RoleId) => rolesScopedT(role)).join(' & ')}
        </p>
        {!!mission.startDate || !!mission.endDate && <p className="self-stretch flex-grow-0 flex-shrink-0 text-base">
          <DurationComponent startDate={dayjs(mission.startDate).format('MMMM YYYY')}
                             endDate={dayjs(mission.endDate).format('MMMM YYYY')}
                             duration={formatDateDifference(dayjs(mission.startDate), dayjs(mission.endDate), lang)} />
        </p>}
      </div>
      <p className="self-stretch flex-grow-0 flex-shrink-0 text-base text-secondary-foreground list-disc"
         dangerouslySetInnerHTML={{ __html: scopedT('content') }} />
    </div>
  )
}

export default MissionComponent;
