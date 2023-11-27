document.getElementById('registerBtn').addEventListener('click', function() {
    window.location.href = 'register.html'; 
});

document.getElementById('registerBtn').addEventListener('mouseover', function() {
    this.style.transform = 'scale(1.1)';
    this.style.transition = 'transform 0.3s ease';
});

document.getElementById('registerBtn').addEventListener('mouseout', function() {
    this.style.transform = 'scale(1)';
});
