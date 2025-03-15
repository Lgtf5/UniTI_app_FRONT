import { ResourceButton } from '../../components/buttons/ResourceButton.jsx'
import "/logoSass.svg"
import './ResourcesView.css'
import '/exit.svg' 

const MainResources = (() => {

    return (
        <div>
            <div className="section-container">           
                <ResourceButton  image="/CSS-Tricks-logo.png" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />
                <ResourceButton  image="/logoSass.svg" text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "/>
                <ResourceButton image="/CSS-Tricks-logo.png"  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam," />
                <ResourceButton image="/dataCampLogo.png"  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
                <ResourceButton image="/logoSass.svg"  text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
            </div>
            <div>
                <image className="resource-button" src="/resource.svg" alt="add-resource button"/>
            </div>
            <div>
                <image className="exit-button" src="/exit.svg" alt="exit button"/>
            </div>
        </div>
    )
})
export default MainResources