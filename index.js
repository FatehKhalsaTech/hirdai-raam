
const {buildApiUrl} = banidb;
const {unicode} = anvaad;
function debounceFetch(urlBuilder, delay = 300) {
  let timer = null;
  let controller = null;
  let pendingReject = null;

  return function(...args) {
    // cancel prior
    if (timer) {
      clearTimeout(timer);
      controller.abort();
      pendingReject({ name: 'AbortError', message: 'Request canceled' });
    }

    controller = new AbortController();
    const signal = controller.signal;

    const promise = new Promise((resolve, reject) => {
      pendingReject = reject;
      timer = setTimeout(() => {
        timer = null;
        const url = urlBuilder(...args);
        fetch(url, { signal })
          .then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.json();
          })
          .then(data => resolve(data))
          .catch(err => reject(err));
      }, delay);
    });

    return promise;
  };
}

const buildSearchURL = (query) => {
  const url = encodeURI(buildApiUrl({
    q: query,
    results: 50
  }))

  return url
}

const debouncedSearch = debounceFetch(buildSearchURL, 500)

const createResult = (data) => {
  const newElement = document.createElement('blockquote')
  newElement.textContent = data.verse.unicode;
  newElement.id = data.verse.id
  newElement.onclick = () => {
    fetchShbd(data.verse.id).then(
      shbd => createShabad(shbd)
    )
  }
  return newElement
}

const createPanktee = (data) => {
  const newElement = document.createElement('blockquote')
  newElement.textContent = data.gurmukhi
  newElement.id = data.verseID
  newElement.classList.add('blacked-out')
  newElement.onclick = function() {
    this.classList.toggle('blacked-out')
  }
  return newElement
}
const createShabad = (data) => {
  const shabadArea = document.getElementById("shbd")
  data.forEach(line => {
    shabadArea.appendChild(createPanktee(line))
  })
}
const fetchShbd = (id) => {
  const url = encodeURI(buildApiUrl({id}))

  return fetch(url)
    .then(res => res.json())
    .then(jsonRes => {
      return remapShabad(jsonRes)
    })
}
const remapShabad = (shabad) => {
  return shabad.verses.map( remapVerse )
}
const remapVerse = (line) => {
  const { verseId: verseID, verse, visraam } = line

  return {
    verseID,
    gurmukhi: verse.unicode,
    visraam,
  }
}
const input = document.getElementById('q')
const output = document.getElementById('out')
input.addEventListener('input', () => {
  const q = input.value.trim()

  if(!q || q.length < 3) {
    output.innerHTML = ""
    return
  }

  input.value = unicode(input.value)
  output.textContent = 'Loading...'

  debouncedSearch(q)
    .then((res) => {
      return res.verses.map(result => ({
        info: {
          source: result.source.unicode,
          writer: result.writer.unicode,
          raag: result.raag.unicode
        },
        verse: {
          gurmukhi: result.larivaar.gurmukhi,
          unicode: result.larivaar.unicode,
          verseId: result.verseId,
          id: result.shabadId
        }
      }))
    })
    .then(data => {
      output.textContent = ''
      data.forEach(res => {
        output.appendChild(createResult(res))
      })
    })
    .catch(err => {
      if (err.name === "AbortError") {
        return;
      }
      output.textContent = `Error: ${err.message}`
    })
})
