import { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import formidable from 'formidable'
import cloudinary from '@/lib/cloudinary'
// import {UploadFile} from 'cloudinary'
import { extractFieldValue } from "@/utils/index";


enum Type {
    IDEA = 'IDEA',
    MVP = 'MVP',
    TRIAL = 'TRIAL',
    FisrtSale = 'FisrtSale',
    SaleDevelopment = 'SaleDevelopment',
}
export const config = {
    api: {
        bodyParser: false,
    }
}
export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method === "POST") {
        const form = formidable({ multiples: true })
        const parseData = await new Promise<{ fields: formidable.Fields, files: formidable.Files }>((resolve, reject) => {
            form.parse(req, (err: Error, fields: formidable.Fields, files: formidable.Files) => {
                if (err) return reject(err)
                resolve({ fields, files })
            })
        })
        const { fields, files } = parseData
        // const formidableFiles = Object.values(files);

        // const uploadFiles = formidableFiles.map(file => {
        //   return {
        //      path: file.filepath, 
        //      // access filepath on each File object
        //      mimetype: file.mimetype  
        //   };
        // });

        const links: any = {};
        for (const [key, value] of Object.entries(files)) {
            const link = await cloudinary(files[key] as any, 'landa/files/forms/' + fields.email)
            links[key] = link[0]
        }

        let type;
        switch (extractFieldValue(fields, 'type')) {
            case "IDEA":
                type = Type.IDEA
                break;
            case "MVP":
                type = Type.MVP
                break;
            case "TRIAL":
                type = Type.TRIAL
                break;
            case "SaleDevelopment":
                type = Type.SaleDevelopment
                break;
            case "FisrtSale":
                type = Type.FisrtSale
                break;

            default:
                type = undefined
                break;
        }




        const startupsForm = await prisma.startupsForm.create({
            data: {
                firstName: extractFieldValue(fields, 'firstName'),
                lastName: extractFieldValue(fields, 'lastName'),
                email: extractFieldValue(fields, 'email'),
                provinceOfResidence: extractFieldValue(fields,'provinceOfResidence'),
                ideaExplanation: extractFieldValue(fields,'ideaExplanation'),
                getToKnowUs: extractFieldValue(fields,'getToKnowUs'),
                productName: extractFieldValue(fields,"productName"),
                siteAddress: extractFieldValue(fields,'siteAddress'),
                customerProblem: extractFieldValue(fields,'customerProblem'),
                solution: extractFieldValue(fields,'solution'),
                productLevel: extractFieldValue(fields,'productLevel'),
                scalable: extractFieldValue(fields,'scalable'),
                monetizationOfYourPlan: extractFieldValue(fields,'monetizationOfYourPlan'),
                structureOfYourSales: extractFieldValue(fields,'structureOfYourSales'),
                cooperatedWithInvestors: extractFieldValue(fields,'cooperatedWithInvestors'),
                customerCharacteristic: extractFieldValue(fields,'customerCharacteristic'),
                currentCustomers: extractFieldValue(fields,'currentCustomers'),
                estimatedMarketSize: extractFieldValue(fields,'estimatedMarketSize'),
                totalTamSamSom: extractFieldValue(fields,'totalTamSamSom'),
                startupRevenue: extractFieldValue(fields,'startupRevenue'),
                monthlyIncome: extractFieldValue(fields,'monthlyIncome'),
                currentInterestRate: extractFieldValue(fields,'currentInterestRate'),
                currentRaisedFunding: extractFieldValue(fields,'currentRaisedFunding'),
                neededCapital: extractFieldValue(fields,'neededCapital'),
                birthDate: new Date(extractFieldValue(fields, 'birthDate')),
                countryOfResidence: extractFieldValue(fields, 'countryOfResidence'),
                type: type as any,
                businessPlanFile: links["businessPlanFile"] ? links["businessPlanFile"] : null,
                pitchDeckFile: links["pitchDeckFile"] ? links["pitchDeckFile"] : null,
                financialFile: links["financialFile"] ? links["financialFile"] : null,

            }
        })


        res.status(200).json({ 'message': links })
        // res.status(200).json({'message1':startupsForm})
    } else {
        try {
            return res.status(200).json({ "message": "error!" })
        } catch (error) {
            console.log("message", res)
            return res.status(500).json({ message: error });
        }

    }
}