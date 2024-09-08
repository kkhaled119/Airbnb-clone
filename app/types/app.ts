export type ExploreItem = {
  img: string;
  location: string;
  distance: string;
};

export type LiveItem = {
  img: string;
  title: string;
};

export type GreatesItems = {
  img: string;
  desc: string;
  title: string;
  linkText: string;
};

export type listingCardItem = {
  img: string;
  location: string;
  title: string;
  description: string;
  star: number;
  price: string;
  total: string;
  long: number;
  lat: number;
};
export type ExploreData = ExploreItem[];
export type LiveData = LiveItem[];
export type GreatesData = GreatesItems[];
export type searchResultData = listingCardItem[];
