import histogram from './redisClient'
import { GraphQLObjectType, GraphQLList, GraphQLInt } from 'graphql'
import { toPairs } from 'lodash'

export const HistoType = new GraphQLObjectType({
    name: 'Histogram',
    fields: () => ({
        keys: { type: GraphQLList(GraphQLInt) },
        values: { type: GraphQLList(GraphQLInt) },
    }),
})

// Root Query
export const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        histogram: {
            type: HistoType,
            resolve: () =>
                histogram().then(data => ({
                    keys: toPairs(data).map(k => parseInt(k[0], 10)),
                    values: toPairs(data).map(k => parseInt(k[1], 10)),
                })),
        },
    }),
})
