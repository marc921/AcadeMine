import React from "react";

export default class Nav extends React.Component {

	render(){
		return(
		  <nav>
		    <Link className='academine' href='/' text='AcadéMine'/>
		    <Link href='/web' text='Web' />
		    <Link href='/java' text='Java' />
		    <Link href='/unity' text='Unity' />
		    <Link href='/hacking' text='Cybersécurité' />
		    <Link href='/linux' text='Linux' />
		    <Link href='/git' text='Git' />
		    <Link href='/others' text='Autres' />
		    <Link href='/forum' text='Forum' />
		  </nav>
		);
	};
}

export const Link = ({ className, href, text }) => {
	return (<a className={className} href={href} style={window.location.pathname.includes(href) ? {color: '#fd0'} : {}}>{text}</a>);
} 