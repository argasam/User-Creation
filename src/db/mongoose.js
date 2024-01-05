const mongoose = require("mongoose");

const db_port = process.env.MONGODB_PORT;
const db_host = process.env.MONGODB_HOST || "localhost";
const db_user = process.env.MONGODB_USER;
const db_password = process.env.MONGODB_PASSWORD;
const db_database = process.env.MONGODB_DATABASE;
const db_url = process.env.DATABASE_URL;
const conn = `mongodb://${db_user}:${db_password}@${db_host}:${db_port}/${db_database}?authSource=admin`;

module.exports = () =>{
	mongoose.connect(db_url);
}
