//assets
import heart from '../../assets/icons/heart.png'
import noHeart from '../../assets/icons/noheart.png'
//types
import { Plant } from '../../types/models'
import { HealthManagerFormData } from '../../types/forms'
import React from 'react'


interface HealthManagerProps {
  plant: Plant
  handleHealth: (formData: HealthManagerFormData) => void;
}

const HealthManager = (props: HealthManagerProps): JSX.Element => {
const { plant, handleHealth } = props

const ratingOptions: [ 1, 2, 3, 4, 5 ] = [1, 2, 3, 4, 5 ]
// const healthCount = plant.healthRecords.length
const healthCount = plant.healthRecords ? plant.healthRecords.length : 0
let healthSum = 0

if (plant.healthRecords){
  plant.healthRecords.forEach(health => healthSum += health.value)
}
const plantRating = plant.healthRecords && healthSum > 0 ? healthSum / healthCount : 0

const handleClick = (evt: React.MouseEvent<HTMLImageElement>): void => {
  const newValue = parseInt(evt.currentTarget.id)
  handleHealth({ value: newValue, plantId: plant.id })
}


  return ( 
    <section>
      {ratingOptions.map((rating: number): JSX.Element => (
        <img
        id={rating.toString()}
        key={rating}
        onClick={handleClick}
        src={rating <= plantRating ? heart : noHeart}
        alt="Heart Symbol"
        />
      ))}
    </section>
  );
}

export default HealthManager ;