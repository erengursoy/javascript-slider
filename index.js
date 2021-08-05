
var models = [
     {
          name: 'alfa romeo',
          image: 'img/alfa-rome.jpg',
          link:
               'http://www.arabalar.com.tr/alfa-romeo/giulietta'

     },


     {
          name: 'hyundai',
          image: 'img/hyundai.jpg',
          link:
               'http://www.arabalar.com.tr/alfa-romeo/giulietta'

     },

     {
          name: 'opel',
          image: 'img/opel.jpg',
          link:
               'http://www.arabalar.com.tr/alfa-romeo/giulietta'

     },




     {
          name: 'seat-areca',
          image: 'img/seat-ateca.jpg',
          link:
               'http://www.arabalar.com.tr/alfa-romeo/giulietta'

     },



     {
          name: 'tiguan',
          image: 'img/tiguan.jpg',
          link:
               'http://www.arabalar.com.tr/alfa-romeo/giulietta'

     },



];
var slaytCount = models.length;
var index = 3;
var settings = {
     duration: '2000',
     random: true 


};



init(settings);


document.querySelector('.fa-arrow-circle-left').addEventListener('click', function () {
     index--;
     console.log(index);
     showSlide(index);
});
document.querySelector('.fa-arrow-circle-right').addEventListener('click', function () {
     index++;
     console.log(index);
     showSlide(index);
});

function init(settings) {
     setInterval(function () {
          if (settings.random) {
               index = Math.floor(Math.random() * slaytCount);
          } else {

               showSlide(index);

          }
     }, settings.duration)



}



function showSlide(i) {

     index = i;
     if (i < 0) {
          index = slaytCount - 1;
     }
     if (i >= slaytCount) {
          index = 0;
     }




     document.querySelector('.card-title').textContent = models[index].name;
     document.querySelector('.card-img-top').setAttribute('src', models
     [index].image);

     document.querySelector('.card-link').setAttribute('href', models[index].link);

}

