const CardRetrospectiveComponent = ({ title, description, link, date, image }: { title: string, description: string, link: string, date: string, image: string }) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full p-4 bg-white rounded-lg shadow-md">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <div className="w-full h-full">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className="mt-4 flex flex-col items-center justify-center w-full h-full">
          <div className="text-lg font-bold text-gray-800">{title}</div>
          <div className="text-sm text-gray-600">{description}</div>
          <div className="mt-2 flex flex-row items-center justify-center w-full h-full">
            <a href={link} className="text-sm text-blue-600 hover:underline">
              {date}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRetrospectiveComponent;
