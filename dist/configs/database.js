"use strict";
var _a, _b;
module.exports = {
    type: String(process.env.TYPEORM_CONNECTION),
    host: String(process.env.TYPEORM_HOST),
    port: Number(process.env.TYPEORM_PORT),
    username: String(process.env.TYPEORM_USERNAME),
    password: String(process.env.TYPEORM_PASSWORD),
    database: String(process.env.TYPEORM_DATABASE),
    logging: process.env.TYPEORM_LOGGING === 'true',
    entities: (_a = process.env.TYPEORM_ENTITIES) === null || _a === void 0 ? void 0 : _a.split(','),
    migrations: (_b = process.env.TYPEORM_MIGRATIONS) === null || _b === void 0 ? void 0 : _b.split(','),
    migrationsRun: process.env.TYPEORM_MIGRATIONS_RUN === 'true',
    synchronize: process.env.TYPEORM_SYNCHRONIZE === 'true',
    dropSchema: process.env.TYPEORM_DROP_SCHEMA === 'true',
    bigNumberStrings: false,
    timezone: 'Z',
    entitiesDir: String(process.env.TYPEORM_ENTITIES_DIR),
    migrationsDir: String(process.env.TYPEORM_MIGRATIONS_DIR),
};
