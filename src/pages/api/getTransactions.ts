import { query as q } from "faunadb"
import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"
import { fauna } from "../../services/faunaClient"
import { authOptions } from "./auth/[...nextauth]"

const getTransactions = async (req: NextApiRequest, res: NextApiResponse) => {

    const { user } = await unstable_getServerSession(req, res, authOptions)

    if (req.method === 'GET') {

        const data = await fauna.query(
            q.Map(
                q.Paginate(
                    q.Match(
                        q.Index('user_by_email_transactions'),
                        q.Casefold(user.email)
                    )
                ),
                q.Lambda(x => q.Get(x))
            )
        )


        return res.json(data)


    }
    else {
        return res.status(500).end('Method Invalid')
    }

}


export default getTransactions