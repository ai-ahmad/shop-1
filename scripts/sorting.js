// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function () {
    // Get references to the buttons and dropdown menus
    const priceButton = document.getElementById("dropdownHelperButton");
    const priceDropdown = document.getElementById("dropdownHelper");
  
    const categoryButton = document.querySelector("[data-dropdown-toggle='dropdownHe']");
    const categoryDropdown = document.getElementById("dropdownHe");
  
    const colorButton = document.querySelector("[data-dropdown-toggle='dropdownCo']");
    const colorDropdown = document.getElementById("dropdownCo");
  
    // Event listeners for the price dropdown
    priceButton.addEventListener("click", function () {
      priceDropdown.classList.toggle("hidden");
    });
  
    // Event listeners for the category dropdown
    categoryButton.addEventListener("click", function () {
      categoryDropdown.classList.toggle("hidden");
    });
  
    // Event listeners for the color dropdown
    colorButton.addEventListener("click", function () {
      colorDropdown.classList.toggle("hidden");
    });
  
    // Event listener to close the dropdown menus when clicking outside
    document.addEventListener("click", function (event) {
      if (!event.target.matches("[data-dropdown-toggle]")) {
        const dropdowns = document.getElementsByClassName("dropdown-content");
        for (const dropdown of dropdowns) {
          if (!dropdown.classList.contains("hidden")) {
            dropdown.classList.add("hidden");
          }
        }
      }
    });
  
    // Event listener to handle the range input value change
    const priceRange = document.getElementById("price-range");
    const priceValue = document.getElementById("price-value");
  
    priceRange.addEventListener("input", function () {
      priceValue.textContent = priceRange.value;
      // Add your specific actions here based on the price range value
    });
  
    // Event listener to handle category checkbox changes
    const categoryCheckboxes = document.querySelectorAll("[type='checkbox'][id^='vue-checkbox']");
  
    categoryCheckboxes.forEach((checkbox) => {
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          console.log(checkbox.labels[0].textContent + " checkbox is checked!");
          // Add your specific actions here when a category checkbox is checked
        } else {
          console.log(checkbox.labels[0].textContent + " checkbox is unchecked!");
          // Add your specific actions here when a category checkbox is unchecked
        }
      });
    });
  
    // Event listener to handle color selection
    const colorItems = document.querySelectorAll("[data-color]");
  
    colorItems.forEach((item) => {
      item.addEventListener("click", function () {
        const selectedColor = item.dataset.color;
        console.log("Selected color: " + selectedColor);
        // Add your specific actions here based on the selected color
      });
    });
  });
  