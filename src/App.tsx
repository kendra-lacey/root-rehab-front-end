// npm modules 
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'

// page components
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Landing from './pages/Landing/Landing'
import Profiles from './pages/Profiles/Profiles'
import ChangePassword from './pages/ChangePassword/ChangePassword'

// components
import NavBar from './components/NavBar/NavBar'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'

// services
import * as authService from './services/authService'
import * as profileService from './services/profileService'
import * as plantService from './services/plantService'


// stylesheets
import './App.css'

// types
import { User, Profile,Plant } from './types/models'
import { HealthManagerFormData } from './types/forms'



function App(): JSX.Element {
  const navigate = useNavigate()
  
  const [user, setUser] = useState<User | null>(authService.getUser())
  const [profiles, setProfiles] = useState<Profile[]>([])
  const [plants, setPlants] = useState<Plant[]>([])
 
  

  useEffect((): void => {
    const fetchProfiles = async (): Promise<void> => {
      try {
        const profileData: Profile[] = await profileService.getAllProfiles()
        setProfiles(profileData)
      } catch (error) {
        console.log(error)
      }
    }
    user ? fetchProfiles() : setProfiles([])
  },[user])

  useEffect((): void => {
  const fetchPlants = async (): Promise<void> => {
    try {
      const plantData: Plant[] = await plantService.getAllPlants()
      setPlants(plantData)
    } catch (error) {
      console.log(error)
    }
  }
  user ? fetchPlants() : setPlants([])
},[user]);


const handleDeletePlant = async(plantId: number): Promise<void> => {
  await plantService.deletePlant(plantId)
  const updatedPlants = plants.filter((plant) => plant.id !== plantId);
    setPlants(updatedPlants);
}



  const handleLogout = (): void => {
    authService.logout()
    setUser(null)
    navigate('/')
  }

  const handleAuthEvt = (): void => {
    setUser(authService.getUser())
    navigate('/')
  }


  return (
    <>
      <NavBar user={user} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Landing user={user} />} />
        <Route
          path="/signup"
          element={<Signup handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/login"
          element={<Login handleAuthEvt={handleAuthEvt} />}
        />
        <Route
          path="/profiles"
          element={
            <ProtectedRoute user={user}>
              <Profiles
              user={user}
              profiles= {profiles}
              plants={plants}
              handleAuthEvt={handleAuthEvt}
              handleDeletePlant={handleDeletePlant}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/change-password"
          element={
            <ProtectedRoute user={user}>
              <ChangePassword handleAuthEvt={handleAuthEvt} />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  )
}

export default App
