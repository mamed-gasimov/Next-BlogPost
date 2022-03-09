import { MongoClient } from 'mongodb';

const { CONNECT_TO_DB_URL } = process.env;

const handler = async (req, res) => {
    if (req.method === 'POST') {
        const { email, name, message } = req.body;
        if (
            !email ||
            !email.includes('@') ||
            !name ||
            !name.trim() === '' ||
            !message ||
            !message.trim() === ''
        ) {
            res.status(422).json({ message: 'Invalid input!' });
            return;
        }

        const newMessage = {
            email,
            name,
            message,
        }

        let client;
        try {
            client = await MongoClient.connect(CONNECT_TO_DB_URL);
        } catch (error) {
            res.status(500).json({ message: 'Could not connect to database!' });
            return;
        }

        const db = client.db();

        try {
            const result = await db.collection('messages').insertOne(newMessage);
            newMessage.id = result.insertedId;
        } catch (error) {
            client.close();
            res.status(500).json({ message: 'Storing message failed!' });
            return;
        }

        client.close;
        res.status(201).json({ message: 'Successfully stored message', storedMessage: newMessage });
    }
}

export default handler;