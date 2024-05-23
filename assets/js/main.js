// Classes
// =============================================================================
class Helpers {
  static sendMessage(b64Address, subject) {
    const uri = `mailto:${atob(b64Address)}?subject=${encodeURI(subject)}`
    window.location.href = uri
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
