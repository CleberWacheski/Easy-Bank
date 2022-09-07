import { query as q } from "faunadb";
import { NextApiRequest, NextApiResponse } from "next";
import { unstable_getServerSession } from "next-auth";
import { fauna } from "../../services/faunaClient";
import { authOptions } from "./auth/[...nextauth]";


const addTransaction = async (req : NextApiRequest,res : NextApiResponse) => {

    if (req.method === 'POST') {

        const {user} = await unstable_getServerSession(req,res,authOptions)
        const transaction = req.body.Transaction

        const data = {
            email : user.email,
            ...transaction
        }

        await fauna.query(
           q.Create(
               q.Collection('transactions'),
               {data}
           ) 
        )

        return res.status(200)

    }
    else {
       return res.status(500).end('Method Invalid')
    }
}

export default addTransaction