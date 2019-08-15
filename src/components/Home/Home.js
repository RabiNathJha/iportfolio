import React, {Component} from 'react';

import { withStyles, Slide } from '../../theme';
import Fade from 'react-reveal/Fade';
import Sidebar from '../Sidebar';
import Background from '../Background';
import ReactPageScroller from "react-page-scroller";

const styles = theme => ({
    setAsBackgroung: {
        position: 'absolute',
        zIndex: -1,
        backgroundColor: 'black',
        height: '100%',
        width: '100%'
    },
    body: {
        color: 'red',
        width: '50%'
    }
});

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1,
        };
        this._pageScroller = null;
    }

    pageOnChange = (number) => {
        this.setState({currentPage: number});
    };

    goToPage = (eventKey) => {
        this._pageScroller.goToPage(eventKey);
    };

    render() {
        const { classes } = this.props;
        const { currentPage } = this.state;
        const headerHeight = currentPage > 1 ? 5 : 0;

        return(
            <div>
                <Sidebar>
                    {/* <div className={classes.setAsBackgroung}>
                        <Background />
                    </div> */}
                    {currentPage > 1 &&
                        <Fade right big>
                            <div style={{backgroundColor: 'red',height:`${headerHeight}vh`}}>Header</div>
                        </Fade>
                    }

                    <div className={classes.body}>
                        <ReactPageScroller animationTimer={600} containerWidth='200%' containerHeight={`${100-headerHeight}vh`} ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                            <div>
                                <div className={classes.setAsBackgroung}>
                                    <Background />
                                </div>
                                Page1
                            </div>
                            <div style={{backgroundColor: 'yellow', height:'100vh'}}>Page2</div>
                            <div style={{backgroundColor: 'green', height:'100vh'}}>Page3</div>
                        </ReactPageScroller>
                    </div>
                </Sidebar>
            </div>
        );
    }
};

export default withStyles(styles)(Home);