import React, {Component} from 'react';


class Footer extends Component{
    state = {
        count: 1
    }
    render(){
        return(
            <footer className="footer">
                <div className="bottom">Clicky Game! 
                    <img alt="react"  />
                    {/* <p>********{this.state.count + 1}********</p> */}
                </div>
            </footer>
        )
    }
};

export default Footer;