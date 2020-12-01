module.exports = {
   "type": "mysql",
   "url": process.env.DATABASE_URL,
   "synchronize": true,
   "entities": [
      "./dist/entities/**/*.js"
   ],
   "migrations": [
      "./dist/database/migration/*.js"
   ],
   "cli": {
      "migrationsDir":"./src/database/migration"
   }
}