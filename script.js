// Debug: Log to console to confirm script loads
console.log('Script loaded!');
// Wait for DOM to be ready (helps if script runs early)
document.addEventListener('DOMContentLoaded', function() {
  const sapaButton = document.getElementById('sapaButton');
  
  if (sapaButton) {
    console.log('Button found! Adding event listener...');  // Debug log
    sapaButton.addEventListener('click', function() {
      alert('TERIMA KASIH SUDAH BERKUNJUNG!');
      console.log('Button clicked!');  // Debug log
    });
  } else {
    console.error('ERROR: Button with ID "sapaButton" not found! Check HTML ID.');  // This will show in console if issue
  }
});
