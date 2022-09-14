import { query as q } from "faunadb"
import { NextApiRequest, NextApiResponse } from "next"
import { unstable_getServerSession } from "next-auth"
import { fauna } from "../../services/faunaClient"
import { authOptions } from "./auth/[...nextauth]"

const getFinances = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'GET') {

        try {
        
            const { user } = await unstable_getServerSession(req, res, authOptions)

            if (!user)  {
                res.status(401).end('Unauthorized')
            }

            const transactions = await fauna.query(
                q.Map(
                    q.Paginate(
                        q.Match(
                            q.Index('email_user_transactions'),
                            q.Casefold(user.email)
                        )
                    ),
                    q.Lambda(x => q.Get(x))
                )
            )

            const goals = await fauna.query(
                q.Map(
                    q.Paginate(
                        q.Match(
                            q.Index('user_email_goals'),
                            q.Casefold(user.email)
                        )
                    ),
                    q.Lambda(x => q.Get(x))
                )
            )

            const data = {
                transactions,
                goals
            }

            return res.json(data)
        }

        catch (e) {
            res.status(401).end('Unauthorized')

        }

    }
    else {
        return res.status(500).end('Method Invalid')
    }

}


export default getFinances