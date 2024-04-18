interface Size {
  size: string;
  quantity: number;
}

export interface CartClothesModel {
  id: number;
  image: string;
  name: string;
  vendor_code: number;
  price: number;
  category: string;
  sizes: Size[];
}
