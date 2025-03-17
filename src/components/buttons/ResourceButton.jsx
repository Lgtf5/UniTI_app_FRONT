
import './ResourceButton.css'


export const ResourceButton= ( {image, text}) => {

    return(
        <div>
            <div className="section-button">
                <img src={image} alt="resource" className="image-button"/>
                <p className="button-text">{text}</p>
            </div>
        </div>
    )

}