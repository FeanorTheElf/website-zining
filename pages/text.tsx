import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';
import { MiddleColumn, Spacer } from '../components/spacing';
import pagelist from '../pagelist';

const ExtendedText: NextPage = () => {
    return <PageFull title="Zining Ren" dark={true} links={pagelist}>
        <MiddleColumn>
            <p id="a-novel">Stories.</p>
            <embed className="pdf-reader" src="./extended_text.pdf" />
            <div style={{ textAlign: "center" }}>Written in 2022.</div>
            <Spacer/>
        </MiddleColumn>
    </PageFull>;
}

export default ExtendedText
