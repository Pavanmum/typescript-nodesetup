import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';

async function connect() {
    const dbUrl = config.get<string>("dbUrl")
    
    try {
        mongoose.set("strictQuery", false);
        await mongoose.connect(dbUrl);
        logger.info('Database connected');
    } catch (error) {
        logger.info('Error connecting to the database: ', error);
        process.exit(1);
    }
}

export default connect;