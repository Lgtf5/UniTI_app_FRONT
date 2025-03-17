import './SectionButton.css'


export const SectionButton = ({ text, title, image }) => {


    return (
        <div>
        <div className="section-button">
            <img src={image} alt={title} className="image-button" />
            <h2 className="title-section">{title}</h2>
            <p className="button-text">{text}</p>
        </div>

                </div>
    )
}



