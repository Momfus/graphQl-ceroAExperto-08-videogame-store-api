import queryGames from './game';
import platformsItems from './platform';

const GMR = require('@wiicamp/graphql-merge-resolvers');

const resolversQuery = GMR.merge(
    [
        queryGames,
        platformsItems
    ]
);

export default resolversQuery;