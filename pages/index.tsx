import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';
import pagelist from '../pagelist';

const Home: NextPage = () => {
	return <PageFull title="Zining Ren" dark={false} links={pagelist}>
		<h1 className="zining-font" style={{ fontSize: "80px", textAlign: "center", width: "100%", paddingTop: "10%", paddingBottom: "5%" }}>ZINING REN</h1>
		<div style={{ width: "100%", paddingBottom: "7%", textAlign: "center" }}>
			<a className="zining-font btn btn-dark hide-mobile m-3" href="./game.html" style={{ fontSize: "26px" }}>3D Environment</a>
			<a className="zining-font btn btn-danger display-mobile disabled m-3" style={{ fontSize: "26px" }}>The 3D Environment cannot be accessed on a mobile device</a>
		</div>
		<img style={{ width: "100%" }} src="./home.png"/>
		<div style={{ width: "100%", paddingTop: "7%", paddingBottom: "5%", textAlign: "center" }}>
		<a className="zining-font btn btn-dark m-3 social-media-link" href="https://facebook.com/profile.php?id=100039690019860">Facebook</a>
			<a className="zining-font btn btn-dark m-3 social-media-link" href="https://instagram.com/ziningren.art/">Instagram</a>
			<a className="zining-font btn btn-dark m-3 social-media-link" href="https://linkedin.com/in/zining-ren-8a193a219">Linkedin</a>
		</div>
	</PageFull>;
}

export default Home
