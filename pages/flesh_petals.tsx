import type { NextPage } from 'next'
import { Carousel } from '../components/carousel';
import { PageFull } from '../components/page_full';
import { MiddleColumn, Spacer } from '../components/spacing';
import pagelist from '../pagelist';

const FleshPetals: NextPage = () => {
    return <PageFull title="Zining Ren" dark={true} links={pagelist}>
        <Carousel elements={[
            <img key={1} src="./flesh_petals/img1.jpg"/>,
            <img key={1} src="./flesh_petals/img2.png"/>,
            <img key={1} src="./flesh_petals/img3.jpg"/>,
            <img key={1} src="./flesh_petals/img4.png"/>,
            <img key={1} src="./flesh_petals/img5.png"/>
        ]}/>
        <MiddleColumn>
            <span>
                Flesh, petals and Her Garden<br/>
                2020<br/>
                Installation with performance video 9&apos;25&quot;<br/>
                Materials: styrofoam, artificial pearl, red sand, silica gel, water pipe, clay, silk stockings, spray paint, epoxy resin, magazine pages, plastic film, headlamp<br/>
                <br/>
                This work is about a female character &quot;Lan&quot; in my fictional writing, which explored female body conscious, physiology, emotion and trauma.<br/>
                <br/>
                The basement is an alienated world that suggests Lan&apos;s inner body. Deformed organs, eggs, fallopian tubes, vagina, umbilical cord, bones, dissolved flesh, and blood are scattered on the red floor.
            </span>
        </MiddleColumn>
        <Spacer/>
        <video id="video_display" className="video-centered" loop controls>
            <source src="./flesh_petals/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <Spacer/>
    </PageFull>;
}

export default FleshPetals
