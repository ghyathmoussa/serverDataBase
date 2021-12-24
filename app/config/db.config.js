module.exports = {
    HOST: 'localhost',
    USER: 'postgres',
    PASSWORD:'ghrefd11!',
    DB:'taxi_db',
    dialect: "postgres",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}