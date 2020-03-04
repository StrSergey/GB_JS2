const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 20},
    {id: 3, title: 'Keyboard', price: 200},
    {id: 4, title: 'Gamepad', price: 50},
    {id: 5, title: 'Test5', price: 105},
    {id: 6, title: 'Test6', price: 106},
    {id: 7, title: 'Test7', price: 107},
    {id: 8, title: 'Test8', price: 108}
];

const placeholderImgURL = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAKlBMVEX////d3d3l5eXz8/Po6Oj7+/v4+Pjf39/b29vi4uLw8PD29vbs7Ozp6elG0luKAAACs0lEQVR4nO3b67ZjMBiAYUTkgPu/3aGloi07ulL9Yt5n/u2D8a5UJaldFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB1NSq5Vv86KqScSa9vfp21aFyZnC3L/tddC58+cOTkDKIvzfAvLSOs8CsoPNFUaKpEnNTCqtFJFN5ILUx1j1YUno7Coyg835vCxldV7T88xQwKm760ow/XB/IL28daw350luILp8XU7TTtJxen+MIunFza7vjxpBc2zi6Bw7Lq+PGkF6pyxbaHjye98GktZf3h41F4vv/tVbraeRvO9fjxpBcWnQ2HcPdu0bTev279ii8MB9G6nTu+7pwZNz/808+ILyzU445o3c5VqCp7+zlb1usW+YVFU5u/Z97e2GWkVfidDAoL3fq66t9cYi+/NL8jhfeUHApH+1Pu237aY6N8mNwFo5hL4S718ilAkHiFQvXmg44l8QKFrbHPfWFi/oWr9dWbt5vsC/VG4CMx90JdbfXNiZkX6nojcBnFvAt1v/9x8ZiYd2G/lzclZl3Y7bTNiSrnwojAcTllTK6FUYG3Z2lMnoWb94nXYcx1DLV3ZfyTNzkWjsv/+KeLcinU66+28c/AZVLYVq5bnWnrLjWGurst5etwG0btZmVWuLwkXbAP47eWFtkV6m6+sw2s6R7frm3UC1V84bhraqZCc2+cTlnHXYrCC5t5ih20WNPfN4jjLkXRhVq9Wceb0k6Nuoq5FCUXtvXmbf3+Wn3dTMyqcJib2b3JmfM66tl3sYXt3/Prqs55DLtkz7TLLGyOLB5yLOwjpyu5Fs7vMIkGUV7h6vOySxamRuGJKLxAYeo/XJNX+JVAYYXfGEVBhVFroeOS/f1GAv03Eo36+z8+jfZ1cr2kQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADH/AP5HCXaWO8W3wAAAABJRU5ErkJggg==";
//Задание 2. Доп.параметр функции со значением по-умолчанию - URL placeholder
const renderProduct = (title, price, img = placeholderImgURL) => {
    return `<div class="product-item">
                <img src="${img}">
                <h3>${title}</h3>
                <p>${price} руб.</p>
                <button class="button button_add-cart"><a class="button_link" href="#">Добавить в корзину</a></button>
            </div>`
};

const renderPage = (list) => {
    const productList = list.map((item) => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productList.join('');
    /* Задание 3 - запятая появляется в следствии вывода значений массива, которые разделяются запятыми
        Метод .join() объединяет все элементы массива в строку с заданным разделителем
    */
};

renderPage(products);
