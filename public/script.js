document.addEventListener("DOMContentLoaded", function() {
    const helpButton = document.getElementById("helpButton");
    const helpCenter = document.getElementById("helpCenter");

    let helpMessageOn = false;

    helpButton.addEventListener("click", function() {
        console.log("Button Clicked");
        if (helpMessageOn) {
            helpCenter.style.display = "none";
            helpMessageOn = false;
        } else {
            helpCenter.textContent = "Click choose file to select a new profile photo from your device. Then press Change Photo to apply your selected image.";
            helpCenter.style.display = "block";
            helpMessageOn = true;
        }
    });
});