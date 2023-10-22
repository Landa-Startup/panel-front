// Import PrismaClient from your Prisma generated client file
import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';
import formidable from 'formidable'
import cloudinary from '@/lib/cloudinary'
import { extractFieldValue } from "@/utils/index";

// interface FormData {
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
//   cvfile: string
// }
export const config = {
  api: {
    bodyParser: false,
  }
}
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      console.log("data come to server")
      // console.log(req.body)
      const form = formidable({ multiples: true })
      const parseData = await new Promise<{ fields: formidable.Fields, files: formidable.Files }>((resolve, reject) => {
        form.parse(req, (err: Error, fields: formidable.Fields, files: formidable.Files) => {
          if (err) return reject(err)
          resolve({ fields, files })
        })
      })

      console.log("data parsed")
      const { fields, files } = parseData
      console.log('parseData:', parseData);
      const links: any = {};
      for (const [key, value] of Object.entries(files)) {
        const link = await cloudinary(files[key] as any, 'landa/files/forms/jobs/' + fields.email)
        links[key] = link[0]
      }
      console.log('links:', links);
      const savedFormData = await prisma.jobForm.create({
        data: {
          firstName: extractFieldValue(fields, 'firstName'),
          lastName: extractFieldValue(fields, 'lastName'),
          email: extractFieldValue(fields, 'email'),
          phoneNumber: extractFieldValue(fields, 'phoneNumber'),
          cvFile: links.cvFile,
        }
      });
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
