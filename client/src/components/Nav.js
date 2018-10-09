import React from "react";

const Nav = (props) => (
	
	<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    	<a className="navbar-brand" href="/">
      		Planning App
    	</a>
		<ul className="nav navbar-nav navbar-right">
			<li><a href="/signup"><span className="glyphicon glyphicon-user"></span> Sign Up</a></li>
			<li className="dropdown"><span className="dropdown-toggle" data-toggle="dropdown"><span className="glyphicon glyphicon-log-in"></span> Login</span>
				<div className="dropdown-menu">
					<form className="form-horizontal"  method="post" acceptCharset="UTF-8">
						<input id="sp_uname" className="form-control login" type="text" name="sp_uname" placeholder="Username.." />
						<input id="sp_pass" className="form-control login" type="password" name="sp_pass" placeholder="Password.."/>
						<input className="btn btn-primary" type="submit" name="submit" value="login" />
					</form>
				</div>
			</li>
		</ul>
  	</nav>
);

export default Nav;