// Replace ./data.json with your JSON feed
const url = 'https://www.googleapis.com/youtube/v3/playlistItems?part=id%2C%20snippet&playlistId=PLmZ5cJ593tKsQfinFg_OKSHIVmmyySNJA&maxResults=15&order=date&key=AIzaSyDnXgwCxGMeIRDsXamctNG8YnzLmSEUgpU'
fetch(url)
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
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
            <p>
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