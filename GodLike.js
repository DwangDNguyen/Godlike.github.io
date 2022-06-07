var demoImgMain = document.querySelector('.container__demo-option-img-main');
var demoImgGame = document.querySelector('.container__demo-option-img-game');
var mainText = document.querySelector('.container__demo-option-text-main');
var gameText = document.querySelector('.container__demo-option-text-game');
var shopImg = document.querySelector('.shop-img');
var shop = document.querySelector('.shop');
var proImg = document.querySelector('.product-img');
var product = document.querySelector('.product');
var socialImg = document.querySelector('.social-img');
var social = document.querySelector('.social-network');
var postImg = document.querySelector('.post-img');
var post = document.querySelector('.blog-post');
var gridImg = document.querySelector('.grid-img');
var grid = document.querySelector('.blog-grid');
var listImg = document.querySelector('.list-img');
var list = document.querySelector('.blog-list');
var commingImg = document.querySelector('.comming-img');
var comming = document.querySelector('.comming-soon');
var checkImg = document.querySelector('.check-img');
var checkText = document.querySelector('.ace-check');
var faceIc = document.querySelector('.contact-item-fb');
var faceText = document.querySelector('.contact-item-text-fb');
var TwiIc = document.querySelector('.contact-item-twitter');
var twiText = document.querySelector('.contact-item-text-twitter');
var ggIc = document.querySelector('.contact-item-gg');
var ggText = document.querySelector('.contact-item-text-gg');
var headerhide = document.querySelector('.header-hide');
var menu = document.querySelector('.header__main');
var search = document.querySelector('.search');
const tabs = document.querySelectorAll('.modal-header__link');
const contents = document.querySelectorAll('.modal-form-account');
const closeBtn = document.querySelector('.icon-close');
const accountForm = document.querySelector('.modal-account');
const closeBtnSub = document.querySelector('.icon-close-menusub');
const closeBtnRes = document.querySelector('.icon-close-menuRes');
const ModalOverlay = document.querySelector('.menu-overlay');
const menuSub = document.querySelector('.menu-sub');
const menuRes = document.querySelector('.menu-responsive');
const menuTabs = document.querySelectorAll('.menu-responsive__item');
const menuSubItems = document.querySelectorAll('.menu-responsive__submenu');
const backBtns = document.querySelectorAll('.menu-responsive__back');

faceIc.onmouseover = function(){
      faceText.style.display = 'block';
}
faceIc.onmouseout = function(){
      faceText.style.display = 'none';
}
TwiIc.onmouseover = function(){
      twiText.style.display = 'block';   
}
TwiIc.onmouseout = function(){
      twiText.style.display = 'none';   
}
ggIc.onmouseover = function(){
      ggText.style.display = 'block';   
}
ggIc.onmouseout = function(){
      ggText.style.display = 'none';   
}

demoImgMain.onmouseover = function(){
      mainText.style.display = 'block';
      demoImgMain.style.filter = 'brightness(50%)';
      demoImgMain.style.transition = '0.4s';
}
demoImgMain.onmouseout = function(){
      mainText.style.display = 'none';
      demoImgMain.style.filter = 'brightness(100%)';
}
demoImgGame.onmouseover = function(){
      gameText.style.display = 'block';
      demoImgGame.style.filter = 'brightness(50%)';
      demoImgGame.style.transition = '0.4s';
}
demoImgGame.onmouseout = function(){
      gameText.style.display = 'none';
      demoImgGame.style.filter = 'brightness(100%)';
}
mainText.onmouseover = function(){
      demoImgMain.style.filter = 'brightness(50%)';
}
gameText.onmouseover = function(){
      demoImgGame.style.filter = 'brightness(50%)';
      demoImgMain.style.transition = '0.4s';
}
mainText.onmouseout = function(){
      demoImgMain.style.filter = 'brightness(50%)';
      demoImgMain.onmouseout = function(){
            mainText.style.display = 'none';
            demoImgMain.style.filter = 'brightness(100%)';
      }
}
gameText.onmouseout = function(){
      demoImgGame.style.filter = 'brightness(50%)';
      demoImgGame.onmouseout = function(){
            gameText.style.display = 'none';
            demoImgGame.style.filter = 'brightness(100%)';
      }
}
shopImg.onmouseover = function(){
      shop.classList.add('add');
      this.style.filter = 'brightness(50%)';
      
}
shopImg.onmouseout = function(){
      shop.classList.remove('add');
      this.style.filter = 'brightness(100%)';
}
proImg.onmouseover = function(){
      product.classList.add('add');
      this.style.filter = 'brightness(50%)';
      
}
proImg.onmouseout = function(){
      product.classList.remove('add');
      this.style.filter = 'brightness(100%)';
}
socialImg.onmouseover = function(){
      social.classList.add('add');
      this.style.filter = 'brightness(50%)';
      
}
socialImg.onmouseout = function(){
      social.classList.remove('add');
      this.style.filter = 'brightness(100%)';
}
postImg.onmouseover = function(){
      post.classList.add('add');
      this.style.filter = 'brightness(50%)';
      
}
postImg.onmouseout = function(){
      post.classList.remove('add');
      this.style.filter = 'brightness(100%)';
}
gridImg.onmouseover = function(){
      grid.classList.add('add');
      this.style.filter = 'brightness(50%)';
      
}
gridImg.onmouseout = function(){
      grid.classList.remove('add');
      this.style.filter = 'brightness(100%)';
}
listImg.onmouseover = function(){
      list.classList.add('add');
      this.style.filter = 'brightness(50%)';
      
}
listImg.onmouseout = function(){
      list.classList.remove('add');
      this.style.filter = 'brightness(100%)';
}
commingImg.onmouseover = function(){
      comming.classList.add('add');
      this.style.filter = 'brightness(50%)';
      
}
commingImg.onmouseout = function(){
      comming.classList.remove('add');
      this.style.filter = 'brightness(100%)';
}
checkImg.onmouseover = function(){
      checkText.classList.add('add');
      this.style.filter = 'brightness(50%)';
      
}
checkImg.onmouseout = function(){
      checkText.classList.remove('add');
      this.style.filter = 'brightness(100%)';
}

// window.onscroll = function(){
//       headerhide.style.display = 'none';
//       menu.style.top = '0';
// }
var toggleItem = 1;
function toggleSearch(icon){
      icon.classList.toggle('fa-times');
      if(toggleItem == 1){
            search.style.display = 'block';
            toggleItem = 0;
      }
      else if(toggleItem == 0){
            search.style.display = 'none';
            toggleItem = 1;
      }
}

// Tab account
tabs.forEach((tab,index) => {
      const content = contents[index];
      tab.onclick = function(){
            document.querySelector('.check').classList.remove('check');
            document.querySelector('.modal-active').classList.remove('modal-active');
            this.classList.add('check');
            content.classList.add('modal-active');
      }
})
//close tab
closeBtn.onclick = function(){
      accountForm.style.display = 'none';
}
//open tab
function OpenTabAccount(){
      if(toggleItem == 1){
            accountForm.style.display = 'flex';
      }
}
//menu-sub
function openMenuSub(){
      if(toggleItem == 1){
            menuSub.classList.add('menu-sub-active');
            ModalOverlay.style.display = 'block';
      }
}
closeBtnSub.onclick = function(){
      ModalOverlay.style.display = 'none';
      menuSub.classList.remove('menu-sub-active');
}

//menu-responsive
function openMenuResponsive(){
      if(toggleItem == 1){
            menuRes.classList.add('menu-responsive-active');
            ModalOverlay.style.display = 'block';
      }
}
closeBtnRes.onclick = function(){
      ModalOverlay.style.display = 'none';
      menuRes.classList.remove('menu-responsive-active');
}
menuTabs.forEach((menuTab,index) => {
      const menuSubItem = menuSubItems[index];

      menuTab.onclick = function(){
            document.querySelector('.menu-responsive-active').classList.remove('menu-responsive-active');
            menuSubItem.classList.add('menu-responsive-active');
            menuRes.classList.add('menu-responsive-active');
      }
})
backBtns.forEach((backBtn,index) => {
      const menuSubItem = menuSubItems[index];

      backBtn.onclick = function(){
            document.querySelector('.menu-responsive-active').classList.remove('menu-responsive-active');
            menuSubItem.classList.remove('menu-responsive-active');
            menuRes.classList.add('menu-responsive-active');
      }
})
