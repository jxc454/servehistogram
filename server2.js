const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema.js')

const app = express();
const PORT = process.env.port || 3000;

const red = require('./redisWorking');

const { Constraint } = require('./src/js/utils/udp-histogram_pb');

const constraint = new Constraint();
constraint.setXMin(19);
constraint.setXMax(21);
constraint.setYMin(14);
constraint.setYMax(28);

console.log(constraint.getXMax());
// red.histogram(k => {
//     console.log('got histogram');
//     console.log(k);
// });

// app.use('/graphql', graphqlHTTP({
//     schema,
//     graphiql: true // graphiql is a "client"...
// }));
//
// app.listen(PORT, () => console.log(`Server started on ${PORT}`));