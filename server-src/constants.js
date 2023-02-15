import dotenv from "dotenv";
dotenv.config();

export default {
    SERVER: {
        PORT: `${process.env.PORT || 8000}`,
        SSL_PORT: `${process.env.SSL_PORT || 443}`,
        LIST_IP: `${process.env.LIST_IP || '0.0.0.0'}`,
        SSL_KEY: `${process.env.SSL_KEY || '.cert/server.key'}`,
        SSL_CERT: `${process.env.SSL_CERT || '.cert/server.cert'}`,
        PATH: {
            ROUTES: "server-src/routes/enabled",
            LOGS: "./logs"
        }                
    }
};


