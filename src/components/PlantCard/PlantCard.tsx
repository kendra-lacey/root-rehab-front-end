// types 
import { Profile, Plant, User } from '../../types/models'


//services
import * as plantService from '../../services/plantService'
// import * as handleDeletePlant from '../../services/plantService'

interface PlantCardProps {
  profile: Profile;
  plants: Plant[];
  user:  User | null;
  handleDeletePlant:(plantId:number)=> void;
}



const PlantCard = (props: PlantCardProps): JSX.Element=> {
  const { plants, user, profile, handleDeletePlant} = props

  return (
    <div className='plantcard'>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.photo} alt={`photo of ${plant.name}`}/>
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