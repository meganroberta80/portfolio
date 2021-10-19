import React from 'react'
import { Link } from 'react-router-dom'

class Nav extends React.Component {
    hamburgerContainer = React.createRef();
    state = {
        open: false
    }
    handleBurgerClick = () => {
        this.setState((state) => {
            return {
                open: !state.open
            }
        })
    }
    handleClickOutside = (event) => {
        if (
            this.hamburgerContainer.current &&
            !this.hamburgerContainer.current.contains(event.target)
        ) {
            this.setState({
                open: false,
            });
        }
    };

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    render() {
        return (
            <div className="Nav">
                <div className="hamburger-container" red={this.hamburgerContainer}>

                    <button type="button" class="hamburger-button" onClick={this.handleBurgerClick}>
                        ☰
                    </button>
                    {this.state.open && (

                        <div class="dropdown">
                            <ul>
                                <Link to="/" exact>
                                    <h4>Home</h4>
                                </Link>
                                <Link to="/about" >
                                    <h4>About</h4>
                                </Link>
                                <Link to="/projects">
                                    <h4>Projects</h4>
                                </Link>
                                <Link to="/resume">
                                    <h4>Resume</h4>
                                </Link>

                            </ul>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Nav