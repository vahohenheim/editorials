import { Company, CompanyId } from "../_models/company";

export const COMPANIES: Record<CompanyId, Company> = {
    [CompanyId.EP]: {
        id: CompanyId.EP,
        url: 'https://ep.fr',
        name: 'EP',
        location: 'Nantes, Pays de la Loire, France'
    },
    [CompanyId.CONSERTO]: {
        id: CompanyId.CONSERTO,
        url: 'https://conserto.com',
        name: 'Conserto',
        location: 'Nantes, Pays de la Loire, France'
    },
    [CompanyId.TROOPERS]: {
        id: CompanyId.TROOPERS,
        url: 'https://troopers.fr',
        name: 'Troopers',
        location: 'Nantes, Pays de la Loire, France'
    },
    [CompanyId.CONNEXING]: {
        id: CompanyId.CONNEXING,
        url: 'https://connexing.com',
        name: 'Connexing',
        location: 'Nantes, Pays de la Loire, France'
    },
    [CompanyId.ANJOU]: {
        id: CompanyId.ANJOU,
        url: 'https://anjou.com',
        name: 'Anjou',
        location: 'Angers, Pays de la Loire, France'
    },
    [CompanyId.DROUAULT]: {
        id: CompanyId.DROUAULT,
        url: 'https://drouault.com',
        name: 'Drouault',
        location: 'Le Mans, Pays de la Loire, France'
    }
}
