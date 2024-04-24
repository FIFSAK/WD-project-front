interface Size {
  size: string;
  quantity: number;
}

interface Image {
  image: string;
}

export interface CartClothesModel {
  id: number;
  images: Image[];
  name: string;
  vendor_code: number;
  price: number;
  category: string;
  sizes: Size[];
}

export interface CartItemModel {
  id: number;
  clothes: CartClothesModel;
  size: string;
  quantity: number;
  user: number;
  image_index: number;
}
