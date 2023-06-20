// Object to hold the rates for each category
const categoryRates = {
    category1: 10,
    category2: 20,
    category3: 30,
    category4: 40,
  };
  
  // Function to calculate the total based on the category inputs
  function calculateTotal() {
    // Get the category input values
    const category1Value = parseFloat(document.getElementById('category1-input').value) || 0;
    const category2Value = parseFloat(document.getElementById('category2-input').value) || 0;
    const category3Value = parseFloat(document.getElementById('category3-input').value) || 0;
    const category4Value = parseFloat(document.getElementById('category4-input').value) || 0;
  
    // Calculate the total
    const total = (category1Value * categoryRates.category1) +
                  (category2Value * categoryRates.category2) +
                  (category3Value * categoryRates.category3) +
                  (category4Value * categoryRates.category4);
  
    // Update the total text
    document.getElementById('total-text').textContent = `$${total.toFixed(2)}`;
  }
  
  // Add event listeners to category inputs
  const categoryInputs = document.getElementsByClassName('category-input');
  for (let i = 0; i < categoryInputs.length; i++) {
    categoryInputs[i].addEventListener('input', calculateTotal);
  }
  
  // Initial calculation when the page loads
  calculateTotal();
  