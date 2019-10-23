const playlistId = 'PLmZ5cJ593tKsQfinFg_OKSHIVmmyySNJA'
const key = 'AIzaSyDnXgwCxGMeIRDsXamctNG8YnzLmSEUgpU'
const maxResults = 15
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=id%2Csnippet&playlistId=${playlistId}&maxResults=${maxResults}&key=${key}`

fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    console.log(data)
    data.items.reverse()
    data.items.forEach(element => {
        let vidLink = `https://www.youtube.com/watch?v=${element.snippet.resourceId.videoId}`
        document.getElementById('videos').innerHTML += `
        <div class="videoItem">
            <h2>
                <a href="${vidLink}">${element.snippet.title}</a>
            </h2>
            <a href="${vidLink}">
                <img src="${element.snippet.thumbnails.medium.url}">
            </a>   
            <p style="white-space: pre-line;">
            ${element.snippet.description}
            </p>
        </div>
        `
    });
  })
  .catch(err => {
    console.log("Well that didn't work")
    console.log(err)
  })