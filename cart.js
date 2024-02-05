

let btn1 = document.getElementById("buy-course1");
let btn2 = document.getElementById("buy-course2");
let btn3 = document.getElementById("buy-course3");
let btn4 = document.getElementById("buy-course4");
let btn5 = document.getElementById("buy-course5");
let btn6 = document.getElementById("buy-course6");
let total = document.getElementById("total");
let itemTotal = document.getElementById("itemTotal");




btn1.addEventListener("click", function () {
    
const productDom = this.parentElement.parentElement;
   const price = parseInt(productDom.querySelector(".coursePrice").innerText);
   //const courseDiv = productDom.querySelector(".courseCart");   

   const totalPrice = parseInt(document.getElementById("total").innerText);
   const totalItem = parseInt(document.getElementById("itemTotal").innerText);

   const seat = parseInt(document.getElementById("seat1").innerText);
   const seatDom = document.getElementById("seat1");

  total.innerText = totalPrice + price;
  itemTotal.innerText = totalItem + 1 ;

  btn1.innerText = "In cart";
  btn1.disabled = true;

  seatDom.innerText = seat - 1 ;

  const courseDiv =`<div class="w-[100%] flex items-center justify-around mb-2 courseCart">
  <div>
      <img class="object-cover rounded-2xl" src="./images/course1sm.png" />
  </div>
  <div class="mb-5 ml-2 mr-5">
      <h2 class="text-black-color">
          Modern Psychology
      </h2>
      <h2 class="text-[#585859] ">
          1300 TK
      </h2>
  </div>
  <div class="">
      <button id="first-btn" onclick="remove(this)" class="buy-course1">
          <i class="fa-solid fa-xmark"></i>
      </button>
  </div>
</div>`;

  addToCartItem(courseDiv);


});

btn2.addEventListener("click", function () {
    
   const productDom = this.parentElement.parentElement;
   const price = parseInt(productDom.querySelector(".coursePrice").innerText);

   const totalPrice = parseInt(document.getElementById("total").innerText);
   const totalItem = parseInt(document.getElementById("itemTotal").innerText);
   const seat = parseInt(document.getElementById("seat2").innerText);
   const seatDom = document.getElementById("seat2");

  total.innerText = totalPrice + price;
  itemTotal.innerText = totalItem + 1 ;
  btn2.innerText = "In cart";
  btn2.disabled = true;
  seatDom.innerText = seat - 1 ;
  const courseDiv =`<div class="w-[100%] flex items-center justify-around mb-2 courseCart">
  <div>
      <img class="object-cover rounded-2xl" src="./images/course2sm.png" />
  </div>
  <div class="mb-5 ml-2 mr-5">
      <h2 class="text-black-color">
      Literature Reading
      </h2>
      <h2 class="text-[#585859] ">
          1800 TK
      </h2>
  </div>
  <div class="">
      <button id="first-btn" onclick="remove(this)" class="buy-course2">
          <i class="fa-solid fa-xmark"></i>
      </button>
  </div>
</div>`;

  addToCartItem(courseDiv);
});

btn3.addEventListener("click", function () {
    
    const productDom = this.parentElement.parentElement;
    const price = parseInt(productDom.querySelector(".coursePrice").innerText);    
 
    const totalPrice = parseInt(document.getElementById("total").innerText);
    const totalItem = parseInt(document.getElementById("itemTotal").innerText);
    const seat = parseInt(document.getElementById("seat3").innerText);
    const seatDom = document.getElementById("seat3");
 
   total.innerText = totalPrice + price;
   itemTotal.innerText = totalItem + 1 ;
   btn3.innerText = "In cart";
   btn3.disabled = true;
   seatDom.innerText = seat - 1 ;
   const courseDiv =`<div class="w-[100%] flex items-center justify-around mb-2 courseCart">
   <div>
       <img class="object-cover rounded-2xl" src="./images/course3sm.png" />
   </div>
   <div class="mb-5 ml-2 mr-5">
       <h2 class="text-black-color">
       Computer Science
       </h2>
       <h2 class="text-[#585859] ">
           1600 TK
       </h2>
   </div>
   <div class="">
       <button id="first-btn" onclick="remove(this)" class="buy-course3">
           <i class="fa-solid fa-xmark"></i>
       </button>
   </div> 
 </div>`;
 
   addToCartItem(courseDiv);
 });

 btn4.addEventListener("click", function () {
    
    const productDom = this.parentElement.parentElement;
    const price = parseInt(productDom.querySelector(".coursePrice").innerText);

    const totalPrice = parseInt(document.getElementById("total").innerText);
    const totalItem = parseInt(document.getElementById("itemTotal").innerText);
    const seat = parseInt(document.getElementById("seat4").innerText);
    const seatDom = document.getElementById("seat4");
 
   total.innerText = totalPrice + price;
   itemTotal.innerText = totalItem + 1 ;
   btn4.innerText = "In cart";
   btn4.disabled = true;
   seatDom.innerText = seat - 1 ;
   const courseDiv =`<div class="w-[100%] flex items-center justify-around mb-2 courseCart">
   <div>
       <img class="object-cover rounded-2xl" src="./images/course4sm.png" />
   </div>
   <div class="mb-5 ml-2 mr-5">
       <h2 class="text-black-color">
       Time Management
       </h2>
       <h2 class="text-[#585859] ">
           1400 TK
       </h2>
   </div>
   <div class="">
       <button id="first-btn" onclick="remove(this)" class="buy-course4">
           <i class="fa-solid fa-xmark"></i>
       </button>
   </div>
 
 </div>`;
 
   addToCartItem(courseDiv);
 });

 btn5.addEventListener("click", function () {
    
    const productDom = this.parentElement.parentElement;
    const price = parseInt(productDom.querySelector(".coursePrice").innerText);   
 
    const totalPrice = parseInt(document.getElementById("total").innerText);
    const totalItem = parseInt(document.getElementById("itemTotal").innerText);
    const seat = parseInt(document.getElementById("seat5").innerText);
    const seatDom = document.getElementById("seat5");
 
   total.innerText = totalPrice + price;
   itemTotal.innerText = totalItem + 1 ;
   btn5.innerText = "In cart";
   btn5.disabled = true;
   seatDom.innerText = seat - 1 ;
   const courseDiv =`<div class="w-[100%] flex items-center justify-around mb-2 courseCart">
   <div>
       <img class="object-cover rounded-2xl" src="./images/course5sm.png" />
   </div>
   <div class="mb-5 ml-2 mr-5">
       <h2 class="text-black-color">
       Library Management
       </h2>
       <h2 class="text-[#585859] ">
           1200 TK
       </h2>
   </div>
   <div class="">
       <button id="first-btn" onclick="remove(this)" class="buy-course5">
           <i class="fa-solid fa-xmark"></i>
       </button>
   </div>
 
 </div>`;
 
   addToCartItem(courseDiv);
 });

 btn6.addEventListener("click", function () {
    
    const productDom = this.parentElement.parentElement;
    const price = parseInt(productDom.querySelector(".coursePrice").innerText);
     
    const totalPrice = parseInt(document.getElementById("total").innerText);
    const totalItem = parseInt(document.getElementById("itemTotal").innerText);
    const seat = parseInt(document.getElementById("seat6").innerText);
    const seatDom = document.getElementById("seat6");
 
   total.innerText = totalPrice + price;
   itemTotal.innerText = totalItem + 1 ;
   btn6.innerText = "In cart";
   btn6.disabled = true;
   seatDom.innerText = seat - 1 ;
   const courseDiv =`<div class="w-[100%] flex items-center justify-around mb-2 courseCart">
   <div>
       <img class="object-cover rounded-2xl" src="./images/course6sm.png" />
   </div>
   <div class="mb-5 ml-2 mr-5">
       <h2 class="text-black-color">
       Human Resource
       </h2>
       <h2 class="text-[#585859] ">
           1500 TK
       </h2>
   </div>
   <div class="">
       <button id="first-btn" onclick="remove(this)" class="buy-course6">
           <i class="fa-solid fa-xmark"></i>
       </button>
   </div> 
 </div>`;
 
   addToCartItem(courseDiv);
 });


function addToCartItem(courseDiv){   

    const cartDom = document.getElementById("cart");
    cartDom.insertAdjacentHTML("beforeend",courseDiv);
    
    
}

function remove(element) {
    const classList = element.classList;
    const courseId =classList[0][classList[0].length-1];
    
    const coursebtn = document.getElementById(classList[0]);
    
    const productDom = coursebtn.parentElement.parentElement;
    const price = parseInt(productDom.querySelector(".coursePrice").innerText);    
 
    const totalPrice = parseInt(document.getElementById("total").innerText);
    const totalItem = parseInt(document.getElementById("itemTotal").innerText);
    const seat = parseInt(document.getElementById("seat"+courseId).innerText);
    const seatDom = document.getElementById("seat"+courseId);
 
   total.innerText = totalPrice - price;
   itemTotal.innerText = totalItem - 1 ;
   coursebtn.innerText = "Buy Course";
   coursebtn.disabled = false;
   seatDom.innerText = seat + 1 ;

   //const courseId = course.length();

    // console.log("seat"+courseId);
    // console.log(courseId);

    element.parentElement.parentElement.remove();
  }