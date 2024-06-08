document.addEventListener('DOMContentLoaded', function() {
    fetch('videos.json')
        .then(response => response.json())
        .then(data => displayVideos(data))
        .catch(error => console.error('Error fetching data:', error));

    function displayVideos(videos) {
        const liveStreams = videos.filter(video => video.type === 'live');
        const shorts = videos.filter(video => video.type === 'short');
        const regularVideos = videos.filter(video => video.type === 'regular');

        const liveStreamContainer = document.querySelector('#live-streams .video-container');
        const shortsContainer = document.querySelector('#shorts .video-container');
        const videosContainer = document.querySelector('#videos .video-container');

        liveStreams.forEach(video => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="video-embed">
                    <iframe width="100%" height="auto" src="${video.embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <a href="${video.url}">Watch on External Site</a>
            `;
            liveStreamContainer.appendChild(div);
        });

        shorts.forEach(video => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="video-embed">
                    <iframe width="100%" height="auto" src="${video.embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <a href="${video.url}">Watch on External Site</a>
            `;
            shortsContainer.appendChild(div);
        });

        regularVideos.forEach(video => {
            const div = document.createElement('div');
            div.innerHTML = `
                <div class="video-embed">
                    <iframe width="100%" height="auto" src="${video.embedUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <a href="${video.url}">Watch on External Site</a>
            `;
            videosContainer.appendChild(div);
        });
    }
});