/* eslint-disable @typescript-eslint/no-explicit-any */

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
  img: any;
  title: string;
  description: string;
}
