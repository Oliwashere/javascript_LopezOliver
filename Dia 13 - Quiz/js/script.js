document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('crud-form');
    const dataContainer = document.getElementById('data-container');
    let data = localStorage.getItem('data') ? JSON.parse(localStorage.getItem('data')) : [];
});
  