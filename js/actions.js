import {Get} from './request.js'

const request_data = JSON.parse(Get('https://my-json-server.typicode.com/Zaetsfit/PizzaShop/suggestions'))['actions'];

export const action1 = request_data[0]
export const action2 = request_data[1]
export const action3 = request_data[2]
export const action4 = request_data[3]
