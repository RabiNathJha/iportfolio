import React, {Component} from 'react';

import { withStyles, Slide } from '../../theme';
import Fade from 'react-reveal/Fade';
import Sidebar from '../Sidebar';
import Background from '../Background';
import ReactPageScroller from "react-page-scroller";
import PageOne from '../PageOne';

// const styles = theme => ({
//     setAsBackgroung: {
//         position: 'absolute',
//         zIndex: -1,
//         backgroundColor: 'black',
//         height: '100%',
//         width: '100%'
//     },
//     body: {
//         color: 'red',
//         width: '50%'
//     }
// });

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
                            <PageOne currentPage={currentPage} key={currentPage} />
                            <div style={{backgroundColor: 'yellow', height:'100vh'}}>Page2</div>
                            <div style={{backgroundColor: 'green', height:'100vh'}}>Page3</div>
                        </ReactPageScroller>
                    </div>
                </Sidebar>
            </div>
        );
    }
};

export default withStyles({})(Home);