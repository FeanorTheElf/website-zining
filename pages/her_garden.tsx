import type { NextPage } from 'next'
import { Carousel } from '../components/carousel';
import { PageFull } from '../components/page_full';
import { MiddleColumn, Spacer } from '../components/spacing';
import pagelist from '../pagelist';

const HerGarden: NextPage = () => {
    return <PageFull title="Zining Ren" dark={true} links={pagelist}>
        <Carousel elements={[
            <img key={1} src="./her_garden/img1.jpg"/>,
            <img key={1} src="./her_garden/img2.jpg"/>,
            <img key={1} src="./her_garden/img3.jpg"/>
        ]}/>
        <MiddleColumn>
            <div className="text-block">
                Her Garden<br/>
                2021<br/>
                Installation<br/>
                exhibited in the CAFA art museum<br/>
                <br/>
                Based on the fictional writing, the installation Her Garden is a further work of Flesh, Petals, and Her Garden. Inside the transparent membrane is the body cavity of LAN. Due to its transparentness, and it is open for the public to enter, the audience can engage freely in the tour of Lan&apos;s narrative.<br/>
                The performance had two parts.<br/>
                The painting part was more related to the original text and Flesh Petals and Her Garden.<br/>
                The performance work &quot;Spawning&quot; opened up another state of Lan&apos;s life, I sealed the space, stayed in the transparent box for a constant duration of about 8 hours, and blew about five hundred balloons on June 1st. In the end, the large amount of balloons overflowed me and my body was unable to be seen. The performance also responds to the child policies, which is the objectification of female body and human reproduction.
            </div>
        </MiddleColumn>
        <Spacer/>
    </PageFull>;
}

export default HerGarden
