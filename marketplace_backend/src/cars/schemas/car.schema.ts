/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from 'mongoose';
export type CarDocument = Document<Car>;
@Schema({collection: 'cars'})
export class Car extends Document {
  @Prop()
    _id: string;
    @Prop()
    image_url: string;
  
    @Prop({ required: true })
    model: string;
  
    @Prop({ required: true })
    make: string;
  
    @Prop({ required: true })
    price: number;
  
    @Prop({ required: true })
    doors: number;
  
    @Prop({ required: true })
    year: number;
  
    @Prop({ required: true })
    city: string;
  
    @Prop({ required: true })
    type: string;
  
    @Prop({ required: true })
    seats: Date;
  
    @Prop({ required: true })
    fuel_type: number;
  
    @Prop({ required: true })
    horsepower: number;
  
    @Prop({ required: true })
    transmission: string;
  
    @Prop({ required: true })
    fuel_tank_capacity: string;
  
    @Prop({ required: true })
    color: string;
  }
    
  export const CarSchema = SchemaFactory.createForClass(Car)