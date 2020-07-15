import React from 'react'
//import ReactDOM from "react-dom";


class MyInput extends React.Component{

  
  constructor(props) {
               super(props);  
               this.textInput = React.createRef();
               this.state = { inputValue : '', currentRefIndex: null, v1: "",v2: "",v3: "",v4: "", tabindex:null }
  
             }
   
      vc1 = React.createRef();
      vc2 = React.createRef();
      vc3 = React.createRef();
      vc4 = React.createRef();
  
  onChange = (e, index) => { this.setState({ [e.target.name]: e.target.value, currentRefIndex: index }); };
   
  componentDidUpdate() {
    const refs = [this.vc1, this.vc2, this.vc3, this.vc4];
    const { currentRefIndex } = this.state;
   
    //get current ref attributes
    const currentRef = refs[currentRefIndex].current;
    if ( currentRef.value.length === currentRef.maxLength && currentRefIndex < refs.length - 1 ) 
     {
         refs[currentRefIndex + 1].current.focus();
         
     }
     //console(currentRef)
    if(currentRef.value.length === 0 &&  currentRefIndex > 0 ) {
         refs[currentRefIndex - 1].current.focus();
         
         
     }
  }

  render(){
        
      return(
           <div>
              <div className="inl wid">
                <input className="inpwid" maxLength={4} ref={this.vc1} name="v1"  value={this.state.v1} onChange={e => this.onChange(e, 0)} />
              </div>
          
              <div className="inl wid">
               <input className="inpwid" maxLength={4} ref={this.vc2}  name="v2" value={this.state.v2} onChange={e => this.onChange(e, 1)}/>
             </div>
             <div className="inl wid">
               <input className="inpwid" maxLength={4} ref={this.vc3} name="v3"  value={this.state.v3} onChange={e => this.onChange(e, 2)}/>
             </div>
             <div className="inl wid">
               <input className="inpwid" maxLength={4} ref={this.vc4} name="v4"  value={this.state.v4} onChange={e => this.onChange(e, 2)}/>
             </div>
         </div>
        );
    }
}


export default MyInput