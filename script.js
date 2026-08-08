const invitationStage =
  document.getElementById("invitationStage");

const openButton =
  document.getElementById("openButton");

let opened = false;


openButton.addEventListener("click", function () {

  if (opened) return;

  opened = true;

  invitationStage.classList.add("opened");

});
