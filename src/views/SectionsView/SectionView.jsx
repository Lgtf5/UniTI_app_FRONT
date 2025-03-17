import HeaderApp from '../../components/headerApp/HeaderApp'
import  { SectionButton } from './SectionButton'

export  const SectionView = (() => {

    return (
        <div>
        <HeaderApp/>
        <div className="section-container">           
            <SectionButton action="openTable" text = "you can " title="FRONTEND" img="./backgroundFront.png"/>
            <SectionButton action="openTable" text = "you can " title="BACKEND" img="./backgroundBack.png"/>
            <SectionButton action="openTable" text = "you can " title="TESTTING" img="./backgroundTestting.png"/>
        </div>
        
        </div>
    )
})
