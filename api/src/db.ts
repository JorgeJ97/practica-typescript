require("dotenv").config();
import { Sequelize } from "sequelize";
const {DB_USER, DB_PASSWORD, DB_HOST} = process.env;

// Paso 1
import CharacterModel from './models/Characters';



export const sequelize = new Sequelize(
    `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/randm`,
    {
        logging: false,
        native: false,
        dialectOptions: {
            charset: "utf8mb4",
            collate: "utf8mb4_general_ci",
        },
    }
);
// Paso 2 
CharacterModel(sequelize)

// Paso 3. 
//Aqui se traen los modelos.
const {Character} = sequelize.models;


// relaciones entre modelos


export default {
    Character,
    ...sequelize.models,
    conn: sequelize
}
