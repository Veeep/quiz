// Business logic:



// User interface logic:

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const timeInput = $("input#time").val();
    const empireInput = $("input#empire").val();
    const throneInput= $("input#throne").val();
    const swordInput = $("input#sword").val();
    const scaleInput = parseInt($("#scale").val());
    
    $("#result").show();

    event.preventDefault();
  });
});