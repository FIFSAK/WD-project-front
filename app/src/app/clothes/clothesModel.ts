
//         {
//             "id": 2,
//             "type_category": "t-shirt",
//             "sizes": [
//                 {
//                     "size": "s",
//                     "quantity": 1
//                 },
//                 {
//                     "size": "m",
//                     "quantity": 2
//                 }
//             ],
//             "images": [
//                 {
//                     "image": "https://mixbucket.s3.amazonaws.com/images/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_eCa1u0V.jfif?AWSAccessKeyId=AKIAZCQKG3MXRBLXVP4K&Signature=KTDyFu5T%2Bpz62DJhsZjRomIVqEg%3D&Expires=1713636703"
//                 },
//                 {
//                     "image": "https://mixbucket.s3.amazonaws.com/images/%D0%91%D0%B5%D0%B7_%D0%BD%D0%B0%D0%B7%D0%B2%D0%B0%D0%BD%D0%B8%D1%8F_b1wiif8.png?AWSAccessKeyId=AKIAZCQKG3MXRBLXVP4K&Signature=GtPltMGNHwcU4Ycy5n%2FN0zaElJg%3D&Expires=1713636703"
//                 }
//             ],
//             "name": "cool footbolka",
//             "vendor_code": 251372,
//             "price": 12000
//         }

export interface Image {
  image: string;
}

export interface Size {
  size: string;
  quantity: number;
}

export interface ClothesModel {
  id: number;
  category: string;
  sizes: Size[];
  images: Image[];
  name: string;
  vendor_code: number;
  price: number;
  image_index: number;
  chosenSize: string;
}
