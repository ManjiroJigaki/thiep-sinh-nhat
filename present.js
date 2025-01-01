
var to = "Trương Kim Như " ;
var gift_url = 'https://www.pinterest.com/pin/14003448834600908/';
var gift_image_url = 'Happy Birthday Pusheen Pin On Pinterest 👑👑👑.jpeg';

 

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");
<style>
 #card {
  width: 300px; /* Đặt chiều rộng cố định hoặc theo ý bạn */
  height: 200px; /* Để chiều cao tự động điều chỉnh */
  background-color: white; /* Màu nền */
  padding: 10px; /* Khoảng cách giữa nội dung và viền */
  text-align: center; /* Canh giữa chữ */
  border: 2px solid red; /* Viền (tùy chỉnh nếu cần) */
  border-radius: 10px; /* Bo tròn góc */
  word-wrap: break-word; /* Để chữ tự xuống dòng khi quá dài */
  overflow: hidden; /* Ẩn phần chữ bị tràn (nếu có) */
  font-size: 16px; /* Cỡ chữ */
}
</style>


function init() {
  
  var _giftLink, 
      _giftImg;
  
  if (gift_url) {
    _giftLink = document.createElement("a"); 
    _giftLink.href = gift_url;
    _giftLink.target = "_blank";
    presentImage.appendChild(_giftLink);
  }
  
  if (gift_image_url) {
    _giftImg = document.createElement("img");
    _giftImg.src = gift_image_url;
    if(_giftLink) {
      _giftLink.appendChild(_giftImg);
    } else {
      presentImage.appendChild(_giftImg);
    }
  }
    
  present.addEventListener("click", function(e){
    present.classList.toggle("open");
    document.getElementById('card').classList.add('card-show');
  }, false);
  
  
  
  nametag.innerText = to;
}

init();

