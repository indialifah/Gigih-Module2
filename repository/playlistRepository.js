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

// function mostPlayed(){
//     let sortedSongs = playlist.sort((a,b) => {
//         return a.count - b.count;
//     })
//     return sortedSongs;
// }


module.exports = {playlist, getPlaylist, addSong, getSong, playSong};