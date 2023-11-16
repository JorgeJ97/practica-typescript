import {  Sequelize } from "sequelize";

import { DataTypes } from 'sequelize';
import { CharacterInstance } from "../types";


const CharacterModel = (sequelize: Sequelize) => {
   sequelize.define<CharacterInstance>('Character', {
      id: {
         type: DataTypes.INTEGER,
         allowNull: false,
         primaryKey: true,
         autoIncrement: true,
         unique: true
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false
      },
      status: {
         type: DataTypes.ENUM({
            values: ['Alive', 'Dead','unknown'],
         }),
         allowNull: false
      },
      species: {
         type: DataTypes.STRING,
         allowNull: false
      },
      gender: {
         type: DataTypes.ENUM({
            values: ['Female', 'Male', 'Genderless', 'unknown']
         }),
         allowNull: false
      },
      origin: {
         type: DataTypes.STRING,
         allowNull: false
      },
      image: {
         type: DataTypes.STRING,
         allowNull: false
      },
      isFavorite: {
         type: DataTypes.BOOLEAN,
         allowNull: false,
         defaultValue: false
      }
   }, {timestamps:false});
};

export default CharacterModel;
