function kiemtra() {
    var loi = "";
    // kiểm tra tên đăng nhập : text + length
    var tdn = document.getElementById("tendangnhap");
if(tdn.value==""){
    tdn.className="loi";        
    loi += "Tên đăng nhập không được bỏ trống<br>";
}
else if(tdn.value.length<=6){
    tdn.className="loi";       
    loi += "Tên đăng nhập quá ngắn<br>";        
}
else if(tdn.value.length>10){
    tdn.className="loi";       
    loi += "Tên đăng nhập quá dài<br>";        
}
else if(tdn.value!="pham0906") {
    tdn.className="loi"
    loi += "Tài khoản sai<br>"
}
else tdn.className="txt";   

    // kiểm tra mật khẩu : text + length 
    var mk = document.getElementById("matkhau");
if(mk.value==""){
    mk.className="loi";        
    loi += "Mật khẩu không được bỏ trống<br>";
}
else if(mk.value.length<=6){
    mk.className="loi";       
    loi += "Mật khẩu quá ngắn<br>";        
}
else if(mk.value.length>20){
    mk.className="loi";       
    loi += "Mật khẩu quá dài<br>";        
}
else if(mk.value!="123456789") {
    mk.className="loi"
    loi += "Mật khẩu sai<br>"
}
else mk.className="txt";  

// kiem tra dang nhap

if(tdn.value=="pham0906" && mk.value=="123456789"){
    alert("Bạn đã đăng nhập thành công");
     
    
}
else{
    alert("Bạn đã đăng nhập thất bại");
   }
   
//     // kiểm tra họ tên : text
//     var hoten= document.getElementById("hoten");        
// if(hoten.value==""){ 
//     hoten.className="loi"; 
//     loi += "Họ và tên không được bỏ trống.<br>"; 
// }
// else hoten.className="txt"; 

//     //kiểm tra email
//     var email= document.getElementById("email");    
// if(email.value==""){   
//     email.className="loi";
//     loi += "Email không được bỏ trống.<br>";
// }

//     //kiểm tra  phái : radio
//     dem=0;
// var arr_phai= document.getElementsByName("phai");
// for(var i=0; i<arr_phai.length; i++){
//     if(arr_phai[i].checked) dem++;
// }
// if(dem==0){
//     document.getElementById("chonphai").className="loi";
//     loi +=  "Phải chọn giới tính.<br>";
// }
// else document.getElementById("chonphai").className="";
 
//     //kiểm tra sở thích : checkbox
//     arr_sothich= document.getElementsByClassName("sothich");  
// dem=0;
// for(var i=0;i<arr_sothich.length;i++){
//     if(arr_sothich[i].checked) dem++;        
// }
// if(dem==0){
//     document.getElementById("chonsothich").className="loi";
//     loi += "Phải chọn ít nhất 1 sở thích.<br>";
// }
// else document.getElementById("chonsothich").className=""; 

//     // kiểm tra nghề nghiệp : select
//     var nghe = document.getElementById("nghenghiep");
// if (nghe.value==0){
//     nghe.className="loi";
//     loi += "Phải chọn một nghề.<br>";
// }
// else nghe.className="txt";
    
    // kiểm tra giới thiệu : textarea
//     var gt= document.getElementById('gioithieu');    
// if(gt.value.length>200){
//     gt.className="loi";
//     loi += "Giới thiệu phải dưới 200 kí tự.<br>";
// }
// else gt.className="txt";

    // trả về giá trị kiểm tra
    if(loi!=""){
        document.getElementById('baoloi').innerHTML="<p>" + loi + "</p>";
        return false;
    }
}