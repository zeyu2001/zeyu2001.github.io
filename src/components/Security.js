import { Row, Col, Image, Container } from 'react-bootstrap';

const Security = () => {
    return (
        <>
        <Container>
            <div>
                <Image
                    className="mx-auto d-block"
                    src="./img/slytherin.gif" fluid 
                    width="100px"
                    max-width="100%"
                />
            </div>
            <h1 className='glow'>Security</h1>
            <p>
                Information security is one of the many fields I'm passionate about.
            </p>
            <p>
                I primarily specialise in web security. In my free time, I play cybersecurity Capture the Flag (CTF) competitions
                with <a href="https://ctftime.org/team/151372" rel="noreferrer" target="_blank">Social Engineering Experts</a>, 
                a Singaporean team I founded.
            </p>
            <Container className="my-5">
                <h2 align="center" className='glow'>Stuff I Hacked</h2>
                <div className="text-center">
                    View my <a href="https://hackerone.com/zeyu2001" target="_blank" rel="noopener noreferrer">HackerOne Profile</a>
                </div>
                <hr/>
                <Row className="justify-content-center">
                    <Col xs={12} sm={3} md={3} className="justify-content-center d-flex flex-column">
                        <a href="https://nodejs.org/en/" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="mx-auto d-block" 
                            src="./img/Node.png" fluid width="80%"/>
                        </a>
                    </Col>
                    <Col xs={12} sm={3} md={3} className="justify-content-center d-flex flex-column">
                        <a href="https://upchieve.org/" target="_blank" rel="noopener noreferrer">
                        <Image 
                            className="mx-auto d-block"
                            src="./img/UPchieve.png" fluid width="80%"/>
                        </a>
                    </Col>
                    <Col xs={12} sm={3} md={3} className="justify-content-center d-flex flex-column">
                        <a href="https://www.drugs.com/" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="mx-auto d-block" 
                            src="./img/Drugs.png" fluid width="80%"/>
                        </a>
                    </Col>
                    <Col xs={12} sm={3} md={3} className="justify-content-center d-flex flex-column">
                        <a href="https://www.cedars-sinai.org/" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="mx-auto d-block" 
                            src="./img/Cedars-Sinai.png" fluid width="80%"/>
                        </a>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <Row>
                    <Col xs={12} sm={6} md={6} className="my-5">
                        <h2 align="center" className='glow'>CVEs</h2>
                        <hr/>
                        <div className="text-center my-5">
                            <ul style={{"listStyleType": "none"}}>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank"
                                        href="https://nvd.nist.gov/vuln/detail/CVE-2022-24766">
                                    CVE-2022-24766 - HTTP Request Smuggling in mitmproxy</a>
                                </li>
                                <li>
                                    <a rel="noopener noreferrer" target="_blank"
                                        href="https://nvd.nist.gov/vuln/detail/CVE-2022-24761">
                                    CVE-2022-24761 - HTTP Request Smuggling in waitress</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col xs={12} sm={6} md={6} className="my-5">
                        <h2 align="center" className='glow'>Competitions</h2>
                        <hr/>
                        <div className="text-center my-5">
                            <h3 className='glow'>Singapore CTFs</h3>
                            <ul style={{"listStyleType": "none"}}>
                                <li>
                                    CTF.SG CTF 2022 - 🥉
                                </li>
                                <li>
                                    HTX Investigators' Challenge 2021 - 🥇, but it's a long story
                                </li>
                                <li>
                                    The InfoSecurity Challenge 2021 - Top 30
                                </li>
                                <li>
                                    BrainHack Cyber Defenders Discovery Camp 2021 - 🥉
                                </li>
                            </ul>
                        </div>
                        <div className="text-center my-5">
                            <h3 className='glow'>International CTFs</h3>
                            <ul style={{"listStyleType": "none"}}>
                                <li>
                                    YaCTF 2022 (Individual) - 13th
                                </li>
                                <li>
                                    Asian Cyber Security Challenge 2021 (Individual) - 🥉 in SG, 33rd Overall
                                </li>
                                <li>
                                    Many more on the team's <a href="https://ctftime.org/team/151372" rel="noreferrer" target="_blank">CTFtime Profile</a>
                                </li>
                            </ul>
                        </div>
                        <div className="text-center my-5">
                            <h3 className='glow'>CTF Challenge Author</h3>
                            <ul style={{"listStyleType": "none"}}>
                                <li>
                                    SEETF 2022
                                </li>
                                <li>
                                    STANDCON CTF 2021 - 2022
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Container className="my-5">
                <h2 align="center" className='glow'>Certifications</h2>
                <hr/>
                <Row className="justify-content-center">
                    <Col xs={12} sm={3} md={3} className="justify-content-center d-flex flex-column">
                        <a href="https://www.credly.com/badges/068acdbc-1143-4cff-9cbc-c456ade5ba2b" target="_blank" rel="noopener noreferrer">
                        <Image
                            className="mx-auto d-block" 
                            src="./img/OSCP.png" fluid width="80%"/>
                        </a>
                    </Col>
                    <Col xs={12} sm={3} md={3} className="justify-content-center d-flex flex-column">
                        <a href="https://portswigger.net/web-security/e/c/8dccc9f64c35e1e1" target="_blank" rel="noopener noreferrer">
                        <Image 
                            className="mx-auto d-block"
                            src="./img/BSCP.png" fluid width="80%"/>
                        </a>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default Security;