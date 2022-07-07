import express from 'express'
import cors from 'cors'
import connectDB from './mongo';
import usersRouter from './routes/users';
import rolesRouter from './routes/roles';



connectDB();

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.use('/api/users',usersRouter);
app.use('/api/roles',rolesRouter)

app.listen(port, () => {
  console.log(`Escuchando el puerto:${port}`);
});
