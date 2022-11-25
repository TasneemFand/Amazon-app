export type category = {
  name: string;
  href: string;
  title: string;
  items?: Array<{ name: string; href: string; title: string }>;
};

export type item = {
  discount: boolean;
  name: string;
  img: string;
  price: string;
  discountPrice: string;
  reviews: number;
  title: string;
  category: string;
};
