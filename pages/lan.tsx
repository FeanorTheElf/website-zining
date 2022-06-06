import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';
import { MiddleColumn, Spacer } from '../components/spacing';
import pagelist from '../pagelist';

const LAN: NextPage = () => {
    return <PageFull title="Zining Ren" dark={true} links={pagelist}>
        <MiddleColumn>
            <p id="a-novel">A novel.</p>
            <embed className="pdf-reader" src="./lan-sheet.pdf" />
            <div style={{ textAlign: "center" }}>English excerpts.</div>
            <Spacer/>
            <embed className="pdf-reader" src="./lan-chinese.pdf"/>
            <div style={{ textAlign: "center" }}>Original novel.<br/>Written in 2020.</div>
            <Spacer/>
        </MiddleColumn>
    </PageFull>;
}

export default LAN
