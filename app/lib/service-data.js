import { IoIosLaptop } from "react-icons/io";
import { FaMobileAlt } from "react-icons/fa";
import { SiSimpleanalytics } from "react-icons/si";

export const services = [
  {
    id: 1,
    icon: <IoIosLaptop size={50} className="text-orange" />,
    title: "Web Development",
    description:
      "Crafting responsive and visually stunning websites tailored to your brand's unique identity.",
  },
  {
    id: 2,
    icon: <FaMobileAlt size={50} className="text-orange" />,
    title: "WordPress Development",
    description:
      "Building and empowering your online presence with professional WordPress development services.",
  },
  {
    id: 3,
    icon: <SiSimpleanalytics size={50} className="text-orange" />,
    title: "SEO",
    description:
      "Optimizing your online presence to boost visibility and drive targeted traffic to your website.",
  },
];
