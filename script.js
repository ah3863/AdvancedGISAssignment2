$(document).ready(function() {

    // Reveal the answer when the button is clicked
    $(".reveal-answer").click(function() {
      $(this).next(".answer").slideDown();
      $(this).prop("disabled", true); // Disable button after it's clicked
    });
  });

git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/ah3863/AdvancedGISAssignment2.git
git push -u origin main
