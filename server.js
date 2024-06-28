import express from 'express';
import routes from './routes.js';
const port = 8000;
const app = express();

app.use(express.json());

app.use('/api/users',routes);


app.listen(port, ()=> console.log(`port is running at ${port}`));