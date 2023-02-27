// services
import * as tokenService from './tokenService'

// types
import { Profile, Plant } from '../types/models'
import { CreatePlantFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/plants`

async function createPlant (formData: CreatePlantFormData): Promise<Profile> {
	try {
    const res = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Profile
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


export { createPlant, getAllPlants }