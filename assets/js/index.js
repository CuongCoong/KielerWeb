//click toggle bar mobile 
let dropDownBtnIsOpend = false;
function showMobileMenu() {
    var mobileMenu = document.getElementById('mobile-menu');
    mobileMenu.classList.remove('hide-to-right');
    mobileMenu.classList.add('show-from-right');
}
document.addEventListener('mouseup', function (e) {
    var mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenu.contains(e.target) && e.target.id != 'toggle-bar') {
        mobileMenu.classList.remove('show-from-right');
        mobileMenu.classList.add('hide-to-right');
    }
});

function showDropDownMega() {
    var dropdownMega = document.getElementById('dropdown-mega');
    var dropdownBtn = document.getElementById('dropdown-btn');
    if (!dropDownBtnIsOpend) {
        dropdownMega.style.display = 'block';
        dropdownBtn.classList.remove('rotate-0');
        dropdownBtn.classList.add('rotate-180');
        dropDownBtnIsOpend = true;
    } else {
        dropdownMega.style.display = 'none';
        dropdownBtn.classList.remove('rotate-180');
        dropdownBtn.classList.add('rotate-0');
        dropDownBtnIsOpend = false;
    }
}


//slide show partnership of Home Page
function animateSlideshow(direction) {
    // Get the first image
    var firstImage = $('.partnership__slideshow__items img:first');
    // Get the width of the images
    var imageWidth = firstImage.width();
    // Move the first or last image to the end or beginning of the container
    if (direction === 'next') {
        firstImage.animate({
            'left': '-=' + imageWidth + 'px'
        }, 500, function () {
            firstImage.appendTo('.partnership__slideshow__items');
            $('.partnership__slideshow__items').css('left', '-' + imageWidth + 'px');
        });
        $('.partnership__slideshow__items img:last').animate({
            'left': '-=' + imageWidth + 'px'
        }, 500);
    } else if (direction === 'previous') {
        $('.partnership__slideshow__items img:last').prependTo('.partnership__slideshow__items').css('left', '-' + imageWidth + 'px');
        firstImage.css('left', '0px');

        $('.partnership__slideshow__items img:first').animate({
            'left': '+=' + imageWidth + 'px'
        }, 500);
    }
};


// click tab control in Policy Page
 // get all tab buttons and content sections
 const tabButtons = document.querySelectorAll('.policyMenu-tabControl__tab__btn');
 const tabContents = document.querySelectorAll('.policyMenu-tabControl__tab__content');

 // show first tab content section and hide all others
 tabContents.forEach((content, index) => {
     if (index === 0) {
         content.style.display = 'block';
     } else {
         content.style.display = 'none';
     }
 });

 // add click event listener to each tab button
 tabButtons.forEach((button, index) => {
     button.addEventListener('click', () => {
         // remove "tab-active" class from all buttons
         tabButtons.forEach((tabButton) => {
             tabButton.classList.remove('tab-active');
         });

         // add "tab-active" class to clicked button
         button.classList.add('tab-active');

         // hide all other content sections
         tabContents.forEach((content, contentIndex) => {
             if (contentIndex !== index) {
                 content.style.display = 'none';
             }
         });

         // show/hide clicked content section
         const content = button.parentElement.querySelector('.policyMenu-tabControl__tab__content');
         content.style.display = content.style.display === 'block' ? 'none' : 'block';
     });
 });



 // slide ranger in Product Page
 $(function () {
    var minVal = 0;
    var maxVal = 30000000;
    var startVal = [0, 30000000];
    $('#slider-range').slider({
        range: true,
        min: minVal,
        max: maxVal,
        values: startVal,
        step: 1000000,
        slide: function (event, ui) {
            $('#range-value').text(ui.values[0] + ' - ' + ui.values[1] + ' vnđ');
        },
    });
    $('#range-value').text(
        $('#slider-range').slider('values', 0) + ' - ' + $('#slider-range').slider('values', 1) + ' vnđ',
    );
});


const tabItems = document.querySelectorAll('.detailProduct__tabControl__tab-item__text'); // chọn tất cả các phần tử có class .detailProduct__tabControl__tab-item__text

tabItems.forEach(function(tabItem) {
  tabItem.addEventListener('click', function() {
    // xóa class 'active' khỏi tất cả các phần tử có class .detailProduct__tabControl__tab-item__text
    tabItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // thêm class 'active' vào phần tử được click
    this.classList.add('active');
  });
});


function showDetailCatalog(){
    var detailCatalog = document.getElementById('catalog-detail');
    if(detailCatalog.classList.contains('d-none')){
        detailCatalog.classList.remove('d-none');
    }
}

// close detail catalog when click button close
document.getElementById('closeDetailCatalog').addEventListener('click', function(){
    document.getElementById('catalog-detail').classList.add('d-none');
});