// types 
import { Profile, Plant, User, Health } from '../../types/models'
import { HealthManagerFormData } from '../../types/forms';

//components
import HealthManager from '../HealthManager/HealthManager'

interface PlantCardProps {
  profile: Profile;
  plants: Plant[];
  user:  User | null;
  handleDeletePlant:(plantId:number)=> void;
  handleHealth: (formData: HealthManagerFormData) => void;
}

const PlantCard = (props: PlantCardProps): JSX.Element=> {
  const { plants, user, profile, handleDeletePlant, } = props
  return (
    <div>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          { user && user.profile.id === profile.id &&
          <HealthManager key={plant.id} plant={plant} handleHealth={props.handleHealth}/>
          }
          <section className='plantimages'>
          <img className='plant' src={plant.photo} alt={`photo of ${plant.name}`}/>
          </section>
          { user && user.profile.id === profile.id &&
            <button onClick={() => handleDeletePlant(plant.id)}>
              x
            </button>
          }
        </div>
      ))}
    </div>
  )
}

export default PlantCard