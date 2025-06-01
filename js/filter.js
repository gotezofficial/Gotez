// JavaScript to fix mobile filter toggle functionality
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mainNav = document.getElementById('main-nav');
  
  if (mobileMenuBtn && mainNav) {
    mobileMenuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
      this.classList.toggle('active');
    });
  }
  
  // Filter toggle for mobile
  const filterToggleBtn = document.getElementById('filter-toggle-mobile');
  const filtersContent = document.getElementById('filters-content');
  
  if (filterToggleBtn && filtersContent) {
    filterToggleBtn.addEventListener('click', function() {
      filtersContent.classList.toggle('active');
      this.classList.toggle('active');
      
      // Change icon based on state
      const icon = this.querySelector('i');
      if (icon) {
        if (filtersContent.classList.contains('active')) {
          icon.className = 'fas fa-times';
        } else {
          icon.className = 'fas fa-filter';
        }
      }
    });
  }
  
  // Collapsible filter groups
  const filterTitles = document.querySelectorAll('.filter-title');
  
  filterTitles.forEach(title => {
    title.addEventListener('click', function() {
      this.classList.toggle('active');
      const options = this.nextElementSibling;
      if (options) {
        options.classList.toggle('collapsed');
      }
    });
  });
  
  // Initialize product filters
  initializeFilters();
});

// Function to initialize product filters
function initializeFilters() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryParam = urlParams.get('category');
  const genderParam = urlParams.get('gender');
  
  // Apply category filter if present in URL
  if (categoryParam) {
    const categoryCheckboxes = document.querySelectorAll('input[name="category"]');
    categoryCheckboxes.forEach(checkbox => {
      if (checkbox.value === categoryParam) {
        checkbox.checked = true;
      }
    });
  }
  
  // Apply gender filter if present in URL
  if (genderParam) {
    const genderCheckboxes = document.querySelectorAll('input[name="gender"]');
    genderCheckboxes.forEach(checkbox => {
      if (checkbox.value === genderParam) {
        checkbox.checked = true;
      }
    });
  }
  
  // Filter apply button
  const applyFilterBtn = document.querySelector('.filter-apply-btn');
  if (applyFilterBtn) {
    applyFilterBtn.addEventListener('click', applyFilters);
  }
  
  // Filter clear button
  const clearFilterBtn = document.querySelector('.filter-clear-btn');
  if (clearFilterBtn) {
    clearFilterBtn.addEventListener('click', clearFilters);
  }
}

// Function to apply selected filters
function applyFilters() {
  // This would typically update the product display based on selected filters
  // For now, we'll just show an alert
  alert('Filters applied! In a real implementation, this would filter the products.');
}

// Function to clear all filters
function clearFilters() {
  const allCheckboxes = document.querySelectorAll('.filter-option input[type="checkbox"]');
  allCheckboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
  
  // This would typically reset the product display
  alert('Filters cleared! In a real implementation, this would reset the product display.');
}
