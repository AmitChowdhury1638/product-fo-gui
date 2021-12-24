export class Image {

    id: number;
    path: string;
    product_id!: number;

    constructor(id=0, path='https://apurva09.s3.ap-south-1.amazonaws.com/angthi/8.jpg',product_id: number) {
        this.id = id
        this.path=path
        this.product_id=product_id
      }
}
