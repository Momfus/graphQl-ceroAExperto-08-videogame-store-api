import mutationGame from "./game";

const GMR = require('@wiicamp/graphql-merge-resolvers');


const resolversMutation = GMR.merge (
    [
        mutationGame
    ]
);

export default resolversMutation;