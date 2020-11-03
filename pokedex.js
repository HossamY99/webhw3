$(function(){

$.get("https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokedex=all",callback);


function callback (data,status)
{
  var obj=data;
  obj=obj.split(/[\n:]+/);
  console.log(obj);
  var strr="";
  //$("#pokedex-view").prepend('<img src="/sprites/abra.png" alt="not"/>');
  //$("#pokedex-view").append(obj.toString());
  //var str="/sprites/";
  var str="";
  var stalt="";
  var he=$("#pokedex-view");
  for (var i=1;i<obj.length;i=i+2)
  {
      stalt=obj[i];
      str=obj[i]+".png";
      //console.log("str: "+str);
      $("#pokedex-view").append("<img  src='"+str+"' alt='"+stalt+"' / >");
  }

  var images = he[0].getElementsByTagName("img");
  console.log(images);
  for (im of images){
    $(im).css( {"float":"left"});
    im.className="unfound";
  }

  images[0].className="found";
  images[1].className="found";
  images[2].className="found";

var src="";

  $(".found" ).each(function(index) {
    //alert("a");
    $(this).on("click", function(){
      this.classList.add("clicked");
        //$(this).addClass("clicked");
        console.log($(this));
        src=this.src;
  //      alert(this.src);
        var alt=this.alt;
        var strt="pikachu";
        $.get(" https://courses.cs.washington.edu/courses/cse154/webservices/pokedex/pokedex.php?pokemon="+alt,callback2);


    });
});

function callback2(data, status){


var elem=$(this);

      $(".move").each(function(){
        $(this).parent().show();
      });


var x = document.getElementsByClassName("move");
  for (var i=0; i<x.length ;i++){
    if (i<data.moves.length)
      {
      x[i].innerHTML= data.moves[i].name;
      }
else{
      x[i].parentNode.style.display = "none";
}
    }

$(".info").text(data.info.description);
console.log( $(this) )
//alert(this);
//var src2=this.alt;
//alert(src2);
$(".pokepic").attr("src", src);


  console.log(data);
}





//$( ".found" ).click(function() {
  //alert( "Handler for .click() called." );
//});









}
});
