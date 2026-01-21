import axios from 'axios';
interface FullAlbum {}

const PHOTOS_URL = 'https://jsonplaceholder.typicode.com/photos';
const ALBUMS_URL = 'https://jsonplaceholder.typicode.com/albums';

export async function mapPhotoToAlbum(userIds?: number[]){
    const responsePhoto = await axios.get(PHOTOS_URL)
    const responseAlubums = await axios.get(ALBUMS_URL)
    
}
