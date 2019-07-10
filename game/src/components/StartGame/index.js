import React,{Component} from 'react';

import Grid from '../Grid'
import './styles.css'
class StartGame extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            level:0,
            style:{}
        }
        this.array=this.randomNo(0)
        this.value=""
    }
    randomNo = (l) =>{
        this.arr=[]
        this.array=[]
        let no=(l+3)*(l+3)
        while(this.arr.length<(3+l))
        {
            var randnum=Math.floor(Math.random()*no)+1
            //console.log(randnum)
            var num=randnum
            if(this.arr.indexOf(num)===-1)
            {
                this.arr.push(num)
            }
            //console.log(this.arr.indexOf(num))
        }
        console.log(this.arr+" "+l)

        return this.arr
    }
    
    onSelectWrongBox = () =>{
        this.array=this.randomNo(0)
        if(this.value=="")
        {
            this.value="Failed"
        }
        else if(this.value=="Failed")
        {
            this.value=""
        }
        this.setState({
            level:0}
        )
       // alert(this.array)
    }
    
    onSelectRightBox = () =>{
        this.array=this.randomNo(this.state.level+1)
        this.setState({
            level:this.state.level+1}
            
        )
    
        if(this.state.level>1)
        {
            alert("Congratulations...! On completing all tf levels")
            this.array=this.randomNo(0)
                this.setState({
                    level:0})
        }
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
                <div className="grid-display" key="grid-display">
                       <Grid arr={this.array} level={this.state.level} onSelectWrongBox={this.onSelectWrongBox} key={this.state.level+""+this.value+" "+this.state.styletextcolor + "entire-grid"} onSelectRightBox={this.onSelectRightBox}/>
                        <div className="completion-message">
                        {(this.state.level=="Done")?("Congratulations On completing all the levels"):(null)}
                        </div>
                </div>
          </div>
        )
    }
}
export default StartGame