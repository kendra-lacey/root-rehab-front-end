// types 
import { Profile, Plant } from '../../types/models'


//components
import AddPlantButton from '../AddPlantButton/AddPlantButton'

interface PlantCardProps {
  profile: Profile;
  plants: Plant[];
}

const PlantCard = (props: PlantCardProps): JSX.Element=> {
  const { profile, plants } = props



  return (
    <div className='plantcard'>
      {plants.map((plant) => (
        <div key={plant.id}>
          <h2>{plant.name}</h2>
          <img src={plant.photo} alt={`photo of ${plant.name}`}/>
          <AddPlantButton {...props} />
        </div>
      ))}
    </div>
  )
}

export default PlantCard