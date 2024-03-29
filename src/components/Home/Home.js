import React, {Component} from 'react';

import { withStyles } from '../../theme';
import Sidebar from '../Sidebar';
import ReactPageScroller from "react-page-scroller";
import IntroPage from '../IntroPage';
import AboutPage from '../AboutPage';

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
                    {currentPage > 1 &&
                        <div style={{backgroundColor: 'red',height:`${headerHeight}vh`}}>Header</div>
                    }

                    <div>
                        <ReactPageScroller animationTimer={600} containerWidth='100%' containerHeight={`${100-headerHeight}vh`} ref={c => this._pageScroller = c} pageOnChange={this.pageOnChange}>
                            <IntroPage />
                            <AboutPage />
                            <div style={{backgroundColor: 'green', height:'100vh'}}>Page3</div>
                        </ReactPageScroller>
                    </div>
                </Sidebar>
            </div>
        );
    }
};

export default withStyles({})(Home);