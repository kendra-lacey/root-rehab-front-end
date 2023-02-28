// types
import { Profile, Plant, User} from '../../types/models';
import { CreatePlantFormData } from '../../types/forms';

//components
import ProfileCard from '../../components/ProfileCard/ProfileCard'

interface ProfilesProps {
  profiles: Profile[];
  plants: Plant[];
  user: User | null;
  handleAuthEvt: ()=> void;
}
const Profiles = (props: ProfilesProps): JSX.Element => {
  const { profiles, plants, user, handleAuthEvt} = props

  if(!profiles.length) return <p>No profiles yet</p>

  return (
    
      <main className='list'>
      {profiles.map((profile: Profile) =>
        <ProfileCard key={profile.id} profile={profile} user={user} plants={plants} handleAuthEvt={handleAuthEvt}/>
      )}
    </main>
  )
}

export default Profiles
