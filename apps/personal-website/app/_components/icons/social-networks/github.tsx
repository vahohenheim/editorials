import { IconProps } from "../icon.model";

const GithubIcon = ({ width, height, className }: IconProps) => {
  return (
    <svg className={className} width={width} height={height} viewBox="0 0 23 22" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M14 21V17C14.1391 15.7473 13.7799 14.4901 13 13.5C16 13.5 19 11.5 19 8C19.08 6.75 18.73 5.52 18 4.5C18.28 3.35 18.28 2.15 18 1C18 1 17 1 15 2.5C12.36 2 9.64 2 7 2.5C5 1 4 1 4 1C3.7 2.15 3.7 3.35 4 4.5C3.27187 5.51588 2.91847 6.75279 3 8C3 11.5 6 13.5 9 13.5C8.61 13.99 8.32 14.55 8.15 15.15C7.98 15.75 7.93 16.38 8 17M8 17V21M8 17C3.49 19 3 15 1 15"
        fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default GithubIcon
