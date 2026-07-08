function initGallery(out, list, btnPrev, btnNext, info) {
  function fadeCurrentSlide() {
    out.classList.add("hidden")
  }
  function revFadeCurrentSlide() {
    out.classList.remove("hidden")
  }
  function updatePhoto(file) {
    fadeCurrentSlide()

    setTimeout(() => {
      out.querySelector("img").src = `/assets/img/photos/${file}`
      info.innerText = `Photo ${curIdx + 1} of ${maxIdx + 1}`
      revFadeCurrentSlide()
    }, 500)
  }

  let   curIdx = 0
  const maxIdx = list.length - 1

  btnPrev.addEventListener("click", ev => {
    ev.preventDefault()

    if (curIdx == 0) {
      curIdx = maxIdx
    } else {
      curIdx = curIdx - 1
    }

    updatePhoto(list[curIdx])
  })

  btnNext.addEventListener("click", ev => {
    ev.preventDefault()

    if (curIdx == maxIdx) {
      curIdx = 0
    } else {
      curIdx = curIdx + 1
    }

    updatePhoto(list[curIdx])
  })

  updatePhoto(list[0])
}
