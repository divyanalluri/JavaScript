import React,{Component} from 'react';

import './styles.css'
class Animations2 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            text:" "
        }
    }

    handle = () =>{
        var x=document.getElementById("message")
        x.classList.toggle("dropdown")
        if(this.state.text===" ")
        {
            this.setState({
                text:"hey here I am"
            })
        }
        var ele=document.getElementById("button")
        ele.classList.toggle("button-down")
        }
    render()
    {
        return(
            
            <div className="component1">
                <div className="message" id="message">
                    {this.state.text}
                </div>
                <div className="button">
                    <input type="image" src="assets/down-arrow.png" alt="down-arrow" className="image-button" id="button" onClick={this.handle}/>
                </div>
             </div>
        )
    }
}
export default Animations2

