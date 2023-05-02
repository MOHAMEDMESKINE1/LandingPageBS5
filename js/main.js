import { CountUp } from '../js/countup.js';

// wow js
$(function () {
  
    function countStart(){
        const $counters = document.querySelectorAll(".count-up"),
            options = {
                useEasing: true,
                useGrouping: true,
                separator: ",",
                decimal: "."
            };
    
        $counters.forEach( (item) => {
        const value = item.dataset.value;
        const counter = new CountUp(item, value, options);
        counter.start();
        });
    }
    
   new Waypoint({
        element: document.querySelector('.row'),
        handler: function() {
          countStart();
           //this.destroy() //for once
        },
        offset: '50%'
    });
   
    new WOW().init(); 
    $.scrollIt();
});
// // display current year
// let edition = document.querySelector(".year")
// let date = new Date();
// let currentYear = date.getFullYear();
// edition.textContent = currentYear;


	document.querySelector(".loader").style.display = "block";

// document.body.onload = function(){
//   showLoader();
// }