// Define an enum for the types of startups
enum Type {
  IDEA = 'IDEA',
  MVP = 'MVP',
  TRIAL = 'TRIAL',
  FisrtSale = 'FisrtSale', // Typo: Should be "FirstSale"
  SaleDevelopment = 'SaleDevelopment',
}

// Define an interface for business partnership form data
interface BusinessPartnerShipFormData {
  fullName: string;
  email: string;
  streetAddress: string;
  companyName: string;
  phoneNumber: string;
  countryOfResidence: string; // Typo: Should be "countryOfResidence"
  streetAddressLine2: string;
  investmentCeiling: string;
  birthTime: Date; // Typo: Should be "birthDate"
  provinceOfResidence: string;
  zipCode: number;
  yourPositionInTeam: string;
  preferredInvestment: string;
  wayKnowUs: string; // Typo: Should be "wayToKnowUs"
}

// Define an interface for contact form data
interface ContactUSFormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

// Define an interface for investor registration form data
interface InvestorRegistrationFormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  countryOfResidence: string;
  provinceOfResidence: string;
  companyName: string;
  interests: string;
  positionInTeam: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
}

// Define an interface for partner membership form data
interface PartnerMembershipFormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  countryOfResidence: string;
  provinceOfResidence: string;
  companyName: string;
  investmentCeiling: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
}

// Define an interface for job application form data
interface JobFormData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  cvFile?: File | '';
}

// Define an interface for startups form data
interface StartupsFormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  countryOfResidence: string;
  provinceOfResidence: string;
  type: Type;
  ideaExplanation: string;
  getToKnowUs: string;
  pitchDeck: boolean;
  pitchDeckFile?: File | '';
  businessPlan: boolean;
  businessPlanFile?: File | '';
  productName: string;
  siteAddress: string;
  customerProblem: string;
  solution: string;
  productLevel: Level; // You might want to define "Level" enum here
  scalable: string;
  monetizationOfYourPlan: string;
  structureOfYourSales: string;
  financialModelFile?: File | '';
  cooperatedWithInvestors: string;
  financial: boolean;
  financialFile?: File | '';
  customerCharacteristic: string;
  currentCustomers: string;
  estimatedMarketSize: string;
  totalTamSamSom: string;
  startupRevenue: string;
  monthlyIncome: string;
  currentInterestRate: string;
  currentRaisedFunding: string;
  neededCapital: string;
  MVP: boolean;
  FirstSale: boolean;
  TrialProduct: boolean;
  SaleDevelopment: boolean;
  Idea: boolean;
}

interface Entrepreuneur {
  email: string;
  companyName: string;
  phone: string;
  website: string;
  fieldOfProfessional: string;
}

interface LoginFormData {
  email: string;
  password: string;
}

interface DecodedToken {
  exp: number;
  iat: number;
  role: string;
  user_id: number;
  first_name: string;
  last_name: string;
  image: string;
  jwt: string;
}

interface TableData {
  first_name: string;
  last_name: string;
  start_time: string;
  end_time: string;
  status: string;
  employerName: string;
  employeeName: string;
  typeOfLeave: string;
  date: string;
  time: string;
}


export {
  ContactUSFormData,
  Type,
  BusinessPartnerShipFormData,
  StartupsFormData,
  PartnerMembershipFormData,
  InvestorRegistrationFormData,
  JobFormData,
  Entrepreuneur,
  LoginFormData,
  DecodedToken,
  TableData
};
