import React from "react";


export const SectionButton = ({action, text, title, image}) => {
    const { openModal } = useModal()

    return(
        <button className="section-button" onClick={() => openModal(action)}>
            {text} {title} {image}
        </button>
    )
}

    
    
export default SectionButton