import express from 'express'
import cors from 'cors'
import connectDB from './mongo';
import usersRouter from './routes/users';
import rolesRouter from './routes/roles';
import musclesGroupsRouter from './routes/muscleGroups';
import daysRouter from './routes/days';
import ExcercisesRouter from './routes/Excercise';
import routinesRouter from './routes/routines';
import trainingLevelRouter from './routes/trainingLevel';
import objectivesRouter from './routes/objectives';



connectDB();

const app = express();
app.use(cors());
app.use(express.json());
const port = 3000;

app.use('/api/users',usersRouter);
app.use('/api/roles',rolesRouter)
app.use('/api/musclesgroups',musclesGroupsRouter)
app.use('/api/days',daysRouter)
app.use('/api/excercises',ExcercisesRouter)
app.use('/api/routines',routinesRouter)
app.use('/api/trainingLevels',trainingLevelRouter)
app.use('/api/objectives',objectivesRouter)

app.listen(port, () => {
  console.log(`Escuchando el puerto:${port}`);
});
