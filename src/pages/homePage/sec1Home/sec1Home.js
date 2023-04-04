import './sec1Home.css';
import checkbox from '../../../images/checkmark-removebg-preview.png';
import vision from '../../../images/vision.png';
import dog from '../../../images/dogs.jpg';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Sec1Home = () => {
  return (
    <body className="container2">
      <div className="charity">
        <div className="featured">
          <div className="welcome">
            <p>Welcome To ...</p>
            <div className="line" />
          </div>
          <p className="difference-text">
            Let Us Come Together <br /> To Make a Difference
          </p>
          <p className="description">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy tempor invidunt
            ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo.
          </p>
          <div className="side">
            <div className="boxes">
              <div className="title-box">
                <img src={checkbox} width="26px" height="26px" />
                <p style={{ marginRight: 3, color: '#219D80' }}> Our Mission</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
            </div>
            <div className="boxes">
              <div className="title-box">
                <img src={vision} width="26px" height="26px" />
                <p style={{ marginRight: 3, color: '#219D80' }}> Our Vision</p>
              </div>
              <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</p>
            </div>
          </div>
          <div class="skill">
            <p>Donations</p>
            <div class="skill-bar skill1">
              <span class="skill-count1">95%</span>
            </div>
          </div>
          <div class="skill">
            <p>Medical Help</p>
            <div class="skill-bar skill1">
              <span class="skill-count1">95%</span>
            </div>
          </div>
          <div></div>
        </div>
        <div>
          <div className="image-box">
            <img src={dog} width="400" style={{ display: 'block' }} />
          </div>
          <div className="desc-box">
            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
            <li>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam</li>
          </div>
        </div>
      </div>
      <div className="latest-causes">
        <div className="welcome">
          <p>Latest Causes</p>
          <div className="line" />
        </div>
        <p className="difference-text">
          {' '}
          Find the popular cause <br /> and donate them
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={dog} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Card Title
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill1">
                  <span style={{ left: '91%', fontSize: '18px' }}>95%</span>
                </div>
              </div>
              <Button className="donate-button">Donate Now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={dog} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Card Title
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill1">
                  <span style={{ left: '91%', fontSize: '18px' }}>95%</span>
                </div>
              </div>
              <Button className="donate-button">Donate Now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={dog} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Card Title
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill1">
                  <span style={{ left: '91%', fontSize: '18px' }}>95%</span>
                </div>
              </div>
              <Button className="donate-button">Donate Now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={dog} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Card Title
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill1">
                  <span style={{ left: '91%', fontSize: '18px' }}>95%</span>
                </div>
              </div>
              <Button className="donate-button">Donate Now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={dog} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Card Title
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill1">
                  <span style={{ left: '91%', fontSize: '18px' }}>95%</span>
                </div>
              </div>
              <Button className="donate-button">Donate Now</Button>
            </Card.Body>
          </Card>
          <Card style={{ width: '288px', background: '#E5E5E5', marginTop: 35, marginRight: 50 }}>
            <Card.Img variant="top" src={dog} width="288" style={{ marginBottom: 15 }} />
            <Card.Body style={{ margin: '10px' }}>
              <Card.Title
                style={{
                  color: '#219D80',
                  fontWeight: 600,
                  fontSize: '16px',
                  marginTop: '10px',
                  marginBottom: '10px'
                }}
              >
                Card Title
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </Card.Text>
              <div class="skill">
                <p style={{ fontWeight: 600, fontSize: '18px' }}>Donations</p>
                <div class="skill-bar skill1">
                  <span style={{ left: '91%', fontSize: '18px' }}>95%</span>
                </div>
              </div>
              <Button className="donate-button">Donate Now</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </body>
  );
};

export default Sec1Home;
