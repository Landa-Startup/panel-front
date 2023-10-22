import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';

interface FormData {
  name: string;
  email: string;
  number: string;
  subject: string;
  message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const formData: FormData = req.body;

      // Save the form data to the database using Prisma
      const contact = await prisma.contactUsForm.create({
        data: {
          name: formData.name,
          email: formData.email,
          number: formData.number,
          subject: formData.subject,
          message: formData.message,
        },
      });

      console.log('Contact form data saved successfully:', contact);

      res.status(200).json({ message: 'Form data received and saved successfully.' });
    } catch (error) {
      console.error('Error saving contact form data:', error);
      res.status(500).json({ error: 'An error occurred while saving the form data.' });
    } finally {
      await prisma.$disconnect(); // Properly disconnect the Prisma Client
    }
  } else {
    res.status(405).json({ error: 'Method not allowed.' });
  }
}
