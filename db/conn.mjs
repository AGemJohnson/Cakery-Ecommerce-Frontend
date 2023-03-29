import { MongoClient } from "mongodb";

const connectionString = process.env.CONNECTION_URL || "";

const client = new MongoClient(connectionString);

let conn;
try {
  conn = await client.connect();
} catch(e) {
  console.error(e);
}

let db = conn.db(process.env.DATABASE_NAME);

export default db;