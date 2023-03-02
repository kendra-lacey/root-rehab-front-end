// services
import * as tokenService from './tokenService'

// types
import { Plant } from '../types/models'
import { HealthManagerFormData } from '../types/forms'

const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/api/votes`

async function setHealth(formData: HealthManagerFormData): Promise<Plant> {
	try {
    const res = await fetch(BASE_URL, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    return await res.json() as Plant
  } catch (error) {
    throw error
  }
}

export { setHealth }