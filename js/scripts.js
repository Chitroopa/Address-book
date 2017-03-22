$(document).ready(function() {
  $("#addC").submit(function(event) {
    event.preventDefault();
    var nameInput = $("#name").val();
    var eAddInput = $("#eAddress").val();
    var phoneInput = parseInt($("#phone").val());
    var optionText = "<option>"+nameInput+"</option>"

    $("#dropdown").append(optionText);


  });
});
