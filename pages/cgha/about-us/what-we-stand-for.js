import Image from 'next/image';
import Link from 'next/link';
import {useState, createRef, useEffect} from 'react'

export default function About() {
    const [count, setCount] = useState(1);
    const myRef = createRef();
    
    const incCount = () => setCount(c => c + 1);

    const incRef = () => myRef.current++;

    useEffect(() => {
        console.log(myRef)
    })

    return (
        <>
        <div className='hero-image-area opacityOn'>
            <div className='hero-images-area'>
                <div className='hero-images-area-inner'>
                    <div>
                        <Image src={require('../../assets/assembly2.jpg')} alt="director" style={{position: "absolute", top: '-34px', left: '0px', width: '1254px', height: '836px', opacity: '1'}}/>
                    </div>
                </div>
            </div>
        </div>
        <div className='sl-content-area clearfix'>
            <div className='sl-content-main-bg'>
                <div className='sl-bg-bottom'>
                    <div style={{}}></div>
                </div>
            </div>
            <div className='page-title'>
                <div className='secondLvlCss'>
                    <h1>What we stand for</h1>
                </div>
            </div>
            <div className='sl-content-main clearfix'>
                <div className='sl-content-right'>
                    <div className="breadcrumbs">
                        <Link  href="/">home</Link>
                        <span className='bdivider'></span>
                        <Link href="/about-us/welcome">About Us</Link>
                        <span className='bdivider'></span>
                        <span className='bcurrentpage'>what we stand for
                        </span>
                    </div>
                    <div className='secondLvlCss'>
                        <h2>Our Mission</h2>
                        <p className='featuredParagraph'>
                        To raise strong independent Boys and girls who are rooted to the faith.
                        </p>
                        <h2>Our Vision</h2>
                        <p>
                        Our vision is to create an educational experience which is second to none in Kericho:
                        </p>
                        <ul>
                            <li>We want this to be based on the strong culture and embedded values which make us stand out from the competition.</li>
                            <li>We want to make Chepkolon the school of choice for families who share our values, whether they have experience of independent education or are trying it for the first time.</li>
                            <li>We want to gain a reputation nationally for the success of our forward-looking co-educational provision.</li>
                        </ul>
                        <h2>Our Values</h2>
                        <p>
                        At Chepkolon we take pride in the quality of relationships between all those within our community, which are based on our values:
                        </p>
                        <ul>
                            <li>God fearing</li>
                            <li>Respectful</li>
                            <li>Self Reliant</li>
                            <li>Hard Working</li>
                            <li>Courageous</li>
                            <li>Mindful</li>
                            <li>Collaborative</li>
                        </ul>
                    </div>
                </div>
                <div className='sl-content-left'>
                    <div className='in-this-section'>
                        In About us
                    </div>
                    <ul className='mk-tree-menu'>
                        <li className='clearfix'><Link href="/about-us/welcome">Director&apos;s welcome</Link></li>
                        <li className='clearfix'><Link href="/about-us/what-we-stand-for">What we stand for</Link></li>
                        <li className='clearfix'><Link href="/about-us/our-story">Our Story</Link></li>
                        <li className='clearfix'><Link href="/">Results</Link></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}
