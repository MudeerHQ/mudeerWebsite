import { StaticImageData } from "next/image";

export interface PageHeaderProps {
  title: string;
  description: string;
}

export interface PackageCardProps {
  title: string;
  price: string;
  description: string;
  headFeature: string;
  features: string[];
  bgImage: string;
  isSecond: boolean;
}

export interface BlogCardProps {
  img: StaticImageData;
  title: string;
  description: string;
}
