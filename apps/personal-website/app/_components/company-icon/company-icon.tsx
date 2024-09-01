import { Company } from "../../_models/company";
import dynamic from "next/dynamic";
import { IconProps } from "../icons/icon.model";

const CompanyIconComponent = ({ company, className, width, height }: { company: Company, className?: string, width?: number, height?: number }) => {
  const Component = dynamic(() => import(`../icons/companies/${company.id}.tsx`)) as React.ComponentType<IconProps>;

  if(!Component) {
    return <></>
  }

  return <Component className={className} width={width} height={height} />
}

export default CompanyIconComponent;
