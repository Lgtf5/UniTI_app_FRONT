import { SectionButton } from '../../components/buttons/SectionButton.jsx'
import "/exit.svg"

const MainSection = (() => {

    return (
        <div>
            <div className="section-container">           
                <SectionButton  text = "Here you can find resources focused on FRONTEND development " title="FRONTEND" image="/backgroundFront.png"/>
                <SectionButton  text = "Here you can find resources focused on BACKEND development " title="BACKEND" image="/backgroundBack.png"/>
                <SectionButton  text = "Here you can find resources focused on the world of TEST development " title="TESTING" image="/backgroundTestting.png"/>
            </div>
            <div>
                    <image className="exit-button" src="/exit.svg" alt="exit button"/>
                </div>
        </div>
    )
})
export default MainSection