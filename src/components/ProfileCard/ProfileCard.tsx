// assets 
import defaultPic from '../../assets/icons/profile.png'

// types
import { Profile } from '../../types/models'
import { Plant } from '../../types/models'
import { CreatePlantFormData } from '../../types/forms'


//components
import PlantCard from '../PlantCard/PlantCard'

interface ProfileCardProps {
  profile : Profile;
  plants: Plant[];
  handleAddPlant: (formData: CreatePlantFormData) => void;
}


const ProfileCard = (props: ProfileCardProps): JSX.Element => {
  const { profile, plants } = props

  const profilePic = profile.photo ? profile.photo : defaultPic

  return (
    <article>
      <img src={profilePic} alt={`${profile.name}'s avatar'`} />
      <h1>{profile.name}</h1>

      <PlantCard {...props} />
    </article>
  )
}

export default ProfileCard
