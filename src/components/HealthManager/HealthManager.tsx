//assets
import heart from '../../assets/icons/heart.png'
import noHeart from '../../assets/icons/noheart.png'
//types
import { Plant } from '../../types/models'



interface HealthManagerProps {
  plant: Plant
}

const HealthManager = (props: HealthManagerProps): JSX.Element => {
const { plant } = props

const ratingOptions: [ 1, 2, 3, 4, 5 ] = [1, 2, 3, 4, 5 ]
const healthCount = plant.healthRecords.length
let healthSum = 0

plant.healthRecords.forEach(health => healthSum =+ health.value)

const plantRating = healthCount ? healthSum / healthCount : 1

  return ( 
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
        id={rating.toString()}
        key={rating}
        src={rating <= plantRating ? heart : noHeart}
        alt="Heart Symbol"
        />
      ))}
    </section>
  );
}

export default HealthManager ;