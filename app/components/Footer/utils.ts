import { DevicePhoneMobileIcon, EnvelopeIcon, MapIcon } from "@heroicons/react/20/solid";
import { footer } from "../../../public/components/data/index.json";

const { address, email, phone } = footer;

export interface FooterDataType {
  Icon: any;
  heading: string;
  value: string;
}

export const footerData = [
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
