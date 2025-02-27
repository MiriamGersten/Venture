export interface BusinessInfo {
    facilityName: string;
    address: string;
    city: string;
    state: DropdownOption;
    zip:string;
    country: DropdownOption;
    phone: string;
    businessType: DropdownOption;
    otherBusinessType?: string;
    isCorporate?: boolean | null;
    facilities: Facility[];
}

export interface DropdownOption {
    value: number;
    label: string;
}

export interface Facility {
    firstName: string;
    lastName: string;
    address: string;
    city: string;
    state: DropdownOption;
    zip:string;
    country: DropdownOption;
    contactType: DropdownOption;
    contactPhone: string;
    contactEmail: string;
    billingSameAsCorporate: boolean;
}

export interface ShippingInfo {
    legalName: string;
    address: string;
    city: string;
    state: DropdownOption;
    zip:string;
    country: DropdownOption;
    phone: string;
    fax: string;
    email: string;
}

export interface BillingInfo {
    sameAsShipping: boolean;
    shippingInfo: ShippingInfo;
}

export interface ContactType {
    name: string;       
    phone: string;
    email: string;
    preferredMethod: 'phone' | 'email';
}