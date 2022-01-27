export class Product {
    [x: string]: any;
    id: number;
    name: string;
    description: string;
    price: number;
    imagePath: string;
    static id: number;
   
    constructor(id=0, name='', description = '', price = 1, imagePath = '../assets/angthi/2.jpg') {
      this.id = id
      this.name = name
      this.description = description
      this.price = price
      this.imagePath = imagePath
    }
  }