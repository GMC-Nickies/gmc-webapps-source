import React, { Component } from "react";
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'
import profile from '../assets/profile.png'
import Title from './Title';

class App extends Component {
	state = {displayBio: false};

	toggleDisplayBio = () => {
		this.setState({displayBio: !this.state.displayBio});
	}

	render() {
		const bio = this.state.displayBio ? (
			<div>
				<p>I made this site to demonstrate some simply capabilities of React and Redux.</p>
				<p>That said, you might find some of the pages useful.</p>
				<p>
					For example, you can find music recommendations in the Music Sampler, or play around with probability on the card game pages.
				</p>
				<button onClick={this.toggleDisplayBio}>Show less</button>
			</div>
		) : (
			<div>
				<button onClick={this.toggleDisplayBio}>Read more</button>
			</div>
		);
		return (
			<div>
				<img src={profile} alt="my-profile-image" className='profile'/>
				<h1>Hello!</h1>
				<p>Welcome to my web app collection site, featuring:</p>
				{ // this.state.displayBio 
					true ? <Title /> : null}
				<p>Click the links above to get started!</p>
				{bio}
				<hr />
				<SocialProfiles />
			</div>
		);
	}
}

export default App;
