import resumeFile from '../assets/Sethupathi_Vijayakumar_Resume_image.pdf'
import './Resume.css'
function Resume() {
    return (
        <div className='resume-body'>
            <div>
                <h2 className="resume-heading">RESUME :</h2>
                <div className='resume-action-buttons'>
                    <a href={resumeFile} target='blank'>
                        <button className='resume-view-button'>View Resume</button>
                    </a>
                    <a href={resumeFile} download>
                        <button className='resume-download-button'>Download Resume</button>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Resume
