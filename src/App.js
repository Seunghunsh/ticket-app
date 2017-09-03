import React, { Component } from 'react';
import logo from './logo.svg';
import single_icon from './single_icon.svg';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import AppBar from 'material-ui/AppBar';
// import {grey900} from 'material-ui/styles/colors';
// import {Tabs, Tab} from 'material-ui/Tabs';
// import FontIcon from 'material-ui/FontIcon';
// import ActionFlightTakeoff from 'material-ui/svg-icons/action/flight-takeoff';
// import injectTapEventPlugin from 'react-tap-event-plugin'
import './styles/App.css'; // Tell Webpack that App.js uses these styles
import logo_workday from './logo_workday.png';
import clock from './clock.png';
import untilaug31 from './untilaug31.png';
import single from './single_icon.png';
import group from './group_icon.png';
import investors from './investors.png';
import startups from './_startup_icon.png';
import slash from './slash.png';


import FaLinkedIn from 'react-icons/lib/fa/linkedin';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaYoutube from 'react-icons/lib/fa/youtube';
import FaInstagram from 'react-icons/lib/fa/instagram';


// injectTapEventPlugin();
// const muiTheme = getMuiTheme({
//   palette: {
//     textColor: grey900,
//   },
//   appBar: {
//     color: grey900
//   },
// });
// const styles = {
//   headline: {
//     fontSize: 24,
//     paddingTop: 16,
//     marginBottom: 12,
//     fontWeight: 400,
//   },
// };
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 'a',
    };
  }

  handleChange = (value) => {
    this.setState({
      value: value,
    });
  };

  render() {
    return (
      // <MuiThemeProvider muiTheme={muiTheme}>
        <div className="App">
          <div className="Nav">
            <img src={logo} alt="Logo"/>
          </div>
          <div className="secondNav">
            <ul style={{color: '#a6a6a6'}}>
              <li><a style={{color: '#14A3D1', fontSize: '18px', fontWeight: '900'}}><img alt="single_icon" src={single}/> Single Attandee</a></li>
              <li><a><img src={group}/> Group Tickets</a></li>
              <li><a><img src={investors}/> Investors</a></li>
              <li><a><img src={startups}/>Startups</a></li>
            </ul>
          </div>
          <div className="thirdNav" style={{margin: '36px 0', height: '90px', display: 'flex', justifyContent: 'center'}}>
            <ul style={{padding: '0', margin: '0 auto', width: '862px', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', height: '100%', color: '#14A3D1', fontSize: '18px', fontWeight: '900'}}>
              <li><a>EARLY BIRD SOLDOUT</a></li>
              <li><img src={slash}/></li>
              <li><a> SUMMER SAVER <img src={clock}/><img src={untilaug31}/></a></li>
              <li><img src={slash}/></li>
              <li><a> REGULAR</a></li>
              <li>/</li>
              <li><a>LATE</a></li>
              <li>/</li>
              <li><a>ONSITE REGISTRATION</a></li>
            </ul>
          </div>
          <div className="" style={{textAlign: 'center', width: '560px', height: '92px', fontWeight: '900', fontSize: '14px', margin: '0 auto 100px auto'}}>
            Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable helvetica sartorial. Dreatmcatcher live-edge lo-fi, chartreuse echo park pinterest distillery glossier plaid fingerstache. Fashion axe keytar truffaut migas Farm-to-table PBR&B. Drinking vinegar sustainable helvetica
          </div>
          <div className="cards">
            <div className="card">
              <div style={{margin: '10px auto 0 auto', fontWeight: '900', fontSize: '21px'}}>SUMMER SAVER</div>
              <div style={{margin: '0px auto 0 auto', fontWeight: '900', fontSize: '60px'}}>€1595</div>
              <div style={{color: '#999999'}}>Save €300</div>
              <div style={{margin: '0px auto 40px 0', fontSize: '18px'}}>Until August 31.</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Cold-pressed poke thundercats 			brooklyn chillwave chartreuse</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Craft beer 3 wolf moon tbh hoodie</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	YOLO synth hammock</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Distillery aesthetic VHS affogato 			gentrify bespoke </div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Chia readymade schlitz brunch 			yuccie echo park</div>
              <a className="bar">
                <div style={{color: '#fff', fontWeight: '900', fontSize: '21px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>BOOK NOW</div>
              </a>
            </div>
            <div className="card" style={{marginTop: '-30px', height: '640px'}}>
              <div style={{margin: '10px auto 0 auto', fontWeight: '900', fontSize: '21px', color: '#ff0033'}}>SUMMER SAVER</div>
              <div style={{margin: '0px auto 0 auto', fontWeight: '900', fontSize: '60px'}}>€1595</div>
              <div style={{color: '#999999'}}>Save €300</div>
              <div style={{margin: '0px auto 40px 0', fontSize: '18px'}}>Until August 31.</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Cold-pressed poke thundercats 			brooklyn chillwave chartreuse</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Craft beer 3 wolf moon tbh hoodie</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	YOLO synth hammock</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Distillery aesthetic VHS affogato 			gentrify bespoke </div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto 10px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Chia readymade schlitz brunch 			yuccie echo park</div>
              <a className="bar" style={{backgroundColor: '#ff0033'}}>
                <div style={{color: '#fff', fontWeight: '900', fontSize: '21px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>BOOK NOW</div>
              </a>
            </div>
            <div className="card">
              <div style={{margin: '10px auto 0 auto', fontWeight: '900', fontSize: '21px'}}>SUMMER SAVER</div>
              <div style={{margin: '0px auto 0 auto', fontWeight: '900', fontSize: '60px'}}>€1595</div>
              <div style={{color: '#999999'}}>Save €300</div>
              <div style={{margin: '0px auto 40px 0', fontSize: '18px'}}>Until August 31.</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Cold-pressed poke thundercats 			brooklyn chillwave chartreuse</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Craft beer 3 wolf moon tbh hoodie</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	YOLO synth hammock</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Distillery aesthetic VHS affogato 			gentrify bespoke </div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Chia readymade schlitz brunch 			yuccie echo park</div>
              <a className="bar">
                <div style={{color: '#fff', fontWeight: '900', fontSize: '21px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>BOOK NOW</div>
              </a>
            </div>
            <div className="card">
              <div style={{margin: '10px auto 0 auto', fontWeight: '900', fontSize: '21px'}}>SUMMER SAVER</div>
              <div style={{margin: '0px auto 0 auto', fontWeight: '900', fontSize: '60px'}}>€1595</div>
              <div style={{color: '#999999'}}>Save €300</div>
              <div style={{margin: '0px auto 40px 0', fontSize: '18px'}}>Until August 31.</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Cold-pressed poke thundercats 			brooklyn chillwave chartreuse</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Craft beer 3 wolf moon tbh hoodie</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	YOLO synth hammock</div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Distillery aesthetic VHS affogato 			gentrify bespoke </div>
              <div style={{width: '250px', textAlign: 'left', margin: '15px auto', color: '#000'}}><span style={{fontSize: '20px', color: '#18a8e1', marginRight: '10px'}}>•</span>	Chia readymade schlitz brunch 			yuccie echo park</div>
              <a className="bar">
                <div style={{color: '#fff', fontWeight: '900', fontSize: '21px', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>BOOK NOW</div>
              </a>
            </div>
          </div>
          <div style={{position: 'relative', margin: '100px auto 100px auto', width: '209px', height: '42px', border: '1px solid #18A8E1'}}>
            <a style={{color: '#18A8E1', fontSize: '20px', fontWeight: '700', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>Close</a>
          </div>
          <div style={{textAlign: 'center', margin: '0 auto 50px auto', color: '#CCCCCC', fontSize: '20px', fontWeight: '700'}}>OUR TRUSTED PARTNERS</div>
          <div style={{maxWidth: '700px', display: 'flex', justifyContent: 'space-between', margin: '0 auto 100px auto'}}>
            <img src={logo_workday} />
            <img src={logo_workday} />
            <img src={logo_workday} />
            <img src={logo_workday} />
            <img src={logo_workday} />
          </div>
          <footer className="landing">
            <img src={logo} alt="Logo"/>
            <ul style={{width: '100%', margin: '30px auto 10px auto', display: 'flex', justifyContent: 'space-between', maxWidth: '300px'}}>
              <a>HRN</a>
              <a>ABOUT</a>
              <a>TEAM</a>
              <a>JOBS</a>
              <a>CONTACT</a>
            </ul>
            <ul className="icons" style={{width: '100%', margin: '30px auto 30px auto', display: 'flex', justifyContent: 'space-between', maxWidth: '300px'}}>
              <a><FaTwitter/></a>
              <a><FaLinkedIn/></a>
              <a><FaFacebook/></a>
              <a><FaInstagram/></a>
              <a><FaYoutube/></a>
            </ul>
            <div style={{margin: '30px auto 0 auto'}}>HRN | TERMS AND CONDITIONS | COOKIE POLICY | COPYRIGHT @2015 HRN EUROPE. ALL RIGHTS RESERVED</div>
          </footer>
        </div>
      // </MuiThemeProvider>
    );
  }
}

export default App;
