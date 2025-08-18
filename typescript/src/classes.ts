// interface IHttpError {
//     status: number;
// }

// class ValidationError implements IHttpError {
//     message: string;
//     status;

//     constructor(message: string, status: number) {
//         this.message = message;
//         this.status = status;
//     }
// }

interface ProductProps {
  name: string;
  description: string;
  price: number;
}

export default class Product {
  public name: string;
  public description: string;
  private _price: number;
  protected _stock: boolean = false;

  constructor({ name, description, price }: ProductProps) {
    this.name = name;
    this.description = description;
    this._price = price;
  }

  get price(): number {
    return this._price;
  }

  set price(value: number) {
    if (
      typeof value !== "number" ||
      Number.isNaN(value) ||
      !Number.isFinite(value) ||
      value < 0.01
    ) {
      throw new Error("price must be number greater 0");
    }
    this._price = value;
  }

  calcDelivery(distance: number): number {
    return distance * 0.1;
  }
}

interface NotebookSize {
    width: number;
    height: number;
    depth: number;
}

interface NotebookProps extends ProductProps {
    size: NotebookSize;
}

class Notebook extends Product {
    public size: NotebookSize;

  constructor({ name, description, price, size }: NotebookProps) {
    super({name, description, price});
    this.size = size;
  }

   override calcDelivery(distance: number): number {
      return super.calcDelivery(distance) + this.price * 0.01;
  }
}

const newProduct = new Notebook({
    name: "Lenovo X120S",
    description: "Best notebook for treveling",
    price: 1000,
    size: {
        width: 50,
        height: 30,
        depth: 2
    }
});
console.log(newProduct.calcDelivery(100))
// newProduct._price = 1200;
// newProduct._stock = true;
