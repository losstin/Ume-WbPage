// Get a reference to the search input element
const searchInput = document.getElementById('searchfield');

// Attach a 'keyup' event listener to the search input element
searchInput.addEventListener('input', function() {
  // Get the search term from the search input element
  const searchTerm = searchInput.value.toLowerCase();
  
  // Get a reference to all elements that contain 'h1' elements
  const allItems = document.querySelectorAll('#searchItem');
  
  // Reset the display style of all elements
  for (let i = 0; i < allItems.length; i++) {
    allItems[i].style.display = 'block';
  }
  
  // Loop through all elements and check if they or their 'h1' children contain the search term
  for (let i = 0; i < allItems.length; i++) {
    const itemText = allItems[i].textContent.toLowerCase();
    if (itemText.indexOf(searchTerm) === -1) {
      // Hide the element and its parent elements
      let parent = allItems[i].parentNode;
      let gparent = parent.parentNode;
      gparent.style.display = 'none';
    }
  }
});
