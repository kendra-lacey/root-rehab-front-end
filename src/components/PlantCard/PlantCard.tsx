// types 
import { Profile, Plant, User } from '../../types/models'


//services
import * as plantService from '../../services/plantService'

interface PlantCardProps {
  profile: Profile;
  plants: Plant[];
  user:  User | null;
}

const handleDeletePlant = async(): Promise<void> => {
  await plantService.deletePlant()
}

const PlantCard = (props: PlantCardProps): JSX.Element=> {
  const { plants, user, profile } = props

  return (
    <div className='plantcard'>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.photo} alt={`photo of ${plant.name}`}/>
          { user && user.profile.id === profile.id &&
            <button onClick={() => handleDeletePlant()}>
              x
            </button>
          }
        </div>
      ))}
    </div>
  )
}

export default PlantCard