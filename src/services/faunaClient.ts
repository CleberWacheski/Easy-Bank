import faunaDB from 'faunadb'


export const client = new faunaDB.Client({
    secret : process.env.FAUNA_CLIENT_SECRET
})