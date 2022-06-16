import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';

const Game: NextPage = () => {
  return <PageFull title="Zining Ren" dark={false} links={[]} sidebarUncollapsed>
    <div className="p-4 zining-font" style={{ textAlign: "center", color: "darkgray", fontSize: "18px" }}>To due an issue in Chrome, this environment currently only works in Firefox.</div>
    <iframe allowFullScreen src="./HTML5/WaterWeb.html" style={{ width: "100vw", height: "100vh" }}/>
  </PageFull>;
}

export default Game;
