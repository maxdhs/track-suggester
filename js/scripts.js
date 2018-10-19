$(document).ready(function() {
  $('#inputButton').click(function(event) {
    event.preventDefault();
    var math = $("#math").val();
    var companySize = $("#companySize").val();
    var styleOrFunctionality = $("#styleOrFunctionality").val();
    var webpagesOrApps = $("#webpagesOrApps").val();

    if (math == "I love math" && companySize == "Large corporation" && styleOrFunctionality == "functionality") {
      $("h4").hide();
      $('#output1').show();
    }
    else if (math == "I avoid math" && companySize == "Small company" && styleOrFunctionality == "Style") {
      $("h4").hide();
      $('#output2').show();
    }
    else if (math == "I love math" || companySize == "Large corporation") {
      $("h4").hide();
      $('#output3').show();
    }
    else if (styleOrFunctionality == "Style") {
      $("h4").hide();
      $('#output2').show();
    }
    else {
      $("h4").hide();
      $('#output2').show();
    }
  });
});
