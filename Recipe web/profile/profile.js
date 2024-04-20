document.addEventListener("DOMContentLoaded", function() {
    var accountButton = document.querySelectorAll(".account-button");
  
    accountButton.forEach(function(button) {
      button.addEventListener("click", function() {
        var dropdownContent = this.nextElementSibling;
        dropdownContent.classList.toggle("show");
      });
    });
  
    var cancelToggle = document.querySelector(".cancel-toggle");
    var navOverlay = document.querySelector(".nav-overlay");
  
    cancelToggle.addEventListener("click", function() {
      navOverlay.style.display = "none";
    });
  
    var menuToggle = document.querySelector(".menu-toggle");
    var mobileNav = document.querySelector(".mobile-nav");
  
    menuToggle.addEventListener("click", function() {
      navOverlay.style.display = "flex";
    });
  });
  

  // Get the Add Ingredient button
const addRecipeBtn = document.querySelector('.add-recipe');

// Add event listener for Add Ingredient button click
addRecipeBtn.addEventListener('click', () => {
  // Create a new ingredient input container
  const ingredientInputContainer = document.createElement('div');
  ingredientInputContainer.classList.add('ingredient-input');

  // Create a new ingredient input field
  const ingredientInput = document.createElement('input');
  ingredientInput.setAttribute('type', 'text');
  ingredientInput.setAttribute('placeholder', '');

  // Create a new cancel icon
  const cancelIcon = document.createElement('i');
  cancelIcon.classList.add('fas', 'fa-times', 'cancel-icon' , 'fa-edit', 'edit-icon');
  
  // Add event listener for cancel icon click
  cancelIcon.addEventListener('click', () => {
    // Remove the ingredient input container when the cancel icon is clicked
    ingredientInputContainer.remove();
  });

  // Append the ingredient input and cancel icon to the ingredient input container
  ingredientInputContainer.appendChild(ingredientInput);
  ingredientInputContainer.appendChild(cancelIcon);

  // Get the Add Ingredient button and insert the new ingredient input container before it
  const addRecipeBtn = document.querySelector('.add-recipe');
  addRecipeBtn.parentNode.insertBefore(ingredientInputContainer, addRecipeBtn);
});
