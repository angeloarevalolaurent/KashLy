import express from 'express' 
import colors from 'colors'
import morgan from 'morgan'
import { db } from './config/db'
import budgetRouter from './routes/budgetRouter'
import authRouter from './routes/authRouter'


const app = express()

// Middlewares
app.use(morgan('dev'))
app.use(express.json())


//Rutas
app.use('/api/budgets', budgetRouter)
app.use('/api/auth', authRouter)

// Conexión a la base de datos
export async function connectDB() {
    try {
        await db.authenticate();
        await db.sync();

        console.log(colors.blue.bold('Conexión exitosa a la BD'));

    } catch (error) {
        console.log(colors.red.bold('Falló la conexión a la BD'));
        console.error(error);
        throw error;
    }
}
connectDB()
export default app
