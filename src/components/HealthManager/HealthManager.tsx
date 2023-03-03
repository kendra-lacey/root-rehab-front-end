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

  return ( 
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
        id={rating.toString()}
        key={rating}
        src={noHeart}
        alt="heart symbol"
        />
      ))}
    </section>
  );
}

export default HealthManager ;