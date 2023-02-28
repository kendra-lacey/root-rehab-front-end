// services
import * as tokenService from './tokenService'

// types
import { Profile, Plant } from '../types/models'
import { CreatePlantFormData, PhotoFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/plants`

async function createPlant (
  formData: CreatePlantFormData,
  photoFormData: PhotoFormData,
  ): Promise<void> {
	try {
    const res = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    const json = await res.json()
    if (json.err) {
      throw new Error(json.err)
    } else if (photoFormData.photo) {
        const photoData = new FormData()
        const plantId = json.id
        photoData.append('photo', photoFormData.photo)
        await addPlantPhoto(photoData, plantId)
    }
    
    // return json as Profile
  } catch (error) {
    throw error
  }
}

async function addPlantPhoto(
  photoData: FormData, 
  plantId: number
): Promise<string> {
  try {
    const res = await fetch(`${BASE_URL}/${plantId}/add-photo`, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`
      },
      body: photoData
    })
    return await res.json() as string
  } catch (error) {
    throw error
  }
}

async function getAllPlants(): Promise<Plant[]> {
  try {
    const res = await fetch(BASE_URL, {
      headers: { 'Authorization': `Bearer ${tokenService.getToken()}` },
    })
    return await res.json() as Plant[]
  } catch (error) {
    throw error
  }
}


export { createPlant,addPlantPhoto, getAllPlants }