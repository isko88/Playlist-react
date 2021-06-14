export interface ISongPayload {
    name: String,
    artists: String,
    uploadDate: String,
    mediaUrl: String
}

export interface IPlaylistPayload {
    name: String,
    creationDate: String,
    author: String,
    songs: String[]
}