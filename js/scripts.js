$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const timeInput = $("input#time").val();
    const empireInput = $("input#empire").val();
    const throneInput = $("input#throne").val();
    const swordInput = $("input#sword").val();
    const scaleInput = parseInt($("#scale").val());
    
 
  if (timeInput === "C" && empireInput === "A" && scaleInput >= 9 && scaleInput <=10) {
    $("#language").text(" Vulcan-style programmer.");
    }
  else if (timeInput === "C" && empireInput === "A" && scaleInput >=5 && scaleInput < 9) {
    $("#language").text(" Romulan-style Programmer.");
  }
  else if (timeInput === "C" && empireInput === "A" && scaleInput >=2 && scaleInput < 5) {
    $("#language").text(" Klingon-style programmer.");
  }
  else if (timeInput === "C" && empireInput === "A" && scaleInput >= 0 && scaleInput < 2) {
    $("#language").text(" Borg-style programmer.");    
  }
  else if (timeInput === "C" && empireInput === "B" && scaleInput >= 9 && scaleInput <=10) {
    $("#language").text(" Ewok-style programmer.");
    }
  else if (timeInput === "C" && empireInput === "B" && scaleInput >=5 && scaleInput < 9) {
    $("#language").text(" Wookie-style Programmer.");
  }
  else if (timeInput === "C" && empireInput === "B" && scaleInput >=2 && scaleInput < 5) {
    $("#language").text(" Tattoine-style programmer.");
  }
  else if (timeInput === "C" && empireInput === "B" && scaleInput >= 0 && scaleInput < 2) {
    $("#language").text(" Storm Trooper-style programmer.");  
  }
  else if (timeInput === "B" && swordInput === "A" && scaleInput >= 9 && scaleInput <=10) {
    $("#language").text(" TMNT-style programmer like Leo.");
    }
  else if (timeInput === "B" && swordInput === "A" && scaleInput >=5 && scaleInput < 9) {
    $("#language").text(" TMNT-style programmer like moody Raphael.");
  }
  else if (timeInput === "B" && swordInput === "A" && scaleInput >=2 && scaleInput < 5) {
    $("#language").text(" TMNT-style programmer like Donny.");
  }
  else if (timeInput === "B" && swordInput === "A" && scaleInput >= 0 && scaleInput < 2) {
    $("#language").text(" TMNT-style programmer like Michelangelo.");  
  }  
  else if (timeInput === "B" && swordInput === "B" && scaleInput >= 9 && scaleInput <=10) {
    $("#language").text(" HP-style programmer like Dumbledore");
    }
  else if (timeInput === "B" && swordInput === "B" && scaleInput >=5 && scaleInput < 9) {
    $("#language").text(" HP-style programmer like Hermione.");
  }
  else if (timeInput === "B" && swordInput === "B" && scaleInput >=2 && scaleInput < 5) {
    $("#language").text(" HP-style programmer like a Weasley.");
  }
  else if (timeInput === "B" && swordInput === "B" && scaleInput >= 0 && scaleInput < 2) {
    $("#language").text(" HP-style programmer like Voldemort.");  
  }  
  else if (timeInput === "A" && throneInput === "A" && scaleInput >= 9 && scaleInput <=10) {
    $("#language").text(" Elven-style programmer.");
    }
  else if (timeInput === "A" && throneInput === "A" && scaleInput >=5 && scaleInput < 9) {
    $("#language").text(" Dwarven-style programmer.");
  }
  else if (timeInput === "A" && throneInput === "A" && scaleInput >=2 && scaleInput < 5) {
    $("#language").text(" Hobbit-style programmer.");
  }
  else if (timeInput === "A" && throneInput === "A" && scaleInput >= 0 && scaleInput < 2) {
    $("#language").text(" Wizard-style programmer.");  
  }  
  else if (timeInput === "A" && throneInput === "B" && scaleInput >= 9 && scaleInput <=10) {
    $("#language").text(" Stark-style programmer");
    }
  else if (timeInput === "A" && throneInput === "B" && scaleInput >=5 && scaleInput < 9) {
    $("#language").text(" Lannister-style programmer.");
  }
  else if (timeInput === "A" && throneInput === "B" && scaleInput >=2 && scaleInput < 5) {
    $("#language").text(" Baratheon-style programmer.");
  }
  else if (timeInput === "A" && throneInput === "B" && scaleInput >= 0 && scaleInput < 2) {
    $("#language").text(" Targaryen-style programmer.");  
  }
  
  else {
    alert("You did not insert properly, try harder!");
  }
$("#result").show();
    event.preventDefault();
  });
});
