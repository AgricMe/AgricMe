export type CreateCompanyProfileDTO = {
  companyName: string;
  fullName: string;
  area: string;
  CACNumber: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  address: string;
};

export type EditCompanyProfileDTO = Partial<{
  companyName: string;
  fullName: string;
  area: string;
  CACNumber: string;
  email: string;
  countryCode: string;
  phoneNumber: string;
  address: string;
}>;
