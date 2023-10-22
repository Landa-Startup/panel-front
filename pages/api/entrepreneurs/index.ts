// Import PrismaClient from your Prisma generated client file
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import { Entrepreuneur } from 'app/types/global';



export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData: Entrepreuneur = req.body;
      console.log('Received form data:', formData);

      // Save the form data to the database using Prisma Client
      const savedFormData = await prisma.enterpruner.create({ data: {
        email : formData.email,
        companyName: formData.companyName,
        phone: formData.phone,
        website: formData.website,
        fieldOfProfessional: formData.fieldOfProfessional
      } });

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
