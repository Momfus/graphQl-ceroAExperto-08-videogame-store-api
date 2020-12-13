import { IResolvers } from "graphql-tools";
import { platformsItems } from "../../data/data";

const queryPlatform: IResolvers = {
    Query: {
        platforms() {
            return platformsItems;
        }
    }
}

export default queryPlatform;