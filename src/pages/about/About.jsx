import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'

const About = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi perferendis odit voluptatibus distinctio mollitia unde corrupti animi dolores! Eaque, quis!
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="img" />
        </div>

        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci, nesciunt totam expedita id eos molestias fugiat nostrum doloribus voluptate est, et unde quam magni maiores. Earum atque laborum expedita accusamus asperiores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci, nesciunt totam expedita id eos molestias fugiat nostrum doloribus voluptate est, et unde quam magni maiores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci</p>
          
        </div>
      </div>
    </section>

    <section className="about__vision">
      <div className="container about__vision-container">

        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci, nesciunt totam expedita id eos molestias fugiat nostrum doloribus voluptate est, et unde quam magni maiores. Earum atque laborum expedita accusamus asperiores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci, nesciunt totam expedita id eos molestias fugiat nostrum doloribus voluptate est, et unde quam magni maiores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci</p>
          
        </div>

        
        <div className="about__section-image">
          <img src={VisionImage} alt="img" />
        </div>
      </div>
    </section>

    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="img" />
        </div>

        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci, nesciunt totam expedita id eos molestias fugiat nostrum doloribus voluptate est, et unde quam magni maiores. Earum atque laborum expedita accusamus asperiores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci, nesciunt totam expedita id eos molestias fugiat nostrum doloribus voluptate est, et unde quam magni maiores.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam odio maxime nulla culpa soluta voluptas recusandae corporis repellendus sit? Alias ducimus, amet impedit eaque aspernatur accusamus incidunt adipisci</p>
          
        </div>
      </div>
    </section>
    </>
  )
}

export default About