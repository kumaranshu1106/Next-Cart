import 'dotenv/config' ;
import app from './src/app.js';
import { connectDB } from './src/config/db.config.js';

const PORT = process.env.PORT || 8080;

const startServer = async () => {
    try{
        await connectDB();
        const server = app.listen(PORT, () =>{
            console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${PORT}`);
        });

        process.on('unhandledRejection',(err) =>{
            console.error('UNHANDLED REJECTION: ',err.message);
            server.close(() => process.exit(1));
        });
    }catch (err) {
        console.log('Failed to start server: ',err.message);
        process.exit(1);
    }
}


startServer();