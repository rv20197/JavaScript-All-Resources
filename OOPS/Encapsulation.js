var video = {
    video_name: "OOP Intro",
    file_format : "mp4",
    getvideoname: function () {
        return this.video_name
    },

    getfileformat: function(){
        return this.file_format
    }
}

console.log(video.getvideoname())
console.log(video.getfileformat())