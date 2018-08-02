import React, { Component } from 'react';
import Aux from '../Auxiliary/Auxiliary';
import classes from './Layout.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
class Layout extends Component {
    state={
        showSideDrawer: false
    }
     
    sideDrawerClosedHandler = () =>{
        this.setState({showSideDrawer: false});
    }

    sideDrawerToggle = () => {
        this.setState((prevState)=> {
            return{showSideDrawer: !prevState.showSideDrawer};
        })
    }
    render() {
        return (
            <Aux>
                <Toolbar clicked = {this.sideDrawerToggle} />
                <SideDrawer
                 open={this.state.showSideDrawer} 
                 closed={this.sideDrawerClosedHandler}/>
                <main className={classes.content}>
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

export default Layout;