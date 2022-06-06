import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';
import pagelist from '../pagelist';

const Home: NextPage = () => {
  return <PageFull title="Zining Ren" dark={true} links={pagelist}>
    <video id="video_display" className="video-fullscreen" loop autoPlay={true} muted>
      <source src="./video_index.mp4" type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </PageFull>;
}

export default Home
