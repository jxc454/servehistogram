const redis = require('./src/redisClient');
const { GraphQLSchema, GraphQLObjectType, GraphQLList, GraphQLInt } = require('graphql');
const { toPairs } = require('lodash');

const HistoType = new GraphQLObjectType({
    name: 'Histogram',
    fields: () => ({
        keys: { type: GraphQLList(GraphQLInt) },
        values: { type: GraphQLList(GraphQLInt) }
    })
});

// Root Query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    args:{},
    fields: () => ({
        histogram: {
            type: HistoType,
            resolve: () => redis.histogram().then(data => ({
                    keys: toPairs(data).map(k => parseInt(k[0], 10)),
                    values: toPairs(data).map(k => parseInt(k[1], 10))
                })
            )
        }
    })
});

module.exports = new GraphQLSchema({
    query: RootQuery
});