// backend
var animal = "";
function AddFriend(petName,petAge,petNotes,petType,petEnergy) {
  this.petName = name;
  this.petAge = age;
  this.petNotes = notes;
  this.petType = type;
  this.petEnergy = energy;
}

AddFriend.prototype.newAnimal = function() {
  return this.petName + this.petAge + this.petNotes + this.petType
  this.petEnergy;
}



// frontend
$(document).ready(function() {
  $("#add-friend").click(function(event) {
    $("#new-friend").submit();
    event.preventDefault();

    var newAnimalInputs = [];
    $.each($("input"),function() {
      newAnimalInputs.push($(this).val());
    });
    var newAnimalSelects =[];
    $.each($("select"),function() {
      newAnimalSelects.push($(this).val());
    });
    newAnimalInputs.join(" , ");
    newAnimalSelects.join(" , ");


    var newFriend = new AddFriend(newAnimalInputs,newAnimalSelects);
    debugger;
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
