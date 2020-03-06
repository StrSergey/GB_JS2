class ProductsList{
    constructor(container = '.products'){
        this.container = container;
        this.goods = [];
        this.allProducts = [];
        this._fetchProducts();
    } 
    
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 20},
            {id: 3, title: 'Keyboard', price: 200},
            {id: 4, title: 'Gamepad', price: 50},
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        
        for(let product of this.goods){
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend',productObj.render())
        }
/*==============Задание№2=ДЗ========================*/
        
        //Добавим Итоговый элемент div после элемента div со списком товаров.
        //Вызовем метод подсчета суммы товаров.
        block.insertAdjacentHTML('afterend', `<div class="total">ИТОГО: ${this.sumGoodsPrice()} \u20bd</div>`);
    }
    sumGoodsPrice() {   //Метод подсчитывающий сумму всех товаров
        let sum = 0;
        for (let product of this.goods) {
            sum = sum + product.price;
        }
        return sum;
    }
}


class ProductItem{
	constructor(product, img = 'https://placehold.it/200x150'){
		this.title = product.title;
		this.price = product.price;
		this.id = product.id;
		this.img = img;
		
	}
	
	render(){
		 return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
	}
}

let list = new ProductsList();
list.render();

/*==================Задание№1=ДЗ====================*/

class CartItem extends ProductItem {    //подкласс ProductItem продукт в самой корзине
        constructor(id, title, price, img, quantity = 1, subtotal) {
            super(id, title, price, img);   //берем базовые параметры у родительского класса ProductItem
            this.quantity = quantity;   //количество одного и того же товара
            this.subtotal = this.price * this.quantity; //стоимость одинакового товара (цена*количество)
        }
    }

class Cart {    //класс корзина
        constructor(container = ".cart", paymentAddress) {
            this.container = container;
            this.allItems = []; //корзина содержищая CartItem
            this.paymentAddress = paymentAddress;   //Адрес доставки
        }

        shipping() {    //метод расчета доставки товара.
        };

        discount() {    //метод расчета скидки
        };

        grandtotal() {  //метод расчета полной стоимости всей корзины товаров (с количсетвом, скидками и доставкой)// с учетом CartItem.subtotal и discount() и shipping();
        };
    
        addToCart() {   //добавление в корзину "забыли"
        };

        delFromCart() { //удаление из корзины лишнего
        };
    
        checkout() {    //оплата корзины
        };
    }


    



