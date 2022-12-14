import { NextApiRequest, NextApiResponse } from 'next'
import { query as q } from 'faunadb'
import { fauna } from '../../services/faunaClient'

const removeDocument = async (req: NextApiRequest, res: NextApiResponse) => {

    if (req.method === 'POST') {

        const reference = req.body.deleteRef
        const index = `id_${reference.colletion}`

         await fauna.query(
             q.Map(
                 q.Paginate(q.Match(q.Index(index), reference.id)),
                 q.Lambda("X", q.Delete(q.Var("X")))
             )
         )

            
        res.status(200)

    }
    else {
        res.status(500).end('Method Invalid')
    }
}


export default removeDocument