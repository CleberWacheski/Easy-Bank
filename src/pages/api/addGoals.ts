import { query as q } from 'faunadb';
import {NextApiRequest,NextApiResponse} from 'next'
import {unstable_getServerSession} from 'next-auth'
import { fauna } from '../../services/faunaClient';
import { authOptions } from "./auth/[...nextauth]";


const addGoals = async (req : NextApiRequest, res : NextApiResponse) => {
    if (req.method === 'POST') {
        const {user} = await unstable_getServerSession(req,res,authOptions)
        const goal = req.body.goal

        const data = {
            Email : user.email,
            ...goal
        }

        fauna.query(
            q.Create(
                q.Collection('goals'),
                {data}
            )
        )

        return res.status(200)
    }

    else  {
        return res.status(500).end('Method Invalid')
    }

}

export default addGoals