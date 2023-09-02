import { MongoClient, ObjectId } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

async function handler(req, res) {
    if (req.method === "DELETE") {
        const data = req.body;

        // const { title, image, address, description } = data;

        const client = await MongoClient.connect("mongodb+srv://bharat:K9BpDcZd6wLA3yj@cluster0.eanwv.mongodb.net/meetups?retryWrites=true&w=majority");
        const db = client.db();
        const meetupsCollection = db.collection("meetups");

        const result = await meetupsCollection.deleteOne({ _id: ObjectId(data) });


        client.close();

        res.status(201).json({ message: "Meetup Deleted!" });
    }
}

export default handler;
