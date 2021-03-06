import React, { Fragment } from 'react'

//Resources
import { GitHub, Linkedin, Twitter } from 'react-feather'
import '../scss/footer.scss'
import AimHigher from '../img/aimhigher.svg'

const menuItems = [
	{
		name: 'github',
		icon: <GitHub />,
		url: 'https://github.com/AimHigher-Web-Design/tech-outsiders',
	},
	{
		name: 'linkedin',
		icon: <Linkedin />,
		url: 'https://www.linkedin.com/company/techoutsiders/',
	},
	{
		name: 'twitter',
		icon: <Twitter />,
		url: 'https://twitter.com/TechOutsiders',
	},
]

const legalItems = [
	{
		slug: '/about/',
		title: 'About',
	},
	{
		slug: '/terms/',
		title: 'Terms',
	},
	{
		slug: '/privacy/',
		title: 'Privacy',
	},
]

const Footer = () => (
	<Fragment>
		<FooterNav />
		<FooterSocial />
		<a
			href="https://aimhigherwebdesign.com.au"
			target="_blank"
			rel="nofollow"
			className="aimhigher"
			title="Made and Developed by AimHigher Web Design"
		>
			<AimHigher />
		</a>
	</Fragment>
)

const FooterNav = () => {
	let legalNav = legalItems.map(legalItem => {
		return (
			<a key={legalItem.title} href={legalItem.slug} activeclassname="current">
				{legalItem.title}
			</a>
		)
	})

	return (
		<nav>
			<a href="/" activeclassname="current">
				Home
			</a>
			{legalNav}
		</nav>
	)
}

const FooterSocial = () => {
	let socialNav = menuItems.map(menuItem => {
		return (
			<a href={menuItem.url} key={menuItem.name} target="_blank">
				{menuItem.icon}
			</a>
		)
	})

	return <nav className="social">{socialNav}</nav>
}

export default Footer
