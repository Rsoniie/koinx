import cors from 'cors'
import express from 'express'
import 'dotenv/config'
import connectDB from './config/db_connection.js'
import Inforoute from './routes/call_routes.js'


const app = express();
app.use(cors())
app.use(express.json())
const PORT = process.env.PORT || 5000;
// console.log(PORT);
await connectDB();


app.use('/api', Inforoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
