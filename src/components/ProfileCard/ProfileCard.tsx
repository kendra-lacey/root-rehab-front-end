// npm packages
import { useState } from 'react'

// assets 
import defaultPic from '../../assets/icons/profile.png'

// types
import { Profile, Plant, User, Health} from '../../types/models';
import { HealthManagerFormData } from '../../types/forms';

//components
import PlantCard from '../PlantCard/PlantCard'
import CreatePlantForm from '../CreatePlantForm/CreatePlantForm'


interface ProfileCardProps {
  profile: Profile;
  user:  User | null;
  plants: Plant[];
  handleAuthEvt: ()=> void;
  handleDeletePlant:(plantId:number)=> void;
  handleHealth: (formData: HealthManagerFormData) => void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile, user, plants} = props

  const [showForm, setShowForm] = useState(false)
  const [showPlants, setShowPlants] = useState(false)

  const [message, setMessage] = useState('')

  const updateMessage = (msg: string): void => setMessage(msg)

  const profilePic = profile.photo ? profile.photo : defaultPic

  const toggleForm = (): void => setShowForm(!showForm)
  const toggleShowPlants = () => setShowPlants(!showPlants)
  const matchingPlants = plants.filter((plant) => plant.profileId === profile.id);

  if (user && user.profile.id === profile.id){
  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar'`} />
      <h1>{profile.name}</h1>
      <button onClick={toggleShowPlants}>{matchingPlants.length > 0 ? 'View Plants' : "No Plants to Show"}</button>
      
      {showPlants && <PlantCard {...props} />}
      <button className='add' onClick={toggleForm}>Add Plant</button>
      {showForm && <CreatePlantForm {...props} updateMessage={updateMessage}/>}
    </article>
  )} // implicit else...
  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar'`} />
      <h1>{profile.name}</h1>
      <button onClick={toggleShowPlants}>{matchingPlants.length > 0 ? 'View Plants' : "No Plants to Show"}</button>
      {showPlants && <PlantCard {...props} plants={matchingPlants}
    />}
    </article>
  )
}

// 

export default ProfileCard
