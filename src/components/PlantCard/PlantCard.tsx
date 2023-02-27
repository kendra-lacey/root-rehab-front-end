// types 
import { Profile } from '../../types/models'
import { Plant } from '../../types/models'

interface PlantCardProps {
  profile: Profile;
  plant: Plant;
}

const PlantCard = (props: PlantCardProps): JSX.Element=> {
  const { profile, plant } = props

  return (
    <div>
    <h2>{plant.name}</h2>
    <img src={plant.photo} alt={`photo of ${plant.name}`}/>
    <button>Add plant</button>
  </div>
  )
}

export default PlantCard