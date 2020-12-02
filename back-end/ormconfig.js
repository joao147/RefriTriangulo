module.exports = {
   "type": "postgres",
   "url": process.env.DATABASE_URL,
   "entities": [
      "./src/entities/**/*.ts"
   ],
   "migrations": [
      "./src/database/migration/*.ts"
   ],
   "cli": {
      "migrationsDir":"./src/database/migration"
   }
}