import React,{Component} from 'react';

import './styles.css'
class Animations3 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            arr:[]

        }
    }

    grid = (i) =>{
        var k=i*this.props.value;
        this.sample=[];
        //console.log(i)
        for(var j=0;j<this.props.value;j++)
        {
            if(j%this.props.value===0||j%this.props.value===(this.props.value-1))
            {
                this.sample.push(<div className="corner-buttons" id={k} value={k} onClick={this.handle}>{k}</div>)
            }
           else
           {
                this.sample.push(<div className="center-buttons" id={k} value={k} onClick={this.handle}>{k}</div>)
           }
           k=k+1;
        }
        //console.log(this.sample)
        return this.sample;
    }
    handle =(event) =>{
        if(event.target.id%this.props.value===0||event.target.id%this.props.value===(this.props.value-1))
            {
                var ele=document.getElementById(event.target.id)
                 console.log(event.target.id)

                ele.classList.toggle("cbuttons")
            }
        else
        {
            var element=document.getElementById(event.target.id)
            console.log(event.target.id)
            element.classList.toggle("centerbuttons")

        }

    }
    gridCreation = () =>{
        this.samplearray=[];
        for(var i=0;i<this.props.value;i++)
        {
            this.samplearray.push(<div className="row-wise">{this.grid(i)}</div>)
        }
        return this.samplearray;
    }
   
    render()
    {
        return(
          <div className="grid">
              {this.gridCreation()}

          </div>
        )
    }
}
export default Animations3

