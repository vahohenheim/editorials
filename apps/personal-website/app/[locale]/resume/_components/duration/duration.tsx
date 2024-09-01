const DurationComponent = ({ startDate, endDate, duration }: { startDate: string, endDate: string, duration: string }) => {
  return <span
    className="self-stretch flex-grow-0 flex-shrink-0 w-[760px] text-base font-semibold"
    dangerouslySetInnerHTML={{ __html: `${startDate} - ${endDate} · ${duration}` }}
  />
}

export default DurationComponent;
