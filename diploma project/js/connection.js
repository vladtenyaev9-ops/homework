const checkbox = document.getElementById('connection__checkbox');
const button = document.getElementById('connection__new-button');

checkbox.addEventListener('change', function () {
  button.disabled = !this.checked;
});