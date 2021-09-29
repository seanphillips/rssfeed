import {ApolloServer} from 'apollo-server-micro';
import {makeExecutableSchema} from 'graphql-tools';
import {typeDefs} from '../../utils/api/typedefs';
import {resolvers} from '../../utils/api/resolvers';
import Cors from 'micro-cors';
const schema = makeExecutableSchema({typeDefs, resolvers});
const cors = Cors();

const handler = new ApolloServer({
    schema
});
module.exports = handler.start().then(() => {
return handler.createHandler({ path: 'api/graphql' })    
});


export default handler