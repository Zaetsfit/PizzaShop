export function getProduct(product_list, indexes) {
    let category_list = [];
    indexes.forEach(idk => {
        category_list.push(product_list[idk])
    });
    return category_list
}

export function count_order(array) {
    if (array == null){
        return 0
    }
    else{
        if(array.length == 0){
            return 0
        }
        else{
            let all_amount = 0;
            array.forEach(el => {
                all_amount += el.amount;
            })
            return all_amount
        }
    }
}