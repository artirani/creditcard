import React from 'react'
import MyInput from './MyInput'

class CreditCard extends React.Component{

render(){
    return (<div className="centwid">
        <div className="inl widcont">Card Number* </div><div className="inl widinp"><MyInput/></div>
      </div>
    );
}

}

export default CreditCard