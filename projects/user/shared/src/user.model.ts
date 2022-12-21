export interface BaseUser {
    id: number;
    firstName: string;
    lastName: string;
    username: string;
    email: string;
    userType: UserTypes;
    phone: string;
    isActive: boolean;
    isPendingActivation?: boolean;
    emailConfirmed: boolean;
    lastLoginTime: number;
    isLocked: boolean;
    createdAt: number;
}

export enum UserTypes {
    SuperAdmin = 'System Admin', // SystemUser
    ITAdmin = 'IT Admin', // SystemUser
    ChiefSecurityOfficer = 'Chief Security Officer', // SystemUser
    SystemAdmin = 'System Admin', // SystemUser
    TechnicalSupport = 'Technical Support', // SystemUser
    CustomerSupport = 'Customer Support', // SystemUser
    TenantAdmin = 'Tenant Admin', // TenantUser
    Physician = 'Physician', // HCP
    RegisteredTechnician = 'Technician', // HCP
    Patient = 'Patient', // Patient
}