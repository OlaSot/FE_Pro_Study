// 1. При клике на кнопку содержимое инпута выводится в консоль
const show_msg_btn = document.querySelector('.show_msg_btn');
const show_msg_input = document.querySelector('.show_msg_input');

// show_msg_btn.addEventListener('click', () => console.log(show_msg_input.value));

show_msg_btn.addEventListener('click', function(){
  console.log(show_msg_input.value)
});


// 2. При клике на кнопку менять цвет заднего фона на черный
const change_black_btn = document.querySelector('.change_black_btn');

// change_black_btn.addEventListener('click', () => document.body.style.backgroundColor = 'black');

// 3. При клике на кнопку менять цвет заднего фона на черный, при повторном клике - обртано на белый

change_black_btn.addEventListener('click', () => document.body.classList.toggle('back_color'));


// 4. При клике на кнопку менять цвет заднего фона на цвет из массива

const change_btn = document.querySelector('.change_btn');

const back_colors = ['pink', 'blue', 'yellow', 'green'];

// let color_index = -1;

// change_btn.addEventListener('click', () => {
//   color_index++
//   if(color_index === back_colors.length){
//     color_index = 0
//   }
//   document.body.style.backgroundColor = back_colors[color_index]
// });

let color_index = 0;

change_btn.addEventListener('click', () => {
  document.body.style.backgroundColor = back_colors[color_index++ % back_colors.length]
});

// color_index++ % back_colors.length

// 0 % 4 === 0
// 1 % 4 === 1
// 2 % 4 === 2
// 3 % 4 === 3
// 4 % 4 === 0
// 5 % 4 === 1
// 6 % 4 === 2


// 87 % 10 === 7
// 8 коробок
// 7 остаток


// 5. При клике на кнопку менять ее цвет на случайный

const random_btn = document.querySelector('.random_btn');

const random_color = () => Math.round(Math.random() * 255); // 0-255

random_btn.addEventListener('click', (event) => {
  event.target.style.backgroundColor = `rgb(${random_color()}, ${random_color()}, ${random_color()})`
})


// const a = Math.ceil(4.000001); // 5
// const b = Math.floor(4.999999); // 4
// const c = Math.round(4.65); // 5

// console.log(Math.random() * 255); // 255.9999999 = 255


// 6. при клике на картинку менять картинку на элемент массива

const photos = [
  'https://reqres.in/img/faces/1-image.jpg',
  'https://reqres.in/img/faces/2-image.jpg',
  'https://reqres.in/img/faces/3-image.jpg',
  'https://reqres.in/img/faces/4-image.jpg',
  'https://reqres.in/img/faces/5-image.jpg'
]

const img_slider = document.querySelector('.img_slider');

let photo_index = 0;

img_slider.addEventListener('click', event => {
  event.target.src = photos[photo_index++ % photos.length]
});


//7. Создать слайдер с кнопочками

const img_slider2 = document.querySelector('.img_slider2');
const left_btn = document.querySelector('.left_btn');
const right_btn = document.querySelector('.right_btn');

let photo_index2 = 0;

right_btn.addEventListener('click', () => {
  img_slider2.src = photos[++photo_index2 % photos.length]
});

// left_btn.addEventListener('click', () => {
//   if (photo_index2 === 0){
//     photo_index2 = photos.length
//   }
//   img_slider2.src = photos[--photo_index2 % photos.length]
// });


left_btn.addEventListener('click', () => {
  photo_index2 = (photo_index2 - 1 + photos.length) % photos.length
  img_slider2.src = photos[photo_index2];
});

// 0 - 1 + 5 % 5 === 4
// 1 - 1 + 5 % 5 === 3
// 2 - 1 + 5 % 5 === 2


// 8. Создать генератор игральных костей

const dice_btn = document.querySelector('.dice_btn');
const dice_result = document.querySelector('.dice_result');

const dice_random = () => Math.round(Math.random() * 5 + 1); // 1-6

dice_btn.addEventListener('click', () => {
  dice_result.innerText = '';
  const p = document.createElement('p');
  p.innerText = `${dice_random()} X ${dice_random()}`;
  dice_result.append(p)
});


// 9. Создать кнопку с размерами 30х30 px. При клике на кнопку ее размеры увеличиваются на 10px и меняется цвет заднего фона на случайный

const incr_btn = document.querySelector('.incr_btn');

let btn_params = 30;

const incr_btn_render = size => {
  incr_btn.style.width = size + 'px';
  incr_btn.style.height = size + 'px';
}

incr_btn_render(btn_params);

incr_btn.addEventListener('click', event => {
  btn_params += 10;
  incr_btn_render(btn_params);
  event.target.style.backgroundColor = `rgb(${random_color()}, ${random_color()}, ${random_color()})`
});

// incr_btn.style.width = '30px'
// incr_btn.style.height = '30px'
// incr_btn.innerText = '+'

// incr_btn.addEventListener('click', function(){
//   const newW = incr_btn.style.width + 10

// 10. При клике на кнопку менять содержимое инпута на !!!

const change_text_btn = document.querySelector('.change_text_btn')
const change_text_input = document.querySelector('.change_text_input')

change_text_btn.addEventListener('click', () => change_text_input.value = '!!!')

// 11. При клике на кнопку содержимое инпута меняет на .../!!!

const change_text_btn1 = document.querySelector('.change_text_btn1');
const change_text_input1 = document.querySelector('.change_text_input1');

change_text_input1.value = '???';

const elems = ['...', '!!!', '&&&', '+++'];
let elem_index = 0;

change_text_btn1.addEventListener('click', () => {
  change_text_input1.value = elems[elem_index++ % elems.length]
});

// 12. Создать кнопку и пустой див. При клике на кнопку создавать внутри дива параграф с произвольным текстом. Цвет текста дожен быть сначала синий, потом зеленый

// 12. Создать кнопку и пустой див. При клике на кнопку создавать внутри дива параграф с произвольным текстом. Цвет текста дожен быть сначала синий, потом зеленый
const create_p_btn = document.querySelector('.create_p_btn');
const create_p_container = document.querySelector('.create_p_container');

const col = ['blue', 'green'];
let col_index = 0;

create_p_btn.addEventListener('click', () => {
  const p = document.createElement('p');
  p.innerText = 'hello, world!'
  p.style.color = col[col_index++ % col.length];
  create_p_container.append(p);
});