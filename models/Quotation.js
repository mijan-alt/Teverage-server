import mongoose from "mongoose";

const Schema = mongoose.Schema

const quotationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },

  freightType: {
    type: String,
    required: true,
  },

  departureCity: {
    type: String,
    required: true,
  },

  deliveryCity: {
    type: String,
    required: true,
  },
  weight: {
    type: String,
    required: true,
  },
  height: {
    type: String,
    required: true,
  },
  radio: {
    type: String,
    required: true,
  },
});

export const Quotes = mongoose.model('Quotes', quotationSchema)