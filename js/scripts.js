$(document).ready(function() {
  $('#dropdown').click(function(event)
  {
      $('ul').hide();
      var newItem = '#' + $('#dropdown').val();
      $(newItem).show();
  });

  $("#addC").submit(function(event) {
    event.preventDefault();
    var count = parseInt($(".counter").text())+1;

    var nameInput = $("#name").val();
    var eAddInput = $("#eAddress").val();
    var phoneInput = parseInt($("#phone").val());

    var optionText = "<option>"+nameInput+count+"</option>";
    var ulText = "<ul id="+nameInput+count+"><li>Name:"+nameInput+"</li><li>Email:"
                  +eAddInput+"</li><li>Phone:"+phoneInput+"</li>";

    $("#dropdown").append(optionText);
    $(".disp").append(ulText);
    $(".counter").text(count);
    $('ul').hide();
  });
});
