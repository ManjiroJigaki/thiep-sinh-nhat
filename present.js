
var to = "Trương Kim Như " ;
var gift_url = 'https://www.pinterest.com/pin/14003448834600908/';
var gift_image_url = 'Happy Birthday Pusheen Pin On Pinterest 👑👑👑.jpeg';

 

var nametag = document.getElementById("nametag");
var present = document.getElementById("present");
var presentImage = document.getElementById("present-image");
<style>
  #card {
    width: 300px; /* Đặt chiều rộng hộp */
    height: auto; /* Tự động điều chỉnh chiều cao */
    background-color: white; /* Nền trắng */
    padding: 10px; /* Khoảng cách nội dung với viền */
    text-align: center; /* Canh giữa chữ */
    border: 2px solid red; /* Viền đỏ */
    border-radius: 10px; /* Bo tròn góc hộp */
    word-wrap: break-word; /* Tự động xuống dòng nếu chữ quá dài */
    overflow: hidden; /* Ẩn phần chữ bị tràn */
    font-size: 16px; /* Cỡ chữ */
    position: absolute; /* Canh giữa màn hình */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none; /* Ban đầu ẩn hộp */
  }

  .card-show {
    display: block; /* Hiển thị hộp khi class được thêm */
  }

  #nametag {
    font-size: 20px; /* Tùy chỉnh kích thước chữ tên */
    font-weight: bold;
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

