import {cart_item, empty_cart_temp, form_temp} from './templates.js'
import {count_order} from './helperFunction.js'
import {products} from './app.js'

class ShopCartItem {
    constructor({id, title, path, desc, price, amount}, ShopItemManager) {
        this.id = id;
        this.title = title;
        this.path = path;
        this.desc = desc;
        this.price = price;
        this.amount = amount;

        this.el = null;
        this.ShopItemManager = ShopItemManager;
    }

    getElement(){
        const temp = this.getTemplate();
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = temp;
        this.el = tempDiv.children[0];
        this.itemActions()
        return this.el
    }

    getTemplate(){
        return cart_item(this.id, this.title, this.path, this.desc, this.price, this.amount,window.location.hash.split('#')[1])
    }

    itemActions(){
        const plus_btn = this.el.querySelector('.fa-plus');
        plus_btn.onclick = (event) => {
            let current_orders = JSON.parse(localStorage.getItem('cart'));
            let buttonCliked = event.target;
            let elem_id = buttonCliked.parentElement.parentElement.parentElement.parentElement.id;
            let amount_counter = this.el.querySelector('.all_amount');
            let current_price = this.el.querySelector('#prod_price');
            let prices = document.querySelectorAll('#prod_price')
            var total_price = document.querySelector('.price #total_price');
            var total_price_number = 0;
            current_orders.forEach(el => {
                if (el.id == elem_id) {
                    let current_price_value = products[el.id].price;
                    el.amount += 1;
                    amount_counter.innerHTML = el.amount;
                    current_price.innerHTML = Number(Number(current_price_value)* el.amount).toFixed(2)
                    for(let i = 0; i < prices.length; i++){
                        total_price_number += Number(prices[i].innerHTML)
                    }
                    total_price.innerHTML = total_price_number.toFixed(2)
                }
            })
            localStorage.setItem('cart',JSON.stringify(current_orders))
            document.getElementById('order_counter').innerHTML = count_order(current_orders)
        };

        const minus_btn = this.el.querySelector('.fa-minus');
        minus_btn.onclick = (event) => {
            let current_orders = JSON.parse(localStorage.getItem('cart'));
            let buttonCliked = event.target;
            let elem_id = buttonCliked.parentElement.parentElement.parentElement.parentElement.id;
            let amount_counter = this.el.querySelector('.all_amount');
            let current_price = this.el.querySelector('#prod_price');
            let prices = document.querySelectorAll('#prod_price')
            var total_price = document.querySelector('.price #total_price');
            var total_price_number = 0;
            current_orders.forEach(el => {
                if (el.id == elem_id) {
                    let current_price_value = products[el.id].price;
                    if(el.amount > 0){
                        el.amount -= 1;
                        amount_counter.innerHTML = el.amount;
                        current_price.innerHTML = Number(Number(current_price_value)* el.amount).toFixed(2);
                        for(let i = 0; i < prices.length; i++){
                            total_price_number += Number(prices[i].innerHTML)
                        }
                        total_price.innerHTML = total_price_number.toFixed(2)
                    }
                }
            })
            localStorage.setItem('cart',JSON.stringify(current_orders))
            document.getElementById('order_counter').innerHTML = count_order(current_orders)
        };

        const remove_btn = this.el.querySelector('.remove-btn');
        remove_btn.onclick = (event) => {
            let current_orders = JSON.parse(localStorage.getItem('cart'));
            let new_orders = [];
            let buttonCliked = event.target;
            let element = buttonCliked.parentElement.parentElement.parentElement.parentElement;
            let element_id = element.id;
            var total_price = document.querySelector('.price #total_price');
            var total_price_number = 0;
            for (let i = 0; i < current_orders.length; i++){
                if (current_orders[i].id == element_id) {
                    element.innerHTML = '';
                }
                else {
                    new_orders.push(current_orders[i])
                }         
            }
            let prices = document.querySelectorAll('#prod_price')
                for(let i = 0; i < prices.length; i++){
                    total_price_number += Number(prices[i].innerHTML)
                }
            total_price.innerHTML = total_price_number.toFixed(2)   
            if (new_orders.length == 0) {
                let pageCont = document.querySelector('.main-container');
                pageCont.innerHTML = empty_cart_temp;
            }    
            localStorage.setItem('cart',JSON.stringify(new_orders))
            document.getElementById('order_counter').innerHTML = count_order(new_orders)
        };
    };

}


export class ShopCartItemManager {
    constructor({el, products}){
        this.el = el;
        this.prods = products.map(prod => new ShopCartItem(prod, this));
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