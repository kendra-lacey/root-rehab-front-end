// types 
import { Profile, Plant } from '../../types/models'


//components
import CreatePlantForm from '../CreatePlantForm/CreatePlantForm'

interface PlantCardProps {
  profile: Profile;
  plants: Plant[];
}

const PlantCard = (props: PlantCardProps): JSX.Element=> {
  const { plants } = props

  return (
    <div className='plantcard'>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.photo} alt={`photo of ${plant.name}`}/>
        </div>
      ))}
    </div>
  )
}

export default PlantCard