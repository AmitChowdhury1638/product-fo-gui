import { Product } from 'src/app/models/product'


export class CartItem {
    id: number;
    productId: number;
    productName: string;
    qty: number;
    price: number;
    discount: number;
   
    constructor(id: number, product: Product, qty = 1, discount: number) {
      this.id = id;
      this.productId = product.id;
      this.productName = product.name;
      this.price = product.price;
      this.qty = qty;
      this.discount= discount;
    }
  }