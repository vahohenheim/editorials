const DurationComponent = ({ startDate, endDate, duration }: { startDate: string, endDate?: string, duration: string }) => {
  const content = endDate ? `${startDate} - ${endDate} · ${duration}` : `${startDate} · ${duration}`

  return <span
    className="self-stretch flex-grow-0 flex-shrink-0 w-[760px] text-base font-semibold"
    dangerouslySetInnerHTML={{ __html: content }}
  />
}

export default DurationComponent;
