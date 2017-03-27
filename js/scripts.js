$(document).ready(function() {
$("#formOne").submit(function(event) {
  event.preventDefault();
  var inputWords = $("input#item1").val();
  var splitWords= inputWords.split(" ");
  //if ()branch for eliminating small words?
  alert(splitWords);

});
});
