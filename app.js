//our firebase reference

var data = new Firebase('https://galipoli.firebaseio.com/');

//on change get data
data.on("value", function(snapshot) {
  context = snapshot.val();

var source = $("#home-template").html ();
var template = Handlebars.compile(source);
var html = template(context);

console.log(html);
$("#yield").html(html);

});


//Event method
//$=jquery select
$("#submit").click(function(){


var exhibition = {
rating: null,
comment: null, 
genre: null

}

exhibition.rating = $("#rating").val();
exhibition.comment = $("#comment").val();
exhibition.exhibit = $("#exhibit").val();


data.child("exhibition").push(exhibition);


});








