"use strict";
document.addEventListener("DOMContentLoaded", function () {
  var copyBtn = document.querySelector(".copy_btn");
  var copyText = document.querySelector(".copy_text");

  copyBtn.addEventListener("click", function () {
    // Your copy logic goes here
    // For now, let's just update the copy_text content
    copyText.textContent = "Copied!!";

    // Set a timeout to make the "Copied" text disappear after 2000 milliseconds (2 seconds)
    setTimeout(function () {
      copyText.textContent = "";
    }, 250);
  });
});

