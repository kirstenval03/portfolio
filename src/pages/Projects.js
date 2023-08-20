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
                    <img src={Formula1} alt='ProjectImg' className='ProjectImg' />
                    <h3>Formula 1 App</h3>
                    <p>
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.
                        Nulla vitae elit libero, a pharetra augue mollis interdum.

                        
                    </p>
                </Carousel.Caption>

            </Carousel.Item>


            <Carousel.Item>
                <img src={ProjectBG} alt='ProjectImg' className='slide' />

                <Carousel.Caption>
                    <img src={Wattpad} alt='ProjectImg' className='ProjectImg' />
                    <h3>Wattpad Community</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>

            </Carousel.Item>


            <Carousel.Item>
                <img src={ProjectBG} alt='ProjectImg' className='slide' />

                <Carousel.Caption>
                    <img src={HoneyHarvest} alt='ProjectImg' className='ProjectImg' />
                    <h3>Honey Harvest</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>

            </Carousel.Item>

        </Carousel>
      );
    }

