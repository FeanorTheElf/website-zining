import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';
import { MiddleColumn, Spacer } from '../components/spacing';
import pagelist from '../pagelist';

const Biography: NextPage = () => {
    return <PageFull title="Zining Ren" dark={true} links={pagelist}>
        <MiddleColumn>
            <h1 className="p-4">Biography</h1>
            <div className="text-block">
            <div style={{ padding: "10pt" }}>
                Zining Ren<br/>
                b. 1998, Jiangsu, China<br/>
                renzining1103@163.com
            </div>
            <h4>Education</h4>
            <ul>
                <li>2021/22 Forthcoming MFA, Ruskin School of Art, Oxford University</li>
                <li>2021 BFA, Sculpture, China Central Academy of Fine Arts</li>
            </ul>

            <h4>Exhibitions</h4>
            <b>2022</b>
            <ul>
                <li>Anren Biennale 3rd Youth Art International Invitation Exhibition, Anren, China</li>
            </ul>

            <b>2021</b>
            <ul>
                <li>&quot;The Realm of Materiality III&quot;, Hightower Art Museum, Beijing</li>
                <li>Artopia Creation 2021, Chaoyang Joy City, Beijing</li>
                <li>2021 Central Academy of Fine Arts Graduation Exhibition, CAFA Museum, Beijing</li>
            </ul>

            <b>2020</b>
            <ul>
                <li>&quot;My 2020&quot; Annual Exhibition, Sculpture Department, Central Academy of Fine Arts Hallway Gallery, Beijing</li>
                Awarded ‘Best Outstanding Work of the Year’
            </ul>
            <b>2019</b>
            <ul>
                <li>ELIMINATE, PPPP SPACE, Caochangdi Art Zone, Beijing</li>
                <li>&quot;My 2019&quot; Annual Exhibition, Sculpture Department, Central Academy of Fine Arts Hallway Gallery, Beijing</li>
                Awarded ‘Best Outstanding Work of the Year’
            </ul>

            <b>2018</b>
            <ul>
                <li>‘Ceramic working’ ceramic course show, Central Academy of Fine Arts Sculpture Department Hallway Gallery, Beijing</li>
                <li>“The Trace of Casting” bronze casting course show, Central Academy of Fine Arts Sculpture Department Hallway Gallery, Beijing</li>
                <li>&quot;To the Future&quot; 3d printing course show, Central Academy of Fine Arts Sculpture Department Hallway Gallery, Beijing</li>
                <li>&quot;Summer of Metal&quot; China Taiyuan International Youth Metal Creation Camp, Shanxi, China</li>
            </ul>

            <b>2017</b>
            <ul>
                <li>“Wooden Exhibition” wood sculpture course show, Central Academy of Fine Arts Sculpture Department Hallway Gallery, Beijing</li>
                <li>“Turning Iron into Gold” metal sculpture course exhibition, Sculpture Department, Central Academy of Fine Arts Hallway Gallery, Beijing</li>
            </ul>
            </div>
            <Spacer/>
        </MiddleColumn>
    </PageFull>;
}

export default Biography;
