const imagesContainer = document.querySelector('.images-container')
const navigation = document.querySelector('.navigation')
const imageCount = document.querySelectorAll('.image-container').length
let imageContainerPosition = 0
let currentImageIndex = 0

document.querySelectorAll('.image-container').forEach(function (imageContainer, index) {
    const navigationCircle = document.createElement('span')
    navigationCircle.className = 'navigation-circle'
    navigationCircle.addEventListener('click', function() {
        imageJump(index)
    })
    navigation.appendChild(navigationCircle)
    if (index === 0) {
        navigationCircle.classList.add('navigation-circle-active')
    }
    imageContainer.style.left = (index * 100) + '%'
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
    const currentImageContainer = imagesContainer.querySelector(`.image-container:nth-child(${currentImageIndex + 1})`)
    const currentImageNavigationCircle = navigation.querySelector(`.navigation-circle:nth-child(${currentImageIndex + 1})`)
    const lastNavigationCircleActive = navigation.querySelector('.navigation-circle-active')
    lastNavigationCircleActive.classList.remove('navigation-circle-active')
    currentImageNavigationCircle.classList.add('navigation-circle-active')
    currentImageContainer.style.left = (imageContainerPosition * -100) + '%'
    imagesContainer.style.left = (imageContainerPosition * 100) + '%'
}

function imageJump (navigationCircleIndex) {
    currentImageIndex = navigationCircleIndex
    if (imageContainerPosition = currentImageIndex) {
        imageContainerPosition = currentImageIndex
    }

     else if (imageContainerPosition > currentImageIndex) {
        imageContainerPosition = currentImageIndex + imageCount
    }

    else if (imageContainerPosition < currentImageIndex) {
        imageContainerPosition = currentImageIndex + imageCount
    }

    slideImages()
}
 