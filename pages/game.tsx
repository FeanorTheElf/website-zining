import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';

const Home: NextPage = () => {
  return <PageFull title="Zining Ren" dark={false} links={[]} sidebarUncollapsed>
    <iframe allowFullScreen src="./HTML5/WaterWeb.html" style={{ width: "100vw", height: "100vh" }}/>
  </PageFull>;
}

export default Home
