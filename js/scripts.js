$(document).ready(function() {
  $('#inputButton').click(function(event) {
    event.preventDefault();
    var companySize = $("#companySize").val();
    var styleOrFunctionality = $("#styleOrFunctionality").val();
    var webpagesOrApps = $("#webpagesOrApps").val();
    if (age == "") {
      alert("Please enter your age");
    }
    if (bondActor === "Craig Daniels") {
      $("h1").hide();
      $('#output1').show();
    }
    else if (fastFood === "Pizza" && bondActor === "Sean Connery") {
      $("h1").hide();
      $('#output2').show();
    }
    else if (age < 18) {
      $("h1").hide();
      $('#output3').show();
    }
    else {
      $('#output3').show();
    }
  });
});
