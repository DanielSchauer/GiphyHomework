var api_key = "QG77mPcMDh71b3S0aC8AMAcEngo9yD9m";

var examples  = ["Game of Thrones","Blade Runner","Metroid","Aliens","The Witcher","Fortnite","PUBG"];
    
   

var history = [];
    for(var i=0; i < examples.length; i++) {
        $(".SampleClass").append('<button class=btn-primary>' + examples[i] + '</button>');
        $(".SampleClass").append(" ");
    }

//var history = examples.length;

//function gifsearch() {
//    var grabgifs = document.getElementById("entergif").value
//}








var grabgifs = document.getElementById("entergif").value;
var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + grabgifs + api_key;










// ⬇This is for displaying the gifs on the html⬇ 

$("#gifsearch").on("click", function() {
    
    
    
    var addedGifs = [];
    
    
    
    
    var gifbuttons = {};









    for(var i=0; i < gifbuttons.length; i++) {
        

    }
    
    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response)  {
          console.log(response);
      
        
    });
    
    
    
    
    var search = $('#entergif').val();
    console.log(search);

    
    
    var queryURL = "https://api.giphy.com/v1/gifs/trending?api_key=" + grabgifs + api_key;



       /* for(var i = 0; i < resuts.length; i++) {

            //if(resuts[i])
        
        
        
        
        }
    });
*/











$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response)  {
      console.log(response);
  
    
});


});
