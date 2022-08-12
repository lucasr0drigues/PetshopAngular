import { CartItem } from '../models/cart-item.model';
import { Cart } from '../models/cart.model';

export class CartUtil {
  public static get(): Cart {
    // Recupera os dados do local storage
    const data = localStorage.getItem('petshopcart');

    //caso não haja dados, retorna um novo carrinho
    if (!data) return new Cart();

    //caso haja dados, retorna o carrinho
    return JSON.parse(data);
  }

  public static add(
    id: string,
    product: string,
    quantity: number,
    price: number,
    image: string
  ) {
    // obtem o carrinho
    let cart = this.get();

    //gera o novo item
    const item = new CartItem(id, product, quantity, price, image);

    //adiciona ao carrinho
    cart.items.push(item);

    //salva no local storage
    localStorage.setItem('petshopcart', JSON.stringify(cart));
  }

  public static update(cart: Cart) {
    //salva no local storage
    localStorage.setItem('petshopcart', JSON.stringify(cart));
  }

  public static clear() {
    localStorage.removeItem('petshopcart');
  }
}
