import Bg1 from "../assets/img/ship/sea_transportation.jpg";
import Bg2 from "../assets/img/ship/vehicle_transportation.jpg";
import Bg3 from "../assets/img/ship/ship2.jpg";

import Icon1 from "../assets/img/icon/s1.png";
import Icon2 from "../assets/img/icon/s2.png";
import Icon3 from "../assets/img/icon/s3.png";
// import Icon4 from '../assets/img/icon/s4.png';

// sea transportation images
import ShipImage1 from "../assets/img/services/ship/1.jpg";
import ShipImage2 from "../assets/img/services/ship/2.jpg";

// nationwide hauiling images
import NationwideHauilingImage1 from "../assets/img/services/nationwide_hauiling/1.jpg";
import NationwideHauilingImage2 from "../assets/img/services/nationwide_hauiling/2.jpg";

// vehicle transportation images
import VehicleRransportationImage1 from "../assets/img/services/vehicle/1jpg.jpg";
import VehicleRransportationImage2 from "../assets/img/services/vehicle/2.jpg";
import VehicleRransportationImage3 from "../assets/img/services/vehicle/3.jpg";
// import processItemData from "../components/Process/processItemData";

export const servicesData = [
  {
    id: "sea-transportation",
    bgImg: Bg1,
    icon: Icon1,
    heading: "Sea transportation",
    description:
      "Refine Service’s mission is to offer the best way of transportation for each consumer depending on individual requirements. East Auto LLC offers consolidated cargo, full container carriage and Roll on Roll off service.",
    btnText: "Learn More",
    details: {
      images: [ShipImage1, ShipImage2],
      content: [
        {
          heading: "What Is Sea Transportation?",
          texts: [
            "Sea transportation, also known as maritime transport or ocean freight, is a method of transporting goods and cargo by ships across the world's oceans and seas. It is a crucial component of international trade, enabling the movement of large quantities of goods over long distances efficiently and cost-effectively. This mode of transport is ideal for heavy and bulky items, as well as commodities that do not require rapid delivery.",
          ],
        },
        {
          heading: "Types of Sea Transportation Services",
          texts: [
            "Sea transportation encompasses a variety of services to meet different shipping needs:",
            "Container Shipping: The most common form of sea transport, involving the use of standardized containers to carry goods. Containers can be easily transferred between ships, trucks, and trains.",
            "Bulk Shipping: Used for transporting large volumes of unpackaged goods such as grains, coal, ore, and liquids. Bulk carriers are specially designed to handle these types of cargo.",
            "Ro-Ro Shipping: Stands for 'Roll-on/Roll-off' and involves vessels designed to carry wheeled cargo like cars, trucks, and trailers that are driven on and off the ship.",
            "Breakbulk Shipping: Involves transporting cargo that does not fit into standard containers, typically handled as individual pieces. Examples include machinery, construction materials, and vehicles.",
          ],
        },
        {
          heading: "Factors Affecting the Cost of Sea Transportation",
          texts: [
            "Several factors influence the cost of sea transportation services:",
            "Distance: The longer the distance between the origin and destination ports, the higher the transportation cost.",
            "Cargo Type and Size: Larger and heavier cargo requires more space and resources, increasing the cost. Special handling or packaging needs can also affect pricing.",
            "Shipping Route: Popular and well-established routes may be cheaper due to higher traffic and competition among shipping lines, while less frequented routes might be more expensive.",
            "Season and Demand: Shipping costs can fluctuate based on seasonal demand, with peak seasons often resulting in higher prices.",
            "Fuel Prices: Variations in fuel prices can impact shipping costs, as fuel is a significant component of the overall expense.",
          ],
        },
        {
          heading: "Benefits of Sea Transportation",
          texts: [
            "Sea transportation offers several advantages, making it a preferred choice for many shippers:",
            "Cost-Effectiveness: Ideal for shipping large quantities of goods at a lower cost compared to air transport.",
            "Capacity: Ships can carry a vast amount of cargo, making it suitable for bulk goods.",
            "Environmental Impact: Generally more fuel-efficient and produces lower emissions per ton-mile compared to other transportation modes.",
            "Global Reach: Enables access to virtually any international market with port facilities.",
          ],
        },
        {
          heading: "Conclusion",
          texts: [
            "Sea transportation remains a vital component of global trade, providing an efficient and economical way to move goods across the world. With a variety of service options and the ability to handle large volumes, it continues to be a reliable and indispensable mode of transport for international commerce.",
          ],
        },
      ],
      // service_opinion: processItemData.map((item) => ({
      //   text: item.heading,
      //   description: "",
      //   id: item.id,
      // })),
      // faq: [
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      // ],
    },
  },

  {
    id: "vehicle-transport",
    bgImg: Bg2,
    icon: Icon2,
    heading: "Vehicle transport",
    description:
      "RS Logistics  transports all type of vehicles inside the USA and overseas , including heavy trucks, sedan, SUVs , regular trucks. Each cargo is similarly significant and valued with your preference of timing.",
    btnText: "Learn More",
    details: {
      images: [
        VehicleRransportationImage1,
        VehicleRransportationImage2,
        VehicleRransportationImage3,
      ],
      content: [
        {
          heading: "What Is Car Shipping?",
          texts: [
            ` Car shipping, otherwise known as auto transport or vehicle transport, is essentially just a service carried out by car shipping companies that will pick your car up from one place and move it to another. It is useful to ship a car in a wide range of situations where you are not able to drive the car there yourself, for example, you might be buying or selling second-hand online and need to ship a car to another state, or maybe you have just moved house and need to ship a car across country. Another situation where car shipping services can be very useful is when you need to transport your vehicle abroad and unless ferries are available, you will need to rely on an auto transport company to carry this out for you.
          `,
            "Thankfully, there is a range of car transport services available to suit your needs which we have listed below.",
          ],
        },
        {
          heading: "Types Of Auto Transport Services",
          texts: [
            "There are a number of auto transport services available which have been summarised below. It can be a big help to read through and work out exactly what sort of vehicle transportation service you need or want to move your car. ``The first decision that you need to make is where you want your car picked up from and delivered to, whether it’s a cross-country car transport or shipping a car to another state. Terminal-to-terminal auto delivery is an option, meaning that designated pick-up and drop-off points are used which are often the car transport company’s stores or operating bases. For this reason, terminal-to-terminal auto delivery is often cheaper but will require some more effort on your end to get the car home. The vast majority of people however require a door-to-door auto transport delivery service so that their cars are picked up and dropped off at their door, regardless of whether it is a cross-country car transport, or just to transport a car to another state. This is often preferable as it means you do not need to get anywhere to then pick up your vehicle - something that can be tricky without your vehicle in the first place! ",
          ],
        },
        {
          heading: "Factors That Can Affect The Cost Of Auto Transport",
          texts: [
            `We all want cheap car transport, but there are a number of factors and variables that can affect how much your car shipping will cost. Below we will lay out the main ones so that you can get a rough idea of whether your auto transport requirements will be expensive or cheap.`,
            `As mentioned above, distance is one of the factors that will play a big part in how much your car transport will cost, with cross-state and cross-country journeys costing a lot more than an interstate car delivery which is often the cheapest car shipping.`,
            `Whilst longer distances do cost more, thankfully the average price per mile does drop the longer the journey is, meaning that you aren’t paying over the odds. `,
            `International shipping will always result in expensive car shipping quotes due to the logistics of transferring a car overseas and the distance it will need to travel. It can also require special enclosed trailers or even a shipping container for your vehicle.`,
            `Route - Along with distance, the route needed to take your car from its pick-up spot to its delivery spot can affect the pricing of your car carrier service. Routes with known higher traffic, in LA, for example, may end up costing more than quieter roads due to the time this can add to a journey. Likewise, unforeseen circumstances such as major roadworks could also incur extra costs from the car moving companies, or mean that a different route is required that may take longer.`,
            "Shipping Dates - How fast you need your car transportation service to operate can also affect the price. For example, if you are able to be flexible around timings then you may find that your car shipping service charges a lot less, this is because they are able to fit your vehicle delivery into their schedule and reduce overheads for themselves, passing the savings on to you. However, if you require auto transport in a strict timeframe (often known as expedited shipping) then this will typically end up costing you more due to the car transport company likely having to dedicate a trailer and driver just for your delivery.``Vehicle Size - The height, length, and width of the vehicle will all affect how much it will cost to transport your vehicle. Car shippers will require larger trailers for bigger vehicles, with SUVs typically costing more on average to transport than a Sudan. Further, you should always make sure to let the auto transport company know about any bike racks, roof racks, or other accessories on the car as these can also change the size of the trailer required for the delivery",
          ],
        },
      ],
      // service_opinion : [],
      // service_opinion: [
      //   {
      //     text: "Intermodal Shipping",
      //     description:
      //       "Lorem ipsum dolor sit amet consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      //   },
      //   {
      //     text: "Intermodal Shipping",
      //     description:
      //       "Lorem ipsum dolor sit amet consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      //   },
      //   {
      //     text: "Intermodal Shipping",
      //     description:
      //       "Lorem ipsum dolor sit amet consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      //   },
      //   {
      //     text: "Intermodal Shipping",
      //     description:
      //       "Lorem ipsum dolor sit amet consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et.",
      //   },
      // ],
      // faq: [
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      // ],
    },
  },

  {
    id: "nationwide-hauiling",
    bgImg: Bg3,
    icon: Icon3,
    heading: "Nationwide hauiling",
    description:
      "RS Logistics  offers trustworthy road car transport services in teamwork with our strong companion driver’s network in the USA. Our scheduled groupage pick up and drop off distribution network is widespread. All transports are accomplished according to contracts made with our customers.",
    btnText: "Learn More",
    details: {
      images: [NationwideHauilingImage1, NationwideHauilingImage2],
      content: [
        {
          heading: "Comprehensive Nationwide Transportation Services",
          texts: [
            "Our logistics company specializes in nationwide transportation services across the United States, catering to both automotive and general cargo needs. Whether you're shipping vehicles or goods, we offer efficient and reliable solutions to meet your transportation requirements.",
          ],
        },
        {
          heading: "Types of Transportation Services Offered",
          texts: [
            "We provide a variety of transportation services tailored to diverse shipping needs:",
            "Automobile Transport: Dedicated services for transporting cars, trucks, and other vehicles safely and securely across the country.",
            "General Cargo Transport: Handling a wide range of goods from small packages to large shipments, ensuring timely delivery to destinations nationwide.",
            "Specialized Transport Solutions: Customized logistics solutions for oversized or delicate cargo, ensuring safe and efficient transport from origin to destination.",
            "Expedited Delivery Options: Flexible shipping schedules and expedited services available to meet urgent delivery timelines.",
          ],
        },
        {
          heading: "Factors Influencing Transportation Costs",
          texts: [
            "Several factors impact the cost of our transportation services:",
            "Distance: Longer distances may incur higher transportation costs due to fuel and operational expenses.",
            "Cargo Specifications: Size, weight, and special handling requirements can affect pricing.",
            "Seasonal Variations: Pricing adjustments may occur based on seasonal demand fluctuations.",
            "Route Efficiency: Optimal route planning to minimize costs and ensure timely deliveries.",
            "Customer-Specific Needs: Tailored solutions to meet unique customer requirements and budget constraints.",
          ],
        },
        {
          heading: "Benefits of Nationwide Transportation",
          texts: [
            "Choosing our nationwide transportation services offers several advantages:",
            "Reliability: Dependable delivery solutions with a focus on customer satisfaction.",
            "Flexibility: Customizable services to accommodate varying shipment sizes and delivery timelines.",
            "Safety and Security: Comprehensive measures to safeguard vehicles and cargo throughout the transportation process.",
            "Efficiency: Streamlined logistics processes to ensure timely and cost-effective deliveries across the country.",
            "Customer Support: Dedicated support team available to assist with inquiries and logistics coordination.",
          ],
        },
        {
          heading: "Conclusion",
          texts: [
            "Our nationwide transportation services are designed to exceed customer expectations, providing seamless logistics solutions for automotive and general cargo shipments across the United States. With a commitment to reliability, efficiency, and customer satisfaction, we are your trusted partner for all your transportation needs.",
          ],
        },
      ],
      // service_opinion: processItemData.map((item) => ({
      //   text: item.heading,
      //   description: "",
      //   id: item.id,
      // })),
      // faq: [
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      //   {
      //     heading: "100% Satisfaction Guarantee.",
      //     text:
      //       "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus dolor at libero ultricies ullamcorper vel ut dui. Maecenas sollicitudin risus non faucibus blandit. Nulla facilisi.",
      //   },
      // ],
    },
  },
];
