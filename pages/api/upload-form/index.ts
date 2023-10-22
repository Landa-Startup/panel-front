// import { NextApiRequest, NextApiResponse } from "next";
// import prisma from "@/lib/prisma";
// import formidable from 'formidable'
// import cloudinary from '@/lib/cloudinary'
// import { extractFieldValue } from "@/utils/index";

// export const config = {
//     api: {
//         bodyParser: false,
//     }
// }
// export default async function handler(
//     req: NextApiRequest,
//     res: NextApiResponse
// ) {
//     if (req.method === "POST") {
//         const form = formidable({ multiples: true })

//         const parseData = await new Promise<{ fields: formidable.Fields, files: formidable.Files }>((resolve, reject) => {
//             form.parse(req, (err: Error, fields: formidable.Fields, files: formidable.Files) => {
//                 if (err) return reject(err)
//                 resolve({ fields, files })
//             })
//         })
//         const { fields, files } = parseData
//         console.log("this is files",files)
//         const uploadUrls = await cloudinary(files.file, 'landa/files/forms')
//         console.log(uploadUrls)
//         const product = await prisma.product.create({
//             data: {
//                 name: extractFieldValue(fields, 'name'),
//                 family: extractFieldValue(fields, 'family'),
//                 file: uploadUrls[0]
//             }
//         })
//         // res.status(200).json(product)
//         res.status(200).json({'message':uploadUrls})
//     } else {
//         try {

//             // const products = await prisma.product.create({
//             //     include: {
//             //         images: true
//             //     }
//             // })
//             // console.log("products: ", products)
//             // return res.status(200).json(products);
//             return res.status(200).json({"message":"error!"})
//         } catch (error) {
//             console.log("message",res)      
//             return res.status(500).json({ message: 'Internal server error' });
//         }

//     }
// }