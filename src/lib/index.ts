import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

let client: MongoClient;
let db: any;

export async function connectToDatabase() {
    if (!client) {
        client = new MongoClient(uri);
        const newclient=await client.connect();
        db = newclient.db("money");
    }
    return db;
}
