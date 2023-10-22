// Import PrismaClient from your Prisma generated client file
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

interface FormData {
  firstName: string;
  lastName: string;
  birthDate: Date;
  email: string;
  countryOfResidence: string;
  provinceOfResidence: string;
  companyName: string;
  interests: string;
  preferredAreas: string;
  howDidYouKnowUs: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData: FormData = req.body;
      console.log('Received form data:', formData);
      formData.birthDate = new Date(formData.birthDate)
      // Save the form data to the database using Prisma Client
      const savedFormData = await prisma.investorRegistration.create({ data: {
        birthDate :formData.birthDate,
        firstName : formData.firstName,
        lastName : formData.lastName,
        email: formData.email,
        countryOfResidence:formData.countryOfResidence,
        provinceOfResidence : formData.provinceOfResidence,
        companyName : formData.companyName,
        interests : formData.interests,
        preferredAreas:formData.preferredAreas,
        howDidYouKnowUs : formData.howDidYouKnowUs,

      }});

      console.log('Saved form data:', savedFormData);

      res.status(200).json({ message: 'Form data received and processed successfully.' });
    } catch (error) {
      console.error('Error processing form data:', error);
      res.status(500).json({ error: 'An error occurred while processing form data.' });
    }
  } else {
    res.status(405).end();
  }
}
