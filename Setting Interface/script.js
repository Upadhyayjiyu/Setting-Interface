document.getElementById('themeSelect').addEventListener('change', function () {
  if (this.value === 'dark') {
    document.body.style.background = '#111';
    document.body.style.color = '#eee';
  } else {
    document.body.style.background = "url('https://images.unsplash.com/photo-1612832021074-2bb3e4b4980c') no-repeat center center/cover";
    document.body.style.color = '#fff';
  }
});