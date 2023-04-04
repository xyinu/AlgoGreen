import './sec2Home.css';
import dog from '../../../images/dogs.jpg';
import rocket from '../../../images/rocket.png';
import unicorn from '../../../images/unicorn.jpg';

const sec2Home = () => {
  return (
    <div className="container3">
      <h1
        style={{
          fontSize: 70,
          paddingTop: '20px',
          fontWeight: 1000,
          textAlign: 'center',
          color: 'white'
        }}
      >
        What's Next
      </h1>
      <div className="sec2">
        <div className="left-info">
          <img
            src={rocket}
            width="70"
            height="70"
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }}
          />
          <p
            style={{
              fontSize: 30,
              fontWeight: 600,
              textAlign: 'center',
              marginTop: 25,
              marginBottom: 20,
              color: '#0b8c75'
            }}
          >
            Create DAO
          </p>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <a href="form" style={{ textDecoration: 'none' }}>
            <div className="create">Create</div>
          </a>
        </div>
        <div className="mid-info">
          <img
            src={rocket}
            width="70"
            height="70"
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }}
          />
          <p
            style={{
              fontSize: 30,
              fontWeight: 600,
              textAlign: 'center',
              marginTop: 25,
              marginBottom: 20,
              color: '#0b8c75'
            }}
          >
            View All Causes
          </p>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <div className="create">View</div>
        </div>
        <div className="right-info">
          <img
            src={unicorn}
            width="70"
            height="70"
            style={{ display: 'block', marginLeft: 'auto', marginRight: 'auto', marginTop: 30 }}
          />
          <p
            style={{
              fontSize: 30,
              fontWeight: 600,
              textAlign: 'center',
              marginTop: 25,
              marginBottom: 20,
              color: '#0b8c75'
            }}
          >
            Learn About AlgoGreen
          </p>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet</li>
          <div className="create">Learn</div>
        </div>
      </div>
    </div>
  );
};

export default sec2Home;
