export interface branchSearch {
  _id: string;
  name: string;
  thumbnail: string;
  description: string;
  address: Address;
}

export interface Address {
  _id: string;
  address: string;
  lat: number;
  lng: number;
  phone: string;
  description: string;
  open: boolean;
}
