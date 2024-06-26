import { v4 as uuidv4 } from "uuid";

const faqData = [
  {
    id: uuidv4(),
    question: "How far in advance should i book my vehicle shipment?",
    answer:
      "As Carriers rarely plan their hauls more than a few days prior to departure, we recommend that you book your shipment roughly 3-5 days prior to your desired pick-up date. Although booking earlier could still play to your advantage, Carriers seldom express interest in shipments far in advance.",
  },

  {
    id: uuidv4(),
    question:
      "Can I arrange the pick up and delivery of my vehicle for specific dates and times?",
    answer:
      "Due to the numerous variables that could unexpectedly affect a Carrier’s progress during transit, it is very difficult to guarantee exact dates and times for pick-up and/or delivery. Delays caused by other customers using the same hauler, traffic congestion, accidents, mechanical malfunctions and weather are common factors that may cause a Carrier to run behind schedule. Yellowfin will always work to ensure the service you receive matches your requested timeline as closely as possible, however we will never make guarantees to our customers that we are not absolutely certain our partners can honor.",
  },

  {
    id: uuidv4(),
    question:
      "Do I need to be present at the pick-up and/or drop-off of the vehicle?",
    answer:
      "You, or a person you authorize to handle the transactions on your behalf, will need to be present to hand over and accept the vehicle. If you cannot personally be present, we would require that you notify us of this fact prior to pick-up. We would also ask that you provide us with the name and contact numbers for the person/s you have appointed to be present in your stead.",
  },

  {
    id: uuidv4(),
    question: "Can I ship my personal belongings with my car?",
    answer:
      "Although most Auto Transporters are only licensed for vehicle transportation, many allow for ‘junk in the trunk’. This means that they will allow up to 100 lbs of personal belongings to be shipped in the trunk of your vehicle free of charge (some may even allow for it to be stowed in the back compartment, below window level). Although your vehicle is covered by the Carrier’s insurance, these items are not and are transported at your own risk. Make sure to receive authorisation for additional luggage prior to pickup. Be sure to always keep the driver and co-driver seats clear of any luggage.",
  },
  {
    id: uuidv4(),
    question: "How do I pay for the service?",
    answer:
      "Our payment process is simple and straightforward. We do not require upfront payment for our services. Once we successfully match a Carrier to your requirements, we would then process a deposit. The balance for your shipment will be due on pick-up or delivery. This can be paid directly to the driver with cash, cashier’s check, or money order.",
  },
  {
    id: uuidv4(),
    question: "Are there any hidden fees or extra charges?",
    answer:
      "A Yellowfin quote is never automated and has been personally assessed by a Dedicated Yellowfin Advisor. This means that your quote will always be the most current assessment of the Standard Rates demanded by the market at the specific time that your shipping request is processed. This quote is also all-inclusive; covering all taxes, tolls, bumper-to-bumper insurance and door-to-door service. Additionally, you are able to send up to 100 lbs of your personal belongings absolutely free. Be sure to receive authorisation for this luggage prior to your pickup date.",
  },
];

export default faqData;
