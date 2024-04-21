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
