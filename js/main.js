var card_flag=1;
var debug_flag=3;
function init()
{
   $(".media").css('height',$('#maindiv1').height()/7);
   /*
   var audio1=document.getElementById('media1');
   var audio2=document.getElementById('media2');
   var audio3=document.getElementById('media3');
   var audio4=document.getElementById('media4');
   var audio5=document.getElementById('media5');
   var audio6=document.getElementById('media6');
   $('#mediadiv1').click(function()
   {
      audio1.play();
   });
   $('#mediadiv2').click(function()
   {
      audio2.play();
   });
   $('#mediadiv3').click(function()
   {
     audio3.play();
   });
   $('#mediadiv4').click(function()
   {
      audio4.play();
   });
   $('#mediadiv5').click(function()
   {
      audio5.play();
   });
   $('#mediadiv6').click(function()
   {
      audio6.play();
   });
   $('#mediadiv3').css('top',($('#maindiv1').height()-$('#mediadiv3').height())/3+'px');
   $('#mediadiv4').css('top',($('#maindiv1').height()-$('#mediadiv4').height())/3+'px');
   $('#mediadiv5').css('top',($('#maindiv1').height()-$('#mediadiv5').height())*2/3+'px');
   $('#mediadiv6').css('top',($('#maindiv1').height()-$('#mediadiv6').height())*2/3+'px');
*/

   if(debug_flag==1)
   {
   //signin
   $('#signin_div').css('top',($('#father_div3').height()-$('#signin_div').height())/2+'px').css('left',($('#father_div3').width()-$('#signin_div').width())/2+'px');
   //media
   $('.media').css('width',$('#maindiv1').width()).css('height',$('#maindiv1').height()/7);
   //input
   $('#siginin_input').css('width',$('#maindiv3').width()/2+'px');
   $('#maindiv2').hide();
   $('#maindiv3').hide();
   //card
   $('.card').slideUp();
   //button
   $('#lead1').click(
         function()
         {
               $('#maindiv2').hide().css('z-index',0);
               $('#maindiv3').hide().css('z-index',0);
               $('#maindiv1').show().css('z-index',1);
         }
      )
   $('#lead2').click(
         function()
         {
               $('#maindiv1').hide().css('z-index',0);
               $('#maindiv3').hide().css('z-index',0);
               $('#maindiv2').show().css('z-index',1);
         }
      )
   $('#lead3').click(
         function()
         {
               $('#maindiv2').hide().css('z-index',0);
               $('#maindiv1').hide().css('z-index',0);
               $('#maindiv3').show().css('z-index',1);
         }
      )
   //cartoon
      $('#father_div1').hide();
      $('#father_div3').hide();
      $('#p2').hide();
      $('#p3').hide();
      $("#p1").animate({
     fontSize:'250px',
     top:'-=200px',
    },2000).fadeOut(1000,function()
    {
      $('#p2').show();
      var drop_height=$('#father_div2').height()-500;
      var p2=$('#p2');
      p2.animate({
      top: drop_height+'px',
      fontSize:'+=100px',
                  }
         ,2000,function(){p2.css('background-color','pink');});
      p2.animate({top:'-=500px'},1000);
      p2.animate({left:'-=2000px'},1000,function()
         {
            var p3=$('#p3');
            p3.fadeIn(1000);
            p3.animate({top: drop_height/2+'px'},1500);
            p3.animate({fontSize:'20px'},1000,function(){p3.hide();

                        $('#father_div2').fadeOut(1000,function()
                        {
                           $('#father_div3').fadeIn(1000);
                        })
               })
         });

    });
}
 //page2debug
 if(debug_flag==2)
 {
 $('#father_div3').show();
 $('#father_div1').hide()
 $('#father_div2').hide();
 $('#signin_div').css('top',($('#father_div3').height()-$('#signin_div').height())/2+'px').css('left',($('#father_div3').width()-$('#signin_div').width())/2+'px');
 }
 //page3debug     
if (debug_flag==3){
 $('#father_div1').show();
 $('#father_div3').hide()
 $('#father_div2').hide();
   //input
   $('#siginin_input').css('width',$('#maindiv3').width()/2+'px');
   $('#maindiv2').hide();
   $('#maindiv3').hide();
   //card
   $('.card').slideUp();
   //button
   $('#lead1').click(
         function()
         {
               $('#maindiv2').hide().css('z-index',0);
               $('#maindiv3').hide().css('z-index',0);
               $('#maindiv1').show().css('z-index',1);
         }
      )
   $('#lead2').click(
         function()
         {
               $('#maindiv1').hide().css('z-index',0);
               $('#maindiv3').hide().css('z-index',0);
               $('#maindiv2').show().css('z-index',1);
         }
      )
   $('#lead3').click(
         function()
         {
               $('#maindiv2').hide().css('z-index',0);
               $('#maindiv1').hide().css('z-index',0);
               $('#maindiv3').show().css('z-index',1);
         }
      )


}
}


function getcard()
{
   if(card_flag)
   {
      var random=parseInt(Math.random()*6+1);
      $('#card'+random).slideDown();
   }
   card_flag=0;
}

function signin()
{
   var string=$('#signin_input').val();
      //canvas
   var c=document.getElementById("canvas1");
   var ctx=c.getContext("2d");
   var gradient=ctx.createLinearGradient(0,0,c.width,0);
   gradient.addColorStop("0","magenta");
   gradient.addColorStop("0.5","blue");
   gradient.addColorStop("1.0","red");
   ctx.strokeStyle=gradient;
   ctx.font="40px Georgia";
   if(string=='')
   {
       ctx.strokeText("祝科技部的女生：",0,40);
   }
   else
   {
         ctx.strokeText("祝"+string+":",0,40);
   }
   ctx.font="40px Georgia"
   ctx.strokeText("女生节快乐!",70,120);
   $('#father_div3').fadeOut(1000,function()
   {
      $('#father_div1').fadeIn(1000);
   })
}
