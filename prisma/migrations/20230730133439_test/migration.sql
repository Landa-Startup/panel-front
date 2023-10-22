-- CreateTable
CREATE TABLE "BusinessPartner" (
    "id" SERIAL NOT NULL,
    "fullName" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "streetAddress" TEXT NOT NULL,
    "companyName" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "countryOfEsidence" TEXT NOT NULL,
    "streetAddressLine2" TEXT NOT NULL,
    "investmentCeiling" TEXT NOT NULL,
    "birthTime" TIMESTAMP(3) NOT NULL,
    "provinceOfResidence" TEXT NOT NULL,
    "zipCode" BIGINT NOT NULL,
    "yourPositionInTeam" TEXT NOT NULL,
    "preferredInvestment" TEXT NOT NULL,
    "wayKnowUs" TEXT NOT NULL,

    CONSTRAINT "BusinessPartner_pkey" PRIMARY KEY ("id")
);
