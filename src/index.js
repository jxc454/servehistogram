import {makeBarChart} from './makeBarChart'
import ApolloClient from 'apollo-boost';
import { gql } from "apollo-boost";

const url = 'http://localhost:3000/graphql';

const defaultOptions = {
    watchQuery: {
        fetchPolicy: 'no-cache'
    },
    query: {
        fetchPolicy: 'no-cache'
    },
};

const client = new ApolloClient({
    uri: url
});
client.defaultOptions = defaultOptions;

// getJSON(url, res => makeBarChart(JSON.parse(res)));

function getData() {
    return client.query({
        query: gql`
        {
          histogram {
            keys
            values
          }
        }
    `
    });
}

setInterval(() => {
    getData().then(res => makeBarChart(res));
}, 1000);