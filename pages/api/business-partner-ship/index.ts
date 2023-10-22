// create api for post request
// save data in database with prisma

import { NextApiRequest, NextApiResponse } from 'next';
import prisma from '@/lib/prisma';


interface FormData {
  fullName: string;
  email: string;
  streetAddress: string;
  companyName: string;
  phoneNumber: string;
  countryOfEsidence: string;
  streetAddressLine2: string;
  investmentCeiling: string;
  birthTime: Date;
  provinceOfResidence: string;
  zipCode: number;
  yourPositionInTeam: string;
  preferredInvestment: string;
  wayKnowUs: string;
}


export default async function handler(req: NextApiRequest,res: NextApiResponse){
  if(req.method === 'POST'){
    try{
      const formData:FormData = req.body;
      // console.log(formData)
      const result = await prisma.businessPartner.create({
        data: {
          ...formData,
        },
      })
      
      res.status(200).json({message:"Form data received successfully."})
    }
    catch(error){
      res.status(400).json({error: error});
    }
  }
  else{
    res.status(405).json({ error: 'Method not allowed.' });
  }
}