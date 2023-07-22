let playlist = [];


function getPlaylist() {
    return playlist;
}

function addSong(title, artists, album){
    playlist.push({
        id: playlist.length + 1,
        title: title,
        artists: artists,
        album: album,
        count: 0
    })
    return playlist;
}

function getSong(id){
    let getSongId =  playlist.filter(song => song.id === parseInt(id));
    return getSongId;
}

function playSong(id){
    let getSongId = playlist.filter(song => song.id === parseInt(id));
    getSongId[0].count += 1;

    return getSongId;
}

function mostPlayed(){
    let sorted = playlist.sort(sort_by(count, true, parseInt));
    return sorted;
}


module.exports = {playlist, getPlaylist, addSong, getSong, playSong, mostPlayed};