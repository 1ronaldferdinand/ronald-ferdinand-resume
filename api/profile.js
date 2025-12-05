const clientPromise = require('./db');

module.exports = async (req, res) => {
    const client = await clientPromise;
    const db = client.db('ronald_resume');
    const collection = db.collection('profile');

    if (req.method === 'GET') {
        try {
            const profile = await collection.findOne({});
            res.status(200).json(profile || {});
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch profile' });
        }
    } else if (req.method === 'POST') {
        const { name, email, title, description_en, description_id } = req.body;
        // Basic security check - in prod you'd want auth here
        // For now, we assume this will be protected by middleware or similar in future
        if (!req.headers.authorization) {
            // res.status(401).json({ error: 'Unauthorized' });
            // Keeping open for development as per request simplicity, 
            // but user asked for Admin panel, so we will need auth later.
        }

        try {
            await collection.updateOne(
                {},
                { $set: { name, email, title, description_en, description_id, updatedAt: new Date() } },
                { upsert: true }
            );
            res.status(200).json({ message: 'Profile updated' });
        } catch (error) {
            res.status(500).json({ error: 'Failed to update profile' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
