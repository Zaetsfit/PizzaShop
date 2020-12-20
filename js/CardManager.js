import {product_item} from './templates.js'
import {count_order} from './helperFunction.js'
let shopping_cart = [];

export class CardItem {
    constructor({id, title, components, weight, price, prodURL, path}, cardsItems) {
        this.id = id;
        this.title = title;
        this.components = components;
        this.weight = weight;
        this.price = price;
        this.prodURL = prodURL;
        this.path = path;

        this.el = null;
        this.cardsItems = cardsItems;
    }

    getElement() {
        const tpl = this.getTemplate();
        const tmpDiv = document.createElement('div');
        tmpDiv.innerHTML = tpl;

        this.el = tmpDiv.children[0];
        this.addToCart()
        return this.el;
    }

    getTemplate() {
        return product_item(this.id ,this.path, this.weight, this.prodURL + '=' + this.id, this.title, this.price, window.location.href.split('#')[1])
    }

    addToCart(){;
        let carts = this.el.querySelector('.to-cart-btn');
        let shop_cart_id = [];
        if (JSON.parse(localStorage.getItem('cart')) != null){
            shopping_cart = JSON.parse(localStorage.getItem('cart'))
            shopping_cart.forEach(el => {
                shop_cart_id.push(el.id)
            })
        }
        carts.onclick = (event) =>{
            var buttonCliked = event.target;
            var elem_id = buttonCliked.parentElement.parentElement.parentElement.parentElement.id;
            if (shop_cart_id.includes(elem_id)){
                shopping_cart.forEach(elem => {
                    if (elem.id == elem_id){
                        elem.amount += 1;
                    }
                })
            }
            else{
                shopping_cart.push({'id': elem_id,
                                    'amount': 1})
            }
            shop_cart_id.push(elem_id)
            document.getElementById('order_counter').innerHTML = count_order(shopping_cart)
            localStorage.setItem('cart', JSON.stringify(shopping_cart))
        }
    }
}


export class CardManager {
    constructor({el, products}){
        this.el = el;
        this.prods = products.map(prod => new CardItem(prod, this));
        this.renderProds();
    }

    renderProds(){
        this.el.innerHTML = '';
        this.prods.forEach(prod => {
            this.renderProd(prod.getElement());
        });
    }

    renderProd(prodEl){
        this.el.appendChild(prodEl);
    }
}