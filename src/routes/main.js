import React from 'react';
import {connect} from 'react-redux';
import { Switch, Route} from 'react-router-dom';

import { getMovies } from '../actions';
import { MainPageContainer, MovieContainer } from '../containers';


export class Main extends React.Component {
    
    componentDidMount(){
        this.props.getMovies();
    }

    render() {
        return (
            <Switch>
                <Route path={"/"} exact component={MainPageContainer}/>
                <Route path={"/movie/:id"} component={MovieContainer}/>
            </Switch>
        );
    }
}

const mapDispatchToProps = {
    getMovies
};

export const MainContainer = connect(null, mapDispatchToProps)(Main);