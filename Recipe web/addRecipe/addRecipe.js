document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.querySelector(".menu-toggle");
  const navOverlay = document.querySelector(".nav-overlay");
  const cancelToggle = document.querySelector(".cancel-toggle");

 
  navOverlay.style.display = "none";

  menuToggle.addEventListener("click", function () {
    if (
      navOverlay.style.display === "none" ||
      navOverlay.style.display === ""
    ) {
      navOverlay.style.display = "flex";
    } else {
      navOverlay.style.display = "none";
    }
  });

  cancelToggle.addEventListener("click", function () {
    navOverlay.style.display = "none";
  });

  const navLinks = document.querySelectorAll(".nav-route a");

  navLinks.forEach(function (navLink) {
    navLink.addEventListener("click", function () {
      navOverlay.style.display = "none";
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var accountButton = document.querySelectorAll(".account-button");

  accountButton.forEach(function (button) {
    button.addEventListener("click", function () {
      var dropdownContent = this.nextElementSibling;
      dropdownContent.classList.toggle("show");
    });
  });

  var cancelToggle = document.querySelector(".cancel-toggle");
  var navOverlay = document.querySelector(".nav-overlay");

  cancelToggle.addEventListener("click", function () {
    navOverlay.style.display = "none";
  });

  var menuToggle = document.querySelector(".menu-toggle");
  var mobileNav = document.querySelector(".mobile-nav");

  menuToggle.addEventListener("click", function () {
    navOverlay.style.display = "flex";
  });
});

function rateRecipe(starCount) {
  const stars = document.querySelectorAll(".stars span");
  stars.forEach((star, index) => {
    if (index < starCount) {
      star.classList.add("selected");
    } else {
      star.classList.remove("selected");
    }
  });
}

const fileInput = document.getElementById("file");

fileInput.addEventListener("change", handleFileSelect);

function handleFileSelect(event) {
  const files = event.target.files;

  const filePreview = document.getElementById("file-preview");

  filePreview.innerHTML = "";

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const fileName = file.name;

    const img = document.createElement("img");
    img.setAttribute("alt", fileName);

    const reader = new FileReader();
    reader.onload = function (event) {
      img.src = event.target.result;
    };
    reader.readAsDataURL(file);

    img.style.width = "100px";
    img.style.height = "100px";
    img.style.marginRight = '10px'; 

    filePreview.appendChild(img);
  }
}


// Get the Add Ingredient button
const addIngredientBtn = document.querySelector('.add-ingredient');

// Add event listener for Add Ingredient button click
addIngredientBtn.addEventListener('click', () => {
  // Create a new ingredient input container
  const ingredientInputContainer = document.createElement('div');
  ingredientInputContainer.classList.add('ingredient-input');

  // Create a new ingredient input field
  const ingredientInput = document.createElement('input');
  ingredientInput.setAttribute('type', 'text');
  ingredientInput.setAttribute('placeholder', 'Add Ingredient');

  // Create a new cancel icon
  const cancelIcon = document.createElement('i');
  cancelIcon.classList.add('fas', 'fa-times', 'cancel-icon');
  
  // Add event listener for cancel icon click
  cancelIcon.addEventListener('click', () => {
    // Remove the ingredient input container when the cancel icon is clicked
    ingredientInputContainer.remove();
  });

  // Append the ingredient input and cancel icon to the ingredient input container
  ingredientInputContainer.appendChild(ingredientInput);
  ingredientInputContainer.appendChild(cancelIcon);

  // Get the Add Ingredient button and insert the new ingredient input container before it
  const addIngredientBtn = document.querySelector('.add-ingredient');
  addIngredientBtn.parentNode.insertBefore(ingredientInputContainer, addIngredientBtn);
});


// Get the Add Step button
const addStepBtn = document.querySelector('.add-step');

// Add event listener for Add Step button click
addStepBtn.addEventListener('click', () => {
  // Create a new step input container
  const stepInputContainer = document.createElement('div');
  stepInputContainer.classList.add('step-input');

  // Create a new step input field
  const stepInput = document.createElement('input');
  stepInput.setAttribute('type', 'text');
  stepInput.setAttribute('placeholder', 'Add Step');

  // Create a new cancel icon
  const cancelIcon = document.createElement('i');
  cancelIcon.classList.add('fas', 'fa-times', 'cancel-icon');
  
  // Add event listener for cancel icon click
  cancelIcon.addEventListener('click', () => {
    // Remove the step input container when the cancel icon is clicked
    stepInputContainer.remove();
  });

  // Append the step input and cancel icon to the step input container
  stepInputContainer.appendChild(stepInput);
  stepInputContainer.appendChild(cancelIcon);

  // Get the Add Step button and insert the new step input container before it
  const addStepBtn = document.querySelector('.add-step');
  addStepBtn.parentNode.insertBefore(stepInputContainer, addStepBtn);
});



// Function to handle adding a new set of nutrition input fields
function addNutritionInput() {
    // Create a new nutrition input container
    const nutritionInputContainer = document.createElement('div');
    nutritionInputContainer.classList.add('nutrition-inputs');
  
    // Create servings input field
    const servingsInput = document.createElement('input');
    servingsInput.setAttribute('type', 'text');
    servingsInput.setAttribute('placeholder', 'Servings per recipe');
  
    // Create calories input field
    const caloriesInput = document.createElement('input');
    caloriesInput.setAttribute('type', 'text');
    caloriesInput.setAttribute('placeholder', 'Calories');
  
    // Create a new nutrition values container
    const nutritionValuesContainer = document.createElement('div');
    nutritionValuesContainer.classList.add('nutrition-values');
  
    // Create nutrition value input fields
    const nutritionValueInput = document.createElement('input');
    nutritionValueInput.setAttribute('type', 'text');
    nutritionValueInput.classList.add('nutrition-values-one');
    nutritionValueInput.setAttribute('placeholder', 'Nutrition Value');

     // Add width to the nutrition value input field
  nutritionValueInput.style.width = '33%';
  
    const valueInput = document.createElement('input');
    valueInput.setAttribute('type', 'text');
    valueInput.classList.add('nutrition-values-two');
    valueInput.setAttribute('placeholder', 'Value');
    valueInput.style.width = '11%';
  
    const percentageInput = document.createElement('input');
    percentageInput.setAttribute('type', 'text');
    percentageInput.classList.add('nutrition-values-three');
    percentageInput.setAttribute('placeholder', '%');
    percentageInput.style.width = '11%';
  
    // Create a new cancel icon
    const cancelIcon = document.createElement('i');
    cancelIcon.classList.add('fas', 'fa-times', 'cancel-icon');
    
    // Add event listener for cancel icon click
    cancelIcon.addEventListener('click', () => {
      // Remove the nutrition input container when the cancel icon is clicked
      nutritionInputContainer.remove();
    });
  
    // Append the nutrition input fields, values, and cancel icon to the nutrition input container
    nutritionInputContainer.appendChild(servingsInput);
    nutritionInputContainer.appendChild(caloriesInput);
    nutritionValuesContainer.appendChild(nutritionValueInput);
    nutritionValuesContainer.appendChild(valueInput);
    nutritionValuesContainer.appendChild(percentageInput);
    nutritionInputContainer.appendChild(nutritionValuesContainer);
    nutritionInputContainer.appendChild(cancelIcon);
  
    // Get the Add Nutrition button and insert the new nutrition input container before it
    const addNutritionBtn = document.querySelector('.add-nutrition');
    addNutritionBtn.parentNode.insertBefore(nutritionInputContainer, addNutritionBtn);
  }
  
  // Get the Add Nutrition button and add event listener for click
  const addNutritionBtn = document.querySelector('.add-nutrition');
  addNutritionBtn.addEventListener('click', addNutritionInput);
  