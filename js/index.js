  $(document).ready(function () {
      newQuote();
      newColor();
      zoomIn();
       
function newQuote(){

 $.getJSON("https://talaikis.com/api/quotes/random/ ", function(json) {
    $(".quote").html(json.quote);
    $(".author").html("-" + json.author);
   
    $(".quote").hide().html(json.quote).fadeIn(1000)();  
  
  });
         
}

function newColor(){
  
   var colors = [ 
                 "#39CCCC",
                 "#F012BE",
                 "#663399",
                 "#2ECC40",
                 "#85144b",
                 "#3D9970",
                 "#6DC066",
                 "#31698A",
                 "#FFC3A0",
                 "#FFC0CB",
                 "#6B5B95",
                 "#ECDB54",
                 "#E94B3C",
                 "#6F9FD8",
                 "#944743",
                 "#DBB1CD",
                 "#EC9787",
                 "#00A591",
                 "#EADEDB",
                 "#BC70A4",
                 "#BFD641",
                 "#B4B7BA",
                 "#D8AE47",
                 "#F7CAC9"
                
                 ];
   
 
     selectedColor = colors[Math.floor(Math.random()*colors.length)];
     $(".quotes").css("background-color", selectedColor);
}
    
        function zoomIn(){
        $(".quotes").addClass("animated zoomInLeft");
      
    }
       
   $("#tweet").on("click", function(event){
     event.preventDefault(); 
     window.open("https://twitter.com/intent/tweet?text=" + "\"" +  $(".quote").html() + "\" " + $(".author").html());
  });
      
    
   jQuery("#newQuote").on("click",function(){
    $('.quotes').addClass('animated zoomInRight');
    newQuote()
    newColor();
    function goOut(){    
     $('.quotes').removeClass('animated zoomInRight'); 
     };
    setTimeout(goOut, 1000);
 
  });  


  
  });