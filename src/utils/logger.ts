import logger from 'pino';
import dayjs from 'dayjs';


const log = logger({
    timestamp: () => `,"time":"${dayjs().format()}"`,
    transport: {
        target: 'pino-pretty',
        options: {
            colorize: true
        },
    },
});

export default log;