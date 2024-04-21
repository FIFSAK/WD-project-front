import {CartClothesModel} from "./CartClothesModel";

export interface CartItemModel {
  id: number;
  clothes: CartClothesModel;
  size: string;
  quantity: number;
  user: number;
}
