





    
  

// Menu
function toggleMenu(){
    const menuToggle = document.querySelector('.toggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active')
    navigation.classList.toggle('active')
}
// <!-- js thong bao popup -->

function thongbaopopup(){
document.getElementById("tbpopup-1").classList.toggle("active");
}
/*==================== SHOW SCROLL TOP ====================*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-top');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll'); else scrollTop.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollTop)

//--------------------CART----------------------------------
const btn = document.querySelectorAll("button")
//console.log(btn)
btn.forEach(function(button,index){
    //console.log(button,index)
    button.addEventListener("click", function(event){
        var btnItem = event.target
        var product = btnItem.parentElement
        var productImg = product.querySelector("img").src
        var productName = product.querySelector("h1").innerText
        var productPrice = product.querySelector("span").innerText
        //console.log(productPrice,productImg,productName)
        addcart(productPrice,productImg,productName)
    })
})
function  addcart(productPrice,productImg,productName){
    var addtr = document.createElement("tr")
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".title")
        if(productT[i].innerHTML == productName){
            alert("Sản phẩm của bạn đã tồn tại trong giỏ hàng")
            return
        }
    }
    var trcontent = ' <tr><td style="display: flex; align-items: center;"><img style="width: 90px" src="'+productImg+'"><span class="title">'+productName+'</span></td><td> <p><span class="prices">'+productPrice+'</span><sup>đ</sup></p></td><td><input style="width: 30px; outline: none" stype="number" value="1" min="0"></td><td style="cursor: pointer;"><span class="cart-delete">Xóa</span></td></tr>'
    addtr.innerHTML = trcontent
    var cartTable = document.querySelector("tbody")
    //console.log(cartTable)
    cartTable.append(addtr)

    carttotal()
    deleteCart()
}
//-------------------------------------------------------
function carttotal(){
    var cartItem = document.querySelectorAll("tbody tr")
    var totalC = 0
    //console.log(cartItem.length)
    for (var i=0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input").value
        //console.log(inputValue)
        var productPrice = cartItem[i].querySelector(".prices").innerHTML
        //console.log(productPrice)
        totalA = inputValue*productPrice*1000
        //totalB = totalA.toLocaleString('de-DE')
        //console.log(totalB)
        totalC = totalC+totalA
        //totalD = totalC.toLocaleString('de-DE')
        //console.log(totalC)
    }
    var cartTotalA = document.querySelector(".price-total span")
    //nâng cao
    //var cartPrice = document.querySelector(".cart-icon span")
    
    cartTotalA.innerHTML = totalC.toLocaleString('de-DE')
    //nâng cao
    //cartPrice.innerHTML = totalC.toLocaleString('de-DE')
    inputchange()
    //console.log(cartTotalA)
}
//--------------Deletet cart------------------------
function deleteCart(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length;i++){
        var productT = document.querySelectorAll(".cart-delete")
        productT[i].addEventListener("click",function(event){
            var cartDelete = event.target
            var cartitemR = cartDelete.parentElement.parentElement
            cartitemR.remove()
           carttotal()
            //console.log(cartitemR)
        })
    }
}
function inputchange(){
    var cartItem = document.querySelectorAll("tbody tr")
    for (var i=0; i<cartItem.length;i++){
        var inputValue = cartItem[i].querySelector("input")
       inputValue.addEventListener("change",function(){
           carttotal()
       })
    }
}



 
