import { Quotes } from "../models/Quotation.js";
import { Contact } from "../models/Contact.js";


export const postQuote = async (req, res) => {
  console.log("hitting post quote");
  const {
    name,
    email,
    number,
    freightType,
    departureCity,
    deliveryCity,
    weight,
    height,
    radio,
  } = req.body;

  try {
    const newQuote = await Quotes.create({
      name,
      email,
      number,
      freightType,
      departureCity,
      deliveryCity,
      weight,
      height,
      radio,
    });

    console.log("New Quote:", newQuote);

    res.status(200).send("Thank you! Your submission has been received!");
  } catch (error) {
    console.error("Error creating quote:", error);
    res
      .status(500)
      .send("Oops! Something went wrong while submitting the form");
  }
};

export const getInTouch = async (req, res) => {
  console.log("hit getInTouch");
  const { name, email, phone, subject, message } = req.body;
  console.log({
    name,
    email,
    phone,
    subject,
    message,
  });

  try {
    const newContact = await Contact.create({
      name,
      email,
      phone,
      subject,
      message,
    });

    console.log("New Contact:", newContact);

    res.status(200).send("completed");
  } catch (error) {
    console.error("Error creating contact:", error);
    res.status(500).send("Internal Server Error");
  }
};
