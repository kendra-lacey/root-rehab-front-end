// stylesheets
import styles from './Landing.module.css'

// assets 
import PlantPic from '../../assets/icons/plants.png'
import Stars from '../../assets/icons/stars.png'


// types
import { User } from '../../types/models'

interface LandingProps {
  user: User | null;
}

const Landing = (props: LandingProps): JSX.Element => {
  const { user } = props

  return (
    <main className={styles.container}>
    <img src={ PlantPic } alt="plants" />
  <section className={styles.about}>
    <header>
      <h1 className={styles.text}>ABOUT US</h1>
    </header>
    <article>
      <p>Our mission is to promote the numerous benefits of having plants in your home, such as reducing stress levels and improving air quality. However, caring for plants can also be stressful, especially when they start to wither away. That's why we created this platform - to provide a supportive community where plant enthusiasts can come together and help each other revive their beloved green friends. Whether you're a seasoned plant parent or just starting out, we're here to help you succeed in your journey towards a healthier and more vibrant home.</p>
    </article>
  </section>
  <section className={styles.testimonial}>
    <header>
      <h1 className={styles.text}>TESTIMONIALS</h1>
    </header>
    <article>
      <header>
        <h2>Kendra Lacey</h2>
        <p>Plant Killer</p>
      </header>
      <p>I am NOT a green-thumb….I found Root Rehab through a friend of mine who also was struggling to keep her plants alive, she said now all of her plants are THRIVING.</p>
      <footer>
        <img src={ Stars } alt=" 5 stars " />
      </footer>
    </article>
  </section>
 
  <footer className={styles.footer}>
    <p>© 2022 ROOT REHAB RIGHTS RESERVED</p>
  </footer>
</main>

  )
}

export default Landing
