import React, { PureComponent } from 'react';

class NoaMatch extends PureComponent{
    render(){
        return(
            <h1>404, Page Not Found, Match for ：【{this.props.location.pathname}】</h1>
        )
    }
}

export default NoaMatch