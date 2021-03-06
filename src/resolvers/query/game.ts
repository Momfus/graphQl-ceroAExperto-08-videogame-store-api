import { IResolvers } from "graphql-tools";
import { gamesItems } from "../../data/data";

const queryGame: IResolvers = {
    Query: {
        games() {
            return gamesItems;
        }
    }
}

export default queryGame;