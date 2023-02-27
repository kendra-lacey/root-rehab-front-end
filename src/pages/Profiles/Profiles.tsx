// types
import { Profile } from '../../types/models'
import { Plant } from '../../types/models'

//components
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import { CreatePlantFormData } from '../../types/forms';


interface ProfilesProps {
  profiles: Profile[];
  plants: Plant[];
  handleAddPlant: (formData: CreatePlantFormData) => void;
}
const Profiles = (props: ProfilesProps): JSX.Element => {
    const { profiles, plants } = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    
      <main className='list'>
      {profiles.map((profile: Profile) =>
        <ProfileCard key={profile.id} profile={profile} handleAddPlant={props.handleAddPlant} plants={plants}/>
      )}
    </main>
  )
}

export default Profiles
