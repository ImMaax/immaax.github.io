// Classes
// =============================================================================
class Helpers {
  static sendMessage(b64Address, subject) {
    const uri = `mailto:${atob(b64Address)}?subject=${encodeURI(subject)}`
    window.location.href = uri
  }

  static fade(element, duration) { // modified function from stack overflow
    (function increment(value = 0) {
        element.style.opacity = String(value)
        if (element.style.opacity !== "1") {
            setTimeout(() => {
                increment(value + 0.01)
            }, duration / 100)
        }
    })()
  }
}

class Gallery {
  #root
  #data

  constructor(root, data) {
    this.#root = root
    this.#data = data

    this.#buildNavigation()
  }

  #linkClickHandler(ev) {
    ev.preventDefault()
    const param = (ev.target.getAttribute("data-params") ?? null)
    this.updatePage(this[ev.target.getAttribute("data-action")](param))
  }

  registerLink(el) {
    el.addEventListener("click", (ev) => this.#linkClickHandler(ev))
  }

  updatePage(content) {
    Helpers.fade(this.#root.querySelector("#gallery-column-two"), 500)
    this.#root.querySelector("#gallery-column-two").innerText = ""
    this.#root.querySelector("#gallery-column-two").appendChild(content)
  }

  #buildNavigation() {
    const list = document.createElement("ul")
    const albums = this.#data["albums"]

    for (let id in albums) {
      const li = document.createElement("li")
      const a  = document.createElement("a")

      a.href = "#"
      a.innerText = albums[id]["title"]
      a.setAttribute("data-action", "album")
      a.setAttribute("data-params", id)
      this.registerLink(a)

      li.appendChild(a)
      list.appendChild(li)
    }

    const domAlbums = this.#root.querySelector("#gallery-albums")
    domAlbums.innerText = ""
    domAlbums.appendChild(list)
  }

  // ACTIONS
  // ===========================================================================
  album(id) {
    const div = document.createElement("div")
    div.classList.add("gallery")

    const result = this.#data["albums"][id]
    result["pictures"].forEach(picture => {
      const a   = document.createElement("a")
      const img = document.createElement("img")
      img.classList.add("photo")
      img.src = `/assets/img/photos/${picture["file"]}`
      a.href = "#"
      const options = `${picture["file"]};${picture["title"]};${picture["flickr"]}`
      // the data-* attrs need to be duplicated due to how event targets work
      a.setAttribute("data-action", "photo")
      a.setAttribute("data-params", options)
      img.setAttribute("data-action", "photo")
      img.setAttribute("data-params", options)
      this.registerLink(a)

      a.appendChild(img)
      div.appendChild(a)
    })

    return div
  }

  photo(options) {
    const params = options.split(";")

    const div = document.createElement("div")
    const h4  = document.createElement("h4")
    const img = document.createElement("img")
    const p   = document.createElement("p")
    const a   = document.createElement("a")

    h4.innerText = params[1]
    img.classList.add("photo")
    img.src = `/assets/img/photos/${params[0]}`
    a.href = `https://flickr.com/photos/im4x/${params[2]}`
    a.target = "_blank"
    a.innerText = "View more info on Flickr..."

    p.appendChild(a)
    div.appendChild(h4)
    div.appendChild(img)
    div.appendChild(p)
    return div
  }
}

class SearchField {
  #input
  #output
  #urls

  constructor(input, output) {
    this.#input  = input
    this.#output = output
  }

  async init() {
    try {
      this.#urls = await this.#getUrls()
    } catch (error) {
      this.#output.innerHTML = "<p class='info'>Error requesting search data!</p>"
    }

    if (this.#urls) {
      this.#assignInputHandler()
      this.#input.placeholder = "Search..."
      this.#input.disabled = false
    }
  }

  async #getUrls() {
    let res = await fetch("/search/search.json")
    return res.json()
  }

  #updateSearchList(results) {
    let all = ""
    if (results.length > 0) {
      all = "<ul>"
      results.forEach(result => {
        all += `<li><a href='${result.url}'>${result.title}</a><br>${result.description}</li>`
      })
      all += "</ul>"
    } else {
      all = "<p class='info'>No results found!</p>"
    }

    this.#output.innerHTML = all
  }

  #assignInputHandler() {
    this.#input.onkeyup = () => {
      let query = this.#input.value.toLowerCase()

      if (query.trim()) {
        let results = []

        for (const category in this.#urls) {
          results = results.concat(this.#urls[category].filter(entry => {
            let entryTitle = entry.title.toLowerCase()
            return entryTitle.includes(query)
          }))
        }

        this.#updateSearchList(results)
      } else {
        this.#updateSearchList([])
      }
    }
  }
}

// Events
// =============================================================================
window.onload = () => {
  document.querySelectorAll("pre").forEach(item => {
    let content = item.innerText
    let initText = "Copy this snippet"
    let copyBtn = document.createElement("a")

    copyBtn.innerText = initText
    copyBtn.href = "javascript:void(0)"
    copyBtn.classList.add("copybtn")

    copyBtn.onclick = (event) => {
      event.preventDefault()
      navigator.clipboard.writeText(content).then(() => {
        copyBtn.innerText = "Copied!"
        setTimeout(() => {
          copyBtn.innerText = initText
        }, 2000)
      }, (err) => {
        console.error(err)
      })
    }

    item.parentNode.insertBefore(copyBtn, item.nextSibling)
  })

  document.querySelectorAll("img.photo").forEach(item => {
    item.oncontextmenu = (event) => {
      let warning = document.createElement("p")
      warning.classList.add("warning")
      warning.innerText = `
      All photos on my website are subject to copyright law!
      They may not be reproduced or republished in any way, shape or form without my written consent.
      The copies published on this website were deliberately reduced in quality so that they are useless for reproduction.
      Please contact me if you are interested in licensing.`.trim()
      document.querySelector("header").appendChild(warning)
      warning.scrollIntoView()

      setTimeout(() => {
        warning.remove()
      }, 8000)
    }
  })
}
