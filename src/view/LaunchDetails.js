import React from 'react';
import PropTypes from 'prop-types';
import launch from '../assets/sample_json_data/launch.json';
import launchSite from '../assets/sample_json_data/launch_site.json';
import rocket from '../assets/sample_json_data/rocket.json';
import logo from '../assets/img/space_x_logo_bw_centered.png';
import arrow from '../assets/img/arrow_pointer.png';

import './LaunchDetails.sass';

class LaunchDetails extends React.Component {
    static propTypes = {
        // username: PropTypes.string.isRequired,
    };

    state = {
        // welcomeText: 'Hello',
    };

    render() {
        // const { welcomeText } = this.state;
        // const { username } = this.props;

        return (
            <div className="main-container">
                <div className="navigation">
                    <div className="navigation__left">
                        <img className="navigation__arrow" src={arrow} alt='arrow'/>
                    <span className="navigation__arrow-part"></span>
                    <a className="navigation__button-back">Go Home</a>
                    </div>
                    <div className="navigation__right">
                    <img src={logo} alt="logo" className="navigation__logo"/>
                    </div>
                </div>

                <div className="section launch">
                  <div className="launch__info">
                    <p className="launch__info__date">{launch.launch_date_utc}</p>
                    <h1 className="launch__info__name">{launch.rocket.rocket_name} Next Launch</h1>
                    <p className="launch__info__counter"> to start</p>
                    <img src={launch.links.mission_patch_small} alt="launch-logo" className="launch__logo"></img>
                  </div>
                  <div className="launch__details">
                    <div className="launch__details__description">
                      <h1 className="launch__details__title">Details</h1>
                      <p>{launch.details}</p>
                    </div>
                    <div className="launch__details__description">
                      <h1 className="launch__details__title">Rocket</h1>
                      <div className="launch__details__more">
                        <p>Name: <span>{rocket.name}</span></p>
                        <p>Company: <span>{rocket.company}</span></p>
                        <p>Height: <span>{rocket.height.meters} / {rocket.height.feet}</span></p>
                        <p>Diameter: <span>{rocket.diameter.meters} / {rocket.diameter.feet}</span></p>
                        <p>Mass: <span>{rocket.mass.kg} / {rocket.mass.lb}</span></p>
                      </div>
                      <div className="launch__details__more">
                        <p>First Flight: <span>{rocket.first_flight}</span></p>
                        <p>Country: <span>{rocket.country}</span></p>
                        <p>Success Rate: <span>{rocket.success_rate_pct}%</span></p>
                        <p>Cost per Launch: <span>${rocket.cost_per_launch}</span></p>
                      </div>
                      <p>{rocket.description}</p>
                    </div>
                    <div className="launch__details__description">
                      <h1 className="launch__details__title">Launch Pad</h1>
                      <div>
                        <p>Name: <span>{launchSite.location.name}</span></p>

                      </div>
                      <div>
                        <p>Location: <span>{launchSite.location.region}</span></p>

                      </div>
                      <p>{launchSite.details}</p>
                    </div>
                  </div>
                </div>

                <div className="section__learn-more">
                  <h2 className="section__learn-more__heading">
                    Mission links
                  </h2>
                  <a className="section__learn-more__links">Reddit campaign</a>
                  <a className="section__learn-more__links">Presskit</a>
                  <a className="section__learn-more__links">Mission Video</a>
                </div>

                <div className="footer">
                  <div className="footer__container container__left">
                    <ul className="footer__social-icons">
                        <li className="footer__social-icons__elements">Follow Spacex</li>
                        <li className="footer__social-icons__elements">Twitter</li>
                        <li className="footer__social-icons__elements">Youtube</li>
                        <li className="footer__social-icons__elements">Flickr</li>
                        <li className="footer__social-icons__elements">Instagram</li>
                    </ul>
                  </div>
                  <div className="footer__container container__right">
                    <p>
                        2018 space exploration technologies corp.
                    </p>
                  </div>
                </div>
            </div>

        );
    }
}

export default LaunchDetails;
