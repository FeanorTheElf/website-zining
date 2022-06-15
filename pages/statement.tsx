import type { NextPage } from 'next'
import { PageFull } from '../components/page_full';
import { MiddleColumn, Spacer } from '../components/spacing';
import pagelist from '../pagelist';

const Concert: NextPage = () => {
    return <PageFull title="Zining Ren" dark={true} links={pagelist}>
        <MiddleColumn>
            <h1 className="p-4">ARTIST STATEMENT</h1>
            <div className="text-block">
                I make works in a composite way including installation, virtual reality, time-based media work, performance, and text.<br/>
                <br/>
                Fiction and characters I construct textually and visually play a pivotal part in the body of my work. My practice centres around issues of digital reality, body and intimacy, and through my work, I explore poetry, and the dynamic unfolding of multimedia practice.<br/>
                <br/>
                From 2021 to 2022, during the MFA at Ruskin, I built a fiction about a female giant&apos;s inner body, surrounding desire, intimacy, trauma, and self-reflection. I’m presenting a VR installation in the final degree show.<br/>
                <br/>
                My research begins with my own body. In creating fictitious narratives, I reflect on the concept of &apos;extimacy&apos;: Lacan coins the term extimité by applying the prefix ‘ex’ -- from exterieur, &quot;exterior&quot; -- to intimité -- &quot;intimacy&quot;. (I am invoking the intellectual property of white male philosophers without a gesture of subservience; I am fascinated by the vocabulary and language used in the theory; I consider my practice as a process of overwriting. I am working in the context of female fantasy.) Portals (also holes, circles...) are a conceptual object to me under this context.  It functions as the connection between the inner and exterior worlds. I found resonance about my studio work and approach to fiction writing in Dictee, a novel by Theresa Hak Kyung Cha.<br/>
                <br/>
                During the Ruskin year, I moved from video to the 3D medium, virtual reality, a powerful medium.  Aided by this technology, I had expected to gain the freedom to fantasise about an inside-out world, but the intensity and complexity of this expression is actually built on another tedious technical labour - exactly the opposite of freedom. Again, a body is neglected.
            </div>
            <Spacer/>
        </MiddleColumn>
    </PageFull>;
}

export default Concert
