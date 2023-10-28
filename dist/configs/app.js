"use strict";
module.exports = {
    name: String(process.env.APP_NAME),
    host: String(process.env.APP_HOST),
    port: Number(process.env.APP_PORT),
    secret: String(process.env.APP_SECRET),
    jwt: {
        secret: String(process.env.APP_JWT_SECRET),
        signOptions: {
            expiresIn: Number(process.env.APP_JWT_EXPIRES),
        },
    },
    mailHost: String(process.env.MAIL_HOST),
    mailPort: Number(process.env.MAIL_PORT),
    mailUser: String(process.env.MAIL_USER),
    mailPassword: String(process.env.MAIL_PASSWORD),
};
