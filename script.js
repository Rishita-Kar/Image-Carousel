const imagesContainer = document.querySelector('.images-container')
const imageCount = document.querySelectorAll('.image').length
let imageContainerPosition = 0
let currentImageIndex = 0

document.querySelectorAll('.image').forEach(function (image, index) {
    image.style.left = (index * 100) + '%'
})

document.querySelector('.left-arrow-container').addEventListener('click', function () {
    imageContainerPosition--
    currentImageIndex--
    if (currentImageIndex === -1) {
        currentImageIndex = imageCount - 1
    }
    slideImages()
})

document.querySelector('.right-arrow-container').addEventListener('click', function () {
    imageContainerPosition++
    currentImageIndex++
    if (currentImageIndex === imageCount) {
        currentImageIndex = 0
    }
    slideImages()
})

function slideImages () {
    const currentImage = imagesContainer.querySelector(`.image:nth-child(${currentImageIndex + 1})`)
    currentImage.style.left = (imageContainerPosition * -100) + '%'
    imagesContainer.style.left = (imageContainerPosition * 100) + '%'
}