import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';
import { MiddleColumn, Spacer } from '../components/spacing';
import pagelist from '../pagelist';

const Concert: NextPage = () => {
    return <PageFull title="Zining Ren" dark={true} links={pagelist}>
        <MiddleColumn>
            <h1 className="p-4">Biography</h1>
            <div className="text-block">
                Biography
            </div>
            <Spacer/>
        </MiddleColumn>
    </PageFull>;
}

export default Concert
