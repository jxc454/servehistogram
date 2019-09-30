import Express from 'express'
import graphqlHTTP from 'express-graphql'

import { RootQuery } from './schema'
import { GraphQLSchema } from 'graphql'
const cors = require('cors')

const app = Express()
const PORT = process.env.port || 3000

// Allow cross-origin
app.use(cors())

app.use(
    '/graphql',
    graphqlHTTP({
        schema: new GraphQLSchema({ query: RootQuery }),
        graphiql: true,
    })
)

app.listen(PORT, () => console.log(`Server started on ${PORT}`))
