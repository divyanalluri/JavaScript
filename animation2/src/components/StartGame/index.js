import React,{Component} from 'react';

import './styles.css'
class StartGame extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            level:2,
            style:{}
        }
    }
    gridrow = (i) =>{
        var k=1+(this.state.level+3)*i;
        this.sample=[];
        //console.log(i)
        for(var j=1;j<=this.state.level+3;j++)
        {
                this.sample.push(<div className="icons" id={k} value={k} onClick={this.selectBox}>{k}</div>)
                k=k+1;
        }
        //console.log(this.sample)
        return this.sample;
    }
    selectBox = (event) =>{
        console.log(this.arr)
        var element=document.getElementById(event.target.id)
            console.log(event.target.id)
            console.log(this.arr.indexOf(event.target.id))
            if(this.arr.indexOf(event.target.id)!==-1)
            {
                element.classList.toggle("rightcolorchosen")
                console.log("hello")
            }
            else
            {
                element.classList.toggle("wrongcolorchosen")
            }
    }
    grid =() =>{
        this.samplearray=[];
        for(var i=0;i<this.state.level+3;i++)
        {
            this.samplearray.push(<div className="row-wise">{this.gridrow(i)}</div>)
        }
        return this.samplearray;
    }
    handle =(e) =>{
        var NightMode={
           colouring:{
               "background-color":'#B1A595'
           },
           textcolor:{
                "color":'black'
           }
        }
        var NormalMode={
            colouring:{
                "background-color":'blue'
            },
            textcolor:{
                "color":'white'
           }
        }
        if(e.target.checked)
        {
            this.setState({
                style:NightMode
            })
        }
        else
        {
            this.setState({
                style:NormalMode
            })

        }
        console.log(this.state.style)
        console.log(e.target.checked)
    }
    initialSelect = () =>{
        this.arr=[]
        let l=this.state.level
        while(this.arr.length<(3+l))
        {
            var randnum=Math.floor(Math.random()*10)+1
            console.log(randnum)
            if(this.arr.indexOf(randnum)===-1)
            {
                this.arr.push(randnum)
            }
            console.log(this.arr)
        }
        for(var i=0;i<l;i++)
        {
            //console.log(this.arr.i)
            //console.log(this.arr.indexOf(this.arr.i))
            if(this.arr.indexOf(this.arr.i)!==-1)
            {
                var element=document.getElementById(this.arr.i)
                element.classList.toggle("rightcolorchosen")
                console.log("hello")
            }
            else
            {
                element.classList.toggle("wrongcolorchosen")
            }
        }
    }
    render()
    {
        return(
          <div className="total-display" style={this.state.style.colouring}>
              <div className="level-toggle-display">
                  <div>
                         <label style={this.state.style.textcolor}>
                              Level: {this.state.level}
                        </label>
                    </div>
                <div>
                         <label className="theme-mode" style={this.state.style.textcolor}>
                              Theme Mode:
                        </label>
                        <label className="switch">
                            <input type="checkbox" className="check-box" onClick={this.handle}/>
                            <span className="slider"></span>
                        </label>
                </div>
              </div>
              <div className="grid-display">
                    {this.grid()}{this.initialSelect()}
              </div>

          </div>
        )
    }
}
export default StartGame