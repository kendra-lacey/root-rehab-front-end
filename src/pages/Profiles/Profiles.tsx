// types
import { Profile, Plant, User} from '../../types/models';
import { HealthManagerFormData } from '../../types/forms';


//components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

interface ProfilesProps {
  profiles: Profile[];
  plants: Plant[];
  user:  User | null;
  handleAuthEvt: ()=> void;
  handleDeletePlant: (plantId:number)=> void;
  handleHealth: (formData: HealthManagerFormData) => void;
}

const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles, handleAuthEvt, handleDeletePlant, plants, user} = props

  const getMatchingPlants = (profileId: number) => {
    return plants.filter((plant) => plant.profileId === profileId);
  };

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    
      <main className='list'>
      {profiles.map((profile: Profile) =>
        <ProfileCard 
        key={profile.id} 
        profile={profile} 
        user={user} 
        plants={getMatchingPlants(profile.id)} 
        handleAuthEvt={handleAuthEvt} 
        handleDeletePlant={handleDeletePlant}
        handleHealth={props.handleHealth}
        />
      )}
    </main>
  )
}

export default Profiles
