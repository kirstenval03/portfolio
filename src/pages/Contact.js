import { BookmarkHeartFill } from 'react-bootstrap-icons'
export const Contact = () => {

    return (
<div className="Contact" id='socialMedia'>
    <h1>My Social Media</h1>
    <h3>Click and add me! <BookmarkHeartFill size={40}/> </h3>
    <div className="SocialMedia">

    <div className="socialItem">
            <h3><a href="https://www.linkedin.com/in/kirsten-valdez" target="_blank" rel="noopener noreferrer">LinkedIn</a></h3>
            <a href="https://www.linkedin.com/in/kirsten-valdez" target="_blank" rel="noopener noreferrer">
                <img className="profileImg" src="https://res.cloudinary.com/dhqplbne3/image/upload/v1692670204/PORTFOLIO/25_cnni2e.png" alt="Linkedin" />
            </a>
        </div>
        
    <div className="socialItem">
            <h3><a href="https://www.instagram.com/kirsten.vg" target="_blank" rel="noopener noreferrer">Instagram</a></h3>
            <a href="https://www.instagram.com/kirsten.vg" target="_blank" rel="noopener noreferrer">
                <img className="profileImg" src="https://res.cloudinary.com/dhqplbne3/image/upload/v1692670205/PORTFOLIO/23_m7kiz0.png" alt="Instagram" />
            </a>
        </div>

        <div className="socialItem">
            <h3><a href="https://github.com/kirstenval03" target="_blank" rel="noopener noreferrer">GitHub</a></h3>
            <a href="https://github.com/kirstenval03" target="_blank" rel="noopener noreferrer">
                <img className="profileImg" src="https://res.cloudinary.com/dhqplbne3/image/upload/v1692670204/PORTFOLIO/24_ia4fcp.png" alt="Git" />
            </a>
        </div>


    </div>
</div>
    );
};