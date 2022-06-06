import type { NextPage } from 'next'
import { Carousel } from '../components/carousel';
import { PageFull } from '../components/page_full';
import { MiddleColumn, Spacer } from '../components/spacing';
import pagelist from '../pagelist';

const Concert: NextPage = () => {
    return <PageFull title="Zining Ren" dark={true} links={pagelist}>
        <Carousel elements={[
            <img key={1} src="./concert/img1.jpg"/>,
            <img key={2} src="./concert/img2.jpg"/>,
            <img key={3} src="./concert/img3.jpg"/>
        ]}/>
        <MiddleColumn>
            <span>
                Live performance<br/>
                video projection<br/>
                in Jacqueline Du Pre Music Building<br/>
                May 2022<br/>
                <br/>
                A collaborative piece with composer Carrie Penn, singer Bilge Yilmaz and pianist Jennifer Jennifer.<br/>
                <br/>
                The music and video build an experiential site for self-reflection and exploration of the female body and trauma. The lyrics poetically portray the myth of the Greek goddess Persephone in a mournful tone, and the video focuses on a part of female figure - a performance of self-analysis, hollowing out, unfolding, and turning oneself inside out.
            </span>
        </MiddleColumn>
        <video id="video_display" className="video-centered" loop controls>
            <source src="./concert/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
        </video>
        <Spacer/>
    </PageFull>;
}

export default Concert
