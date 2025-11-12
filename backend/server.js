import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.routes.js';
import connectToMongoDB from './db/connectToMongoDB.js';
import fs from 'fs';
import path from 'path';

dotenv.config();
console.log('Current directory:', process.cwd());
console.log('.env exists:', fs.existsSync(path.resolve('.env')));

const app = express();
const PORT = process.env.PORT;
app.get('/', (req, res) => {
  // root route "localhost:5000"
  res.send('My Chat App 2.0 !!');
});
app.use(express.json()); // to parse the incoming requests with JSON payloads (from req.body)

app.use('/api/auth', authRoutes);

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`server is running on port ${PORT}`);
});
