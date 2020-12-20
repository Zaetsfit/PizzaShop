let home_page_temp = `<div class="action-text text">
                            <p>Акции</p>
                        </div>
                        <div class="slider_container">
                            <div class="slider">
                                <div class="slides">
                                    <input type="radio" name="radio-btn" id="radio1">
                                    <input type="radio" name="radio-btn" id="radio2">
                                    <input type="radio" name="radio-btn" id="radio3">
                                    <input type="radio" name="radio-btn" id="radio4">

                                    <div class="slide first">
                                        <img src="{{slide1}}" alt="">
                                    </div>
                                    <div class="slide">
                                        <img src="{{slide2}}" alt="">
                                    </div>
                                    <div class="slide">
                                        <img src="{{slide3}}" alt="">
                                    </div>
                                    <div class="slide">
                                        <img src="{{slide4}}" alt="">
                                    </div>

                                    <div class="navigation-auto">
                                        <div class="auto-btn1"></div>
                                        <div class="auto-btn2"></div>
                                        <div class="auto-btn3"></div>
                                        <div class="auto-btn4"></div>
                                    </div>

                                </div>
                                <div class="navigation-manual">
                                    <label for="radio1" class="manual-btn"></label>
                                    <label for="radio2" class="manual-btn"></label>
                                    <label for="radio3" class="manual-btn"></label>
                                    <label for="radio4" class="manual-btn"></label>
                                </div>
                            </div>
                        </div>
                        <div class="recomnendation">
                            <div class="recomendation-text text">
                                <p>Рекомендуемые товары</p>
                            </div>
                            <div class="product-list"></div>
                        </div>`

export function home_page(slide1, slide2, slide3, slide4) {
    return home_page_temp.replace("{{slide1}}", slide1).replace("{{slide2}}", slide2).replace("{{slide3}}", slide3).replace("{{slide4}}", slide4)
};

let product_item_temp = `<div id="{{id}}" class="product-list__item">
                                <div class="product-block">
                                    <div class="product-block__image">
                                        <div class="product-image">
                                            <img src="{{path}}" alt="">
                                        </div>
                                        <div class="product-block__weight">{{weight}}</div>
                                    </div>
                                    <div class="product-block__description">
                                        <div class="product-block__title-row">
                                            <a href="#{{prodURL}}" class="product-block__title-text">{{title}}</a>
                                        </div>
                                        <div class="product-block__toppings-row">
                                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
                                        </div>
                                            
                                        <div class="product-block__price-row">
                                            <div class="product-block__price-block">
                                                <span class="product-block__price">{{price}}</span>
                                                <span class="product-block__currency">грн.</span>
                                            </div>
                                            <a href="#{{href}}" class="to-cart-btn">В корзину</a>
                                        </div>
                                    </div>
                                </div>
                            </div>`

export function product_item(id, path, weight, prodURL, title, price, href_) {
    return product_item_temp.replace("{{id}}", id).replace("{{path}}", path).replace("{{weight}}", weight).replace("{{prodURL}}", prodURL).replace("{{title}}", title).replace("{{price}}", price).replace("{{href}}", href_);
};

export const catalog_temp = `<div class="catalog classic">
                            <div class="recomendation-text text">
                                <p>Классическая пицца</p>
                            </div>
                            <div class="product-list"></div>
                        </div>
                        <div class="catalog premium">
                            <div class="recomendation-text text">
                                <p>Премиальная пицца</p>
                            </div>
                            <div class="product-list"></div>
                        </div>
                        <div class="catalog legend">
                            <div class="recomendation-text text">
                                <p>Легендарная пицца</p>
                            </div>
                            <div class="product-list"></div>
                        </div>
                        <div class="catalog custom">
                            <div class="recomendation-text text">
                                <p>Пицца на заказ</p>
                            </div>
                            <div class="product-list"></div>
                        </div>`

export const form_temp =`<div class="checkout">
                            <div class="wrapper">
                                <div class="title">
                                    Доставка
                                </div>
                                <div class="form">
                                    <form class="checkout_form">
                                        <div class="inputfield">
                                                <label>Имя</label>
                                                <input id="Name" type="text" class="input" pattern="^[А-Яа-яЁё\s]+$|^[A-Za-z]+$" required>
                                        </div>  
                                            <div class="inputfield">
                                                <label>Фамилия</label>
                                                <input id="Surname" type="text" class="input" pattern="^[А-Яа-яЁё\s]+$|^[A-Za-z]+$" required>
                                        </div>  
                                        <div class="inputfield">
                                                <label>Город</label>
                                                <input id="City" type="text" class="input" pattern="^[А-Яа-яЁё\s]+$|^[A-Za-z]+$" required>
                                        </div>  
                                            <div class="inputfield">
                                                <label>Дата/Время доставки</label>
                                                <div class="custom_select">
                                                    <input id="DateDelivery" class="form-input" type="datetime-local" id="DeliveryTime" name="DeliveryTime" min="2020-12-18T00:00" max="2020-12-31T23:59" required>
                                                </div>
                                        </div> 
                                            <div class="inputfield">
                                                <label>Электронная почта</label>
                                                <input id="Email" type="email" class="input" required>
                                        </div> 
                                            <div class="inputfield">
                                                <label>Номер телефона</label>
                                                <input id="Phone" type="text" class="input" pattern="[0-9]{3}[0-9]{3}[0-9]{2}[0-9]{2}" placeholder="0991111111" required>
                                        </div>
                                        <div class="inputfield">
                                                <label>Способ оплаты</label>
                                                <input id="Payment" type="text" class="input" pattern="Наличные|Карта" placeholder="Наличные/карта" required>
                                        </div>  
                                        <div class="inputfield">
                                                <label>Адрес</label>
                                                <textarea id="Address" class="textarea" placeholder="ул.Южная3,кв.123" required></textarea>
                                        </div> 
                                        <div class="inputfield terms">
                                            <label class="check">
                                                <input type="checkbox" required>
                                                <span class="checkmark"></span>
                                            </label>
                                            <p>Я согласен с условиями обработки моих личных данных</p>
                                        </div> 
                                        <div class="inputfield">
                                            <button type="submit" class="btn">Подтвердить</button>
                                        </div>
                                    </form>
                                </div>
                            </div>	
                        </div>`


let actions_temp = `<div class="action_container">
                        <div class="action_text text">
                            <p>Акции</p>
                        </div>
                        <div class="card">
                            <div class="imgBx">
                                <img src="{{action1}}" alt="">
                            </div>
                            <div class="content">
                                <h2>{{title1}}</h2>
                                <p>{{desc1}}</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="imgBx">
                                <img src="{{action2}}" alt="">
                            </div>
                            <div class="content">
                                <h2>{{title2}}</h2>
                                <p>{{desc2}}</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="imgBx">
                                <img src="{{action3}}" alt="">
                            </div>
                            <div class="content">
                                <h2>{{title3}}</h2>
                                <p>{{desc3}}</p>
                            </div>
                        </div>
                        <div class="card">
                            <div class="imgBx">
                                <img src="{{action4}}" alt="">
                            </div>
                            <div class="content">
                                <h2>{{title4}}</h2>
                                <p>{{desc4}}</p>
                            </div>
                        </div>
                    </div>`

export function action_view(action1, action2 ,action3, action4, title1, title2, title3, title4, desc1, desc2, desc3, desc4) {
    let new_temp = actions_temp.replace('{{action1}}', action1).replace('{{action2}}', action2).replace('{{action3}}', action3).replace('{{action4}}', action4);
    new_temp = new_temp.replace('{{title1}}', title1).replace('{{title2}}', title2).replace('{{title3}}', title3).replace('{{title4}}', title4);
    new_temp = new_temp.replace('{{desc1}}', desc1).replace('{{desc2}}', desc2).replace('{{desc3}}', desc3).replace('{{desc4}}', desc4);
    return new_temp
}

let item_page_temp = `<div class="product_details_container">
                        <div class="product_details">
                            <div class="product-text text">
                                <p>{{title}}</p>
                            </div>
                            <div class="content_container">
                                <div class="content_details">
                                    <div class="imgBox">
                                        <img src="{{path}}" alt="">
                                    </div>
                                    <div class="components_box">
                                        <div class="composition text">Состав</div>
                                        <div class="pizza_composition">
                                            <p>{{desc}}</p>
                                        </div>
                                    </div>
                                    <div class="product-block__price-row">
                                        <div class="product-block__price-block">
                                            <span class="product-block__price">{{price}}</span>
                                            <span class="product-block__currency">грн.</span>
                                        </div>
                                        <a href="#{{href}}" class="to-cart-btn">В корзину</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`

export function item_page(title, path, desc, price, href_) {
    return item_page_temp.replace('{{title}}', title).replace('{{path}}', path).replace('{{desc}}', desc).replace('{{price}}', price).replace('{{href}}', href_)
}

export const empty_cart_temp = `<div class="empty_card">
                                    <div class="message">
                                        <p>Ваша корзина пуста!</p>
                                    </div>
                                </div>`

export const show_error = `<div class="empty_card">
                                <div class="message">
                                    <p>Упс, что-то прошло не так!</p>
                                </div>
                            </div>`

export const cart_temp = `<div class="shopping_cart">
                            <div class="cart_text text">
                                <p>Ваш заказ</p>
                            </div>
                            <div class="cart_conteiner">
                                <div class="order_container">
                                    <div class="orders_inner">
                                    </div>
                                </div>
                            </div>
                            <div class="total_price">
                                <div class="price">Общая стоимость: <span id="total_price"></span></div>
                            </div>
                            <div class="submit_btn">
                                <a class="submit-order-btn" href="#/order">Подтвердить</a>
                            </div>
                        </div>`

export let cart_item_temp = `<div id={{id}} class="orders_inner_item">
                                    <div class="content_container">
                                        <div class="product-text text">
                                            {{title}}
                                        </div>
                                        <div class="content_details">
                                            <div class="imgBox">
                                                <img src="{{path}}" alt="">
                                            </div>
                                            <div class="components_box">
                                                <div class="composition text">Состав</div>
                                                <div class="pizza_composition">
                                                    <p>{{desc}}</p>
                                                </div>
                                            </div>
                                            <div class="amount-selector">
                                                <i class="fas fa-minus"></i>
                                                <span class="all_amount">{{amount}}</span>
                                                <i class="fas fa-plus"></i>
                                            </div>
                                            <div class="product-block__price-row">
                                                <div class="product-block__price-block">
                                                    <span id="prod_price" class="product-block__price">{{price}}</span>
                                                    <span class="product-block__currency">грн.</span>
                                                </div>
                                                <a href="#{{href}}" class="remove-btn">Удалить</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>`

export function cart_item(id, title, path, desc, price, amount,href_){
    return cart_item_temp.replace('{{id}}', id).replace('{{title}}', title).replace('{{path}}', path).replace('{{desc}}', desc).replace('{{price}}', price).replace('{{amount}}', amount).replace('{{href}}', href_)
}
let cheque_temp = `
            <div class="order_cheque">
                <div class="order-text text">
                    <p>Ваш заказ подтверждён!</p>
                </div>
                <div class="cheque">
                    <div class="block name">
                        <p>Имя: <span>{{name}}</span></p>
                    </div>
                    <div class="block surname">
                        <p>Фамилия: <span>{{surname}}</span></p>
                    </div>
                    <div class="block city">
                        <p>Город: <span>{{city}}</span></p>
                    </div>
                    <div class="block date">
                        <p>Дата и время доставки: <span>{{date}}</span></p>
                    </div>
                    <div class="block email">
                        <p>Эл.адрес: <span>{{email}}</span></p>
                    </div>
                    <div class="block phone">
                        <p>Номер телефона: <span>{{phone}}</span></p>
                    </div>
                    <div class="block address">
                        <p>Адрес: <span>{{address}}</span></p>
                    </div>
                    <div class="block address">
                        <p>Способ оплаты: <span>{{payment}}</span></p>
                    </div>
                    <div class="block order">
                        <p>Ваш заказ: <span>{{products}}</span></p>
                    </div>
                    <div class="block price">
                        <p>Общая стоимость: <span>{{price}}</span> грн.</p>
                    </div>
                </div>
                <a href="#/" class="to-cart-btn">Вернуться на главную</a>
            </div>`

export function cheque(name, surname, city, date, email, phone, address, payment ,products, price){
    return cheque_temp.replace('{{name}}', name).replace('{{surname}}', surname).replace('{{city}}', city).replace('{{date}}', date).replace('{{email}}', email).replace('{{phone}}', phone).replace('{{address}}', address).replace('{{payment}}', payment).replace('{{products}}', products).replace('{{price}}', price)
}