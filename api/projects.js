const clientPromise = require('./db');

module.exports = async (req, res) => {
    const client = await clientPromise;
    const db = client.db('ronald_resume');
    const collection = db.collection('projects');

    if (req.method === 'GET') {
        const { slug } = req.query;
        try {
            if (slug) {
                const project = await collection.findOne({ slug });
                if (project) {
                    res.status(200).json(project);
                } else {
                    res.status(404).json({ error: 'Project not found' });
                }
            } else {
                const projects = await collection.find({}).toArray();
                res.status(200).json(projects);
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch projects' });
        }
    } else if (req.method === 'POST') {
        const data = req.body;
        // Remove _id if present to avoid immutable field error on update
        if (data._id) delete data._id;

        try {
            if (data.slug) {
                await collection.updateOne(
                    { slug: data.slug },
                    { $set: { ...data, updatedAt: new Date() } },
                    { upsert: true }
                );
                res.status(200).json({ message: 'Project saved' });
            } else {
                res.status(400).json({ error: 'Slug is required' });
            }
        } catch (error) {
            res.status(500).json({ error: 'Failed to save project' });
        }
    } else {
        res.setHeader('Allow', ['GET', 'POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
};
