import {MongoClient,MongoClientOptions} from "mongodb";

const uri = process.env.MONGODB_URI

// const options: MongoClientOptions = {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// }

if (!process.env.MONGO_URL) {
    throw new Error('Add Mongo URI to .env.local')
}

const client = new MongoClient(uri as string);
const clientPromise: Promise<MongoClient> = client.connect();

export default clientPromise