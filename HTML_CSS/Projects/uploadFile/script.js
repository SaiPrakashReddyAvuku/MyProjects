// Get elements
const imageInput = document.getElementById('imageInput');
const previewImg = document.getElementById('previewImg');
const imagePreview = document.getElementById('imagePreview');

// Add event listener
imageInput.addEventListener('change', function () {
    const file = imageInput.files[0];
    
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function (e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
        };
        
        reader.readAsDataURL(file);
    } else {
        previewImg.style.display = 'none';
    }
});
