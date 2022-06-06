import React from 'react';
import Head from 'next/head';
import { PageDivided } from '../components/page_divided';
import pagelist from '../pagelist';

interface CirclesProps {
    videos: string[]
}

class Circles extends React.PureComponent<CirclesProps> {

    private getCircleStyle(i: number): { "left": string, "top": string } {
        const n = this.props.videos.length;
        const angle = i / n * Math.PI * 2;
        const left = Math.cos(angle) + 1;
        const top = Math.sin(angle) + 1;
        return {
            "left": "calc((100% - 8vh) * " + left + " / 2)",
            "top": "calc((100% - 8vh) * " + top + " / 2)"
        };
    }

    public render() {
        return <div id="main" className="p-4">
            <Head>
                <script src="./circles.js" defer/>
            </Head>
            <div id="video-container">
                <svg id="video-circle">
                    <ellipse cx="50%" cy="50%" rx="49%" ry="49%" strokeWidth="4" stroke="black" style={{ fill: "none" }}/>
                    <text x="50%" y="50%">Click the circles.</text>
                </svg>
                {this.props.videos.map((video_url, i) => <div key={i} className="circular-display" style={this.getCircleStyle(i)}>
                    <video className="nopadding circular-video" loop muted data-video-url={video_url}>
                        Your browser does not support the video tag.
                    </video>
                </div>)}
            </div>
        </div>;
    }
}

export default class CirclePage extends React.PureComponent<{}> {

    public render() {
        return <PageDivided title="Zining Ren" dark={false} links={pagelist}>
            <Circles videos={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(i => ("./circle/video" + i + ".mp4"))}/>
            <video id="video_display" className="video-centered-small" loop controls style={{ width: 440, marginLeft: "calc(50% - 220px)" }}>
                <source src="./video_circles.mp4" type="video/mp4"/>
                Your browser does not support the video tag.
            </video>
        </PageDivided>
    }
}