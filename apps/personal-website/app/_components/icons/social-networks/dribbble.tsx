import { IconProps } from "../icon.model";

const DribbbleIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M18.1407 4.09C14.2307 8.14 9.01074 9.44 1.26074 9.94M20.7607 11.84C14.1407 10.43 8.62074 12.84 4.38074 18.16M7.57074 1.75C11.9407 7.75 13.5707 11.17 15.5707 19.47M21.0107 11C21.0107 16.5228 16.5336 21 11.0107 21C5.48789 21 1.01074 16.5228 1.01074 11C1.01074 5.47715 5.48789 1 11.0107 1C16.5336 1 21.0107 5.47715 21.0107 11Z"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default DribbbleIcon