import { Carousel } from 'react-bootstrap';

import Wattpad from "../assets/images/PWattpad.png"
import HoneyHarvest from "../assets/images/PHoneyHarvest.png"
import Formula1 from "../assets/images/PFormula1.png"
import ProjectBG from "../assets/images/ProjectBG.png"


export const Projects = () => {

    return (
        <Carousel className='projects'>

            <Carousel.Item>
                
                <img src={ProjectBG} alt='ProjectImg' className='slide' />

                <Carousel.Caption>
                <a href="https://f1-projectwd.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <img src={Formula1} alt='ProjectImg' className='ProjectImg' />
                    </a>
                    <a className='linkP'href="https://f1-projectwd.netlify.app/" target="_blank" rel="noopener noreferrer">
                    <h3>Formula 1 App</h3>
                    </a>
                    <p>
                    As a F1 passionate I decided to create a prototype Full Stack application for formula 1 lovers with multiple functionalities.
                    From staying updated on the current season's schedule, exploring the team's and their drivers information to purchasing merch on the store.

                        
                    </p>
                </Carousel.Caption>

            </Carousel.Item>


            <Carousel.Item>
                <img src={ProjectBG} alt='ProjectImg' className='slide' />

                <Carousel.Caption>
                    <a href="https://wattpad-project.adaptable.app/" target="_blank" rel="noopener noreferrer">
                        <img src={Wattpad} alt='ProjectImg' className='ProjectImg' />
                    </a>
                    <a className='linkP' href="https://wattpad-project.adaptable.app/" target="_blank" rel="noopener noreferrer">
                        <h3>Wattpad Community</h3>
                    </a>
                    <p>
                        WattPad is an app where you can write or read stories, as a Wattpad user I thought of creating an online community for other readers.
                        It is a web application that allows you to add Wattpad stories that you enjoyed reading for other users to read or leave reviews on those stories.
                    </p>
                </Carousel.Caption>

            </Carousel.Item>


            <Carousel.Item>
                <img src={ProjectBG} alt='ProjectImg' className='slide' />

                <Carousel.Caption>
                <a href="https://kirstenval03.github.io/Honey-Harvest-GAME/" target="_blank" rel="noopener noreferrer">
                    <img src={HoneyHarvest} alt='ProjectImg' className='ProjectImg' />
                    </a>
                    <a className='linkP' href="https://kirstenval03.github.io/Honey-Harvest-GAME/" target="_blank" rel="noopener noreferrer">
                    <h3>Honey Harvest</h3>
                    </a>
                    <p>
                    With Document Object Model manipulation I built a single player browser game. Where you have to help your character to reach the flowers so that he can pollinate them while avoiding the obstacles.
                    </p>
                </Carousel.Caption>

            </Carousel.Item>

        </Carousel>
      );
    }

