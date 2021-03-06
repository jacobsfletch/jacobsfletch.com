import React from 'react'
import { Link } from 'react-router-dom'

import { OnWheel, OnTouchMove } from '../../../tools/Scroll'

import './index.css'

export default class HomeScreen extends React.Component {

	constructor(props) {
		super(props)
		this.onTouchMove = OnTouchMove.bind(this)
		this.onWheel = OnWheel.bind(this)
		this.state = {
			lastScrollY: 0
		}
	}

	render() {
		return (
			<section className="screen-home"
				ref={(home) => { this.screenRef = home }}
				onWheel={this.onWheel}
				onTouchMove={this.onTouchMove}
			>
				<article className="screen-body">
					<h1 className="screen-title">
						hello, my name is jacob fletcher and this is my website.
						<br /><br />
						it is a place to <Link to={"/Portfolio"}>see</Link> my work,
						a place to <Link to={"/blog"}>read</Link> my thoughts,
						and somewhere to <Link to={"/"}>buy</Link> my stuff.
						Feel free to <Link to={"/contact"}>write</Link> me a letter
						- or even <Link to={"/doodle"}>draw</Link> me a picture.
					</h1>
				</article>
			</section>
		)
	}
}
