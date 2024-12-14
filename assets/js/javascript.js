function galleryFade(images, interval) {
  let currentIndex = 0

  function changeImage() {
    images[currentIndex].classList.remove("active")
    currentIndex = (currentIndex + 1) % images.length
    images[currentIndex].classList.add("active")
  }

  images[currentIndex].classList.add("active")
  setInterval(changeImage, interval * 1000)
}

function prepareFullscreen() {
  const gridItems = document.querySelectorAll(".album-grid-item")
  const fullscreenView = document.getElementById("fullscreen-view")
  const fullscreenImg = document.getElementById("fullscreen-img")
  const fullscreenCaption = document.getElementById("fullscreen-caption")
  const closeButton = document.getElementById("close-btn")
  const prevButton = document.getElementById("prev-btn")
  const nextButton = document.getElementById("next-btn")

  let currentIndex = 0

  const images = Array.from(gridItems).map(item => ({
    src: item.querySelector("img").src,
    caption: item.getAttribute("data-caption")
  }))

  function openFullscreen(index) {
    currentIndex = index
    fullscreenImg.src = images[currentIndex].src
    fullscreenCaption.textContent = images[currentIndex].caption
    fullscreenView.classList.add("show")
  }

  function closeFullscreen() {
    fullscreenView.classList.remove("show")
  }

  function changeImage(direction) {
    currentIndex = (currentIndex + direction + images.length) % images.length
    fullscreenImg.src = images[currentIndex].src
    fullscreenCaption.textContent = images[currentIndex].caption
  }

  gridItems.forEach((item, index) => {
    item.addEventListener("click", () => openFullscreen(index))
  })

  closeButton.addEventListener("click", closeFullscreen)
  prevButton.addEventListener("click", () => changeImage(-1))
  nextButton.addEventListener("click", () => changeImage(1))

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeFullscreen()
    } else if (event.key === "ArrowLeft") {
      changeImage(-1)
    } else if (event.key === "ArrowRight") {
      changeImage(1)
    }
  })
}

window.addEventListener("load", () => {
  const images = document.querySelectorAll(".fade-image")
  if (images.length > 0) galleryFade(images, 5)

  const fullscreen = document.querySelectorAll(".fullscreen")
  if (fullscreen.length > 0) prepareFullscreen()
})
