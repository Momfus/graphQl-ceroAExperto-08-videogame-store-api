import typeGameResolvers from "./game";
import typePlatformResolvers from "./platform";

const GMR = require('@wiicamp/graphql-merge-resolvers');


const typeResolvers = GMR.merge (
    [
        typePlatformResolvers,
        typeGameResolvers
    ]
);

export default typeResolvers;