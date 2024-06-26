import { v4 as uuidv4 } from "uuid";
import { PHONE_NUMBER } from "../../constants";

const processItemData = [
  {
    id: uuidv4(),
    number: "01",
    heading:
      "Find a car transport company that puts you and your schedule first.",
    text:
      "When you research to find the best auto transport company for you, never settle for less. If an auto shipping company doesn’t strive to provide 100% customer satisfaction, they’re not worth your time. RS Logistics , our customer-focused approach is designed to prioritize you and your vehicle at every turn. We know you’re busy. We’re here to help.",
  },

  {
    id: uuidv4(),
    number: "02",
    heading: "Provide your vehicle transport company with key information about your car shipment.",
    text:
      "A reputable auto transportation company will only require the most pertinent information about your order to book a shipment. This includes the zip codes of your pickup and delivery locations, the make and model of your car, and special considerations such as enclosed car hauling service.",
  },

  {
    id: uuidv4(),
    number: "03",
    heading: "Book online or call your auto transport company directly.",
    text:
      `RS Logistics  has streamlined the online booking process with our state-of-the-art instant vehicle shipping cost calculator. In seconds, you can choose the right auto shipping quote for you and book a shipment that works with your schedule. If you have questions or want to book your shipment with one of our experts, feel free to contact us anytime at ${PHONE_NUMBER}. We’ll be happy to assist.`,
  },

  {
    id: uuidv4(),
    number: "04",
    heading: "Great Wall Support",
    text:
      "Lorem ipsum dolor sit amet, consectetur adipisic ing elit, sed do eiusmod tempor incididunt",
  },
];

export default processItemData;
