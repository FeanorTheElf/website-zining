function centerVideo(video_element) {
    const width = video_element.videoWidth;
    const height = video_element.videoHeight;
    video_element.style.left = -Math.floor((width - height) * 50 / height) + "%";
}

function setupVideos() {
    let last_shown_video = null;
    for (let video_element of document.getElementsByClassName("circular-video")) {
        video_element.addEventListener("loadedmetadata", function (_e) {
            centerVideo(video_element);
        }, false);
        video_element.src = video_element.dataset.videoUrl;
        video_element.parentElement.onclick = function(_e) {
            if (last_shown_video != null) {
                last_shown_video.pause();
                last_shown_video.parentElement.classList.remove("animate-video-grow");
                last_shown_video.parentElement.classList.add("animate-video-shrink");
            }
            if (last_shown_video != video_element) {
                video_element.parentElement.classList.remove("animate-video-shrink");
                video_element.parentElement.classList.add("animate-video-grow");
                video_element.play();
                last_shown_video = video_element;
            } else {
                last_shown_video = null;
            }
        }
    }
}
setupVideos();