import Link from "next/link";
import { CompanyId, Company } from "../../_models/company";
import CompanyIconComponent from "../company-icon/company-icon";

const CompanyComponent = ({ company }: { company: Company }) => {
  return <Link href={company.url} target="_blank">
    <CompanyIconComponent company={company} className="shrink-0 fill-gray-500 dark:fill-gray-400 cursor-pointer" />
  </Link>
}

const CompaniesComponent = ({ companies = [] }: { companies: Array<Company> }) => {
  return (
    <div
      className="w-full bg-gray-100 dark:bg-gray-500/10">
      <div className="flex w-full shrink-0 grow-1 items-center justify-start lg:justify-center gap-12 py-8 px-8 overflow-y-scroll">
        {companies.map((company, index) => (
          <CompanyComponent key={company.id} company={company} />
        ))}
      </div>
    </div>
  )
}

export default CompaniesComponent;
