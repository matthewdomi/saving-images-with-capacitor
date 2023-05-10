import { useState } from "react"
import {Photo} from '../types/Photo'

export const usePhotoGallery =()=>{
    const [photos, setPhotos]=useState<Photo[]
>([])

const takePhoto =async ()=>{}
const deletePhoto =async (fileName:string)=>{}

return{photos,takePhoto, deletePhoto}
}