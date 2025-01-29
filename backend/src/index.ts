import express, {Request, Response} from 'express';
import cors from 'cors';
import DB from './utils/db';
import * as dotenv from 'dotenv';
// import router  from './routes/homeRoute';
import router from './controller/home';


const app = express();
dotenv.config();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(cors({origin:"http://localhost:5173", credentials:true}));


app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.use('/NPTEL', router);

app.listen(port, () => {
    DB();
    console.log(`Server running at ${port}`);
});