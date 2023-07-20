/* eslint-disable prettier/prettier */
import { Schema, Document } from 'mongoose';

export interface Car extends Document {
  make: string;
  model: string;
  color: string;
  year: number;
}

export const CarSchema = new Schema<Car>({
  make: { type: String, required: true },
  model: { type: String, required: true },
  color: { type: String, required: true },
  year: { type: Number, required: true },
});
