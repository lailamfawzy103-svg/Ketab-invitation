/* =========================================================
   ELEMENTS
========================================================= */

const openButton =
  document.getElementById("openButton");

const invitationStage =
  document.getElementById("invitationStage");


/* =========================================================
   STATE
========================================================= */

let opened = false;


/* =========================================================
   OPEN INVITATION
========================================================= */

openButton.addEventListener("click", function () {

  // Prevent opening more than once
  if (opened) return;

  opened = true;

  // Start the opening animation
  invitationStage.classList.add("opened");

});
