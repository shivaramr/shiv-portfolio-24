import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";
import data from "../../../public/components/data/index.json";

const { footerData } = data;
const { address, email, phone } = footerData;

export interface FooterDataType {
  Icon: any;
  heading: string;
  value: string;
}

export const footerObjects = [
  {
    Icon: MapIcon,
    heading: "Address",
    value: address,
  },
  {
    Icon: DevicePhoneMobileIcon,
    heading: "Phone",
    value: phone,
  },
  {
    Icon: EnvelopeIcon,
    heading: "Send An Email",
    value: email,
  },
];
