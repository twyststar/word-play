$(document).ready(function() {
$("#formOne").submit(function(event) {
  event.preventDefault();
  var lastWords = [];
  var inputWords = $("input#item1").val();
  var splitWords= inputWords.split(" ");
  splitWords.forEach(function(word) {
    if (word.length > 2){
      lastWords.push(word);
    }
  });
  alert(lastWords);

});
});
