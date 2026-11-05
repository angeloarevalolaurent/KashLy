import express from 'express' 
import colors from 'colors'
import morgan from 'morgan'
import { db } from './config/db'

const app = express()

app.use(morgan('dev'))

app.use(express.json())

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
