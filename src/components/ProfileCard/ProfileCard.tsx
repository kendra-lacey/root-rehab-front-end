// npm packages
import { useState } from 'react'

// assets 
import defaultPic from '../../assets/icons/profile.png'

// types
import { Profile, Plant, User} from '../../types/models';

//components
import PlantCard from '../PlantCard/PlantCard'
import CreatePlantForm from '../CreatePlantForm/CreatePlantForm'

interface ProfileCardProps {
  profile : Profile;
  user:  User | null;
  plants: Plant[];
  handleAuthEvt: ()=> void;
}

const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile, plants, user } = props


  const [message, setMessage] = useState('')

  const updateMessage = (msg: string): void => setMessage(msg)

  const profilePic = profile.photo ? profile.photo : defaultPic

  if (user && user.profile.id === profile.id){
  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar'`} />
      <h1>{profile.name}</h1>
      <PlantCard {...props} />
      <CreatePlantForm {...props} updateMessage={updateMessage} />
    </article>
  )} // implicit else...
  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar'`} />
      <h1>{profile.name}</h1>
      <PlantCard {...props} />
    </article>
  )
}

export default ProfileCard
