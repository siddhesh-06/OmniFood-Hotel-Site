// var waypoints = $('#handler-first').waypoint(function(direction) {
//     notify(this.element.id + ' hit 25% from top of window') 
//   }, {
//     offset: '25%'
//   })
$(document).ready(function(){
    $('.js--section-features').waypoints(function(direction){
        if(direction=="down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    });
});
