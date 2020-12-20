import {home_page, catalog_temp, action_view, item_page, empty_cart_temp, cart_temp ,form_temp, show_error, cheque} from './templates.js'
import {Get} from './request.js'
import {CardManager} from './CardManager.js'
import {action1, action2, action3, action4} from './actions.js'
import {getProduct, count_order} from './helperFunction.js'
import { ShopCartItemManager } from './ShopCartManager.js'

export const products = JSON.parse(Get('https://my-json-server.typicode.com/Zaetsfit/PizzaShop/products'));
const categories = JSON.parse(Get('https://my-json-server.typicode.com/Zaetsfit/PizzaShop/categories'));

const recommendation = getProduct(products, categories['recommendation']);
const classic = getProduct(products, categories['classic']);
const premium = getProduct(products, categories['premium']);
const legend = getProduct(products, categories['legend']);
const custom = getProduct(products, categories['custom']);

let orders = JSON.parse(localStorage.getItem('cart'))
if (orders == null) {
    orders = []
}
document.querySelector('#order_counter').innerHTML = count_order(orders)

window.onload = () => {
    window.location.hash = '/';
    let pageCont = document.querySelector('.main-container');
    pageCont.innerHTML = home_page(action1.path, action2.path, action3.path, action4.path);
    const recommended = new CardManager({
        el: document.querySelector('.product-list'),
        products: recommendation,
    })
}
window.onhashchange = () => {
    Router(window.location.hash.split('#')[1])
}

function Router(hash) {
    let pageCont = document.querySelector('.main-container');
        if (hash == '/catalog') {
            pageCont.innerHTML = catalog_temp;
            const classic_pizza = new CardManager({
                el: document.querySelector('.classic .product-list'),
                products: classic,
            });
            const premium_pizza = new CardManager({
                el: document.querySelector('.premium .product-list'),
                products: premium,
            });
            const legend_pizza = new CardManager({
                el: document.querySelector('.legend .product-list'),
                products: legend,
            });
            const custom_pizza = new CardManager({
                el: document.querySelector('.custom .product-list'),
                products: custom,
            });
        }
        else if(hash == '/actions'){
            pageCont.innerHTML = action_view(action1.path, action2.path, action3.path, action4.path, action1.title, action2.title, action3.title, action4.title, action1.description, action2.description, action3.description, action4.description)
        }
        else if (Number.isInteger(Number(hash.split('=')[1]))){
            let indexes = [];
            var orders = JSON.parse(localStorage.getItem('cart'))
            let selected_el = Number(hash.split('=')[1]);
            let item = products[selected_el];
            pageCont.innerHTML = item_page(item.title, item.path, item.desc, item.price, window.location.href.split('#')[1])
            orders.forEach(el => {
                indexes.push(el.id)
            });
            selected_el = selected_el.toString()
            console.log(indexes)
            const add_btn = document.querySelector('.to-cart-btn');
            add_btn.onclick = () => {
                if (indexes.includes(selected_el)) {
                    orders.forEach(el => {
                        if (el.id == selected_el) {
                            el.amount += 1;
                        }
                    })
                }
                else {
                    orders.push({'id': selected_el, 
                                'amount': 1})
                    indexes.push(selected_el)
                }
                document.getElementById('order_counter').innerHTML = count_order(orders)
                localStorage.setItem('cart', JSON.stringify(orders))
            }
        }
        else if (hash == '/cart') {
            var orders = JSON.parse(localStorage.getItem('cart'))
            if (orders == null) {
                pageCont.innerHTML = empty_cart_temp;
            }
            else if (orders.length == 0){
                pageCont.innerHTML = empty_cart_temp;
            }
            else{
                pageCont.innerHTML = cart_temp;
                let total_price_number = 0;
                let total_price = document.querySelector('.price #total_price');
                let shop_cart_prod = [];
                orders.forEach(el => {
                    shop_cart_prod.push({'id':products[Number(el.id)].id,
                                        'title':products[Number(el.id)].title,
                                        'path': products[Number(el.id)].path,
                                        'desc':products[Number(el.id)].desc,
                                        'price':Number(Number(products[Number(el.id)].price)*Number(el.amount)).toFixed(2),
                                        'amount': el.amount})
                })
                shop_cart_prod.forEach(el => {
                    total_price_number += Number(el.price);
                })
                console.log(total_price_number)
                console.log(shop_cart_prod)
                total_price.innerHTML = total_price_number.toFixed(2)
                const cart = new ShopCartItemManager({
                    el: document.querySelector('.orders_inner'),
                    products: shop_cart_prod
                })
            }
        }
        else if(hash == '/order') {
            let order_products = '';
            let total_price = null;
            JSON.parse(localStorage.getItem('cart')).forEach(el => {
                order_products += `${products[Number(el.id)].title} : ${el.amount}; `;
                total_price += Number(Number(products[Number(el.id)].price) * Number(el.amount))
            });
            pageCont.innerHTML = form_temp;
            let checkout_form = document.querySelector('.checkout_form');
            console.log(checkout_form);
            console.log(order_products);
            console.log(total_price)
            checkout_form.addEventListener('submit', function(event){
                

                event.preventDefault()
                let Name = document.querySelector('#Name').value;
                let Surname = document.querySelector('#Surname').value;
                let City = document.querySelector('#City').value;
                let DateDelivery = document.querySelector('#DateDelivery').value;
                let Email = document.querySelector('#Email').value;
                let Phone = document.querySelector('#Phone').value;
                let Address = document.querySelector('#Address').value;
                let Payment = document.querySelector('#Payment').value;

                let create_order = {
                    "Name": Name,
                    "Surname": Surname,
                    "City": City,
                    "DateDelivery": DateDelivery.replace('T', ' '),
                    "Email": Email,
                    "Phone": Phone,
                    "Address": Address,
                    "Payment": Payment,
                    "Products": order_products,
                    "Total price": total_price.toFixed(2)
                }
                fetch('https://my-json-server.typicode.com/Zaetsfit/PizzaShop/orders', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(create_order),
                })
                .then(response => response.json())
                .then(data => {
                    let orderId = data['id'];
                    history.pushState({}, null, '#order/' + orderId.toString())
                    pageCont.innerHTML = cheque(create_order.Name, create_order.Surname, create_order.City, create_order.DateDelivery, create_order.Email, create_order.Phone, create_order.Address, create_order.Payment ,create_order.Products, create_order['Total price']);
                    localStorage.setItem('cart', JSON.stringify([]));
                })
                .catch((error) => {
                    pageCont.innerHTML = show_error;
                });
                
            })
        }
        else {
            let orders = JSON.parse(localStorage.getItem('cart'))
            document.getElementById('order_counter').innerHTML = count_order(orders)
            pageCont.innerHTML = home_page(action1.path, action2.path, action3.path, action4.path);
            const recommended = new CardManager({
                el: document.querySelector('.product-list'),
                products: recommendation,
            });
            window.location.hash = '#/'
        }
}