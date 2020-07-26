const imagesContainer = document.querySelector('.images-container')
const imageCount = document.querySelectorAll('.image').length
let currentImageIndex = 0

document.querySelectorAll('.image').forEach(function (image, index) {
    image.style.left = (index * 100) + '%'
})

document.querySelector('.left-arrow-container').addEventListener('click', function () {
    currentImageIndex--
    if (currentImageIndex === -1) {
        currentImageIndex = imageCount - 1
    }
    imagesContainer.style.left = (currentImageIndex * -100) + '%'
})

document.querySelector('.right-arrow-container').addEventListener('click', function () {
    currentImageIndex++
    if (currentImageIndex === imageCount) {
        currentImageIndex = 0
    }
    imagesContainer.style.left = (currentImageIndex * -100) + '%'
})