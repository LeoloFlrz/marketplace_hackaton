/* eslint-disable prettier/prettier */
import { MongooseModuleOptions } from "@nestjs/mongoose";

const config: MongooseModuleOptions = {
    
    uri: 'mongodb+srv://hbafzali:araba123@cluster0.mds36dy.mongodb.net/?retryWrites=true&w=majority',
    dbName:'arabadb'

};
export default config;