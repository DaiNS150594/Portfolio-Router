import {Link} from 'react-router-dom'
import Image from '../images/main_header.png'

const Banner = () => {
  return (
    <div className="main__banner">
      <div className="container main__banner-container">
        <div className="main__banner-left">
          <h4>#100DaysOfWorkOut</h4>
          <h1>Join the Legends Of The Fitness World</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem culpa omnis quibusdam ab ipsa deserunt sequi sapiente provident aliquid dicta!
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main__banner-right">
          <div className="main__banner-circle"></div>
          <div className="main__banner-image">
            <img src={Image} alt="img banner" />
          </div>
        </div>
      </div>
    </div>  
  )
}

export default Banner