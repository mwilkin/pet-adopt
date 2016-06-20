// backend
var newAnimalInputs = [];
function Friend(petName,petAge,petNotes,petType,petEnergy) {
  this.petName = name;
  this.petAge = age;
  this.petNotes = notes;
  this.petType = type;
  this.petEnergy = energy;
}

Friend.prototype.newAnimal = function() {
  return this.petName + this.petAge + this.petNotes + this.petType
  this.petEnergy;
}

// frontend
$(document).ready(function() {
  $("#add-friend").click(function(event) {
    $("#new-friend").submit();
    event.preventDefault();

    $.each($("input"),function() {
      newAnimalInputs.push($(this).val());
    $.each($("select"),function() {
      newAnimalInputs.push($(this).val());
    });

    $("#petType").append(newAnimalInputs[3]);
    $("#petName").append(newAnimalInputs[0]);
    $("#petAge").append(newAnimalInputs[1]);
    debugger;
    $("#petBio").text(newAnimalInputs[2]);
    $("#energyLevel").text(newAnimalInputs[4]);
    // var newAnimalInputs = [];
    // newAnimalInputs.join(" , ");
    // newAnimalSelects.join(" , ");

    // var newFriend = new Friend(newAnimalInputs,newAnimalSelects);
    // "<div class='col-sm-3'" + this.petType + "">
    // <img src="img/kitten1.jpg">
    // <h2>Sahalie</h2>
    // <div id="bill">
    // <p>Age: 10</p>
    // <p> Bill is a really pleasant older gentleman. He loves to sit on the couch with you and cuddle in the mornings!.</p>
    // </div>
    // </div>
  });
});
});
