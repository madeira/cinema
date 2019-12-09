import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Switch, Route} from 'react-router-dom';

import { getMovies } from '../actions';
import { MainPageContainer, MovieContainer, SheduleContainer } from '../containers';


export class Main extends Component {
    
    componentDidMount(){
        this.props.getMovies();
    }

    render() {
        return (
            <React.Fragment>
                {( 
                    <Switch>
                        <Route path={"/"} exact component={MainPageContainer}/>
                        <Route path={"/movie/:id"} component={MovieContainer}/>
                        <Route path={"/shedule"} component={SheduleContainer}/>
                    </Switch>
                )}
                
                
            </React.Fragment>
            
        );
    }
}

const mapDispatchToProps = {
    getMovies
};

export const MainContainer = connect(null, mapDispatchToProps)(Main);