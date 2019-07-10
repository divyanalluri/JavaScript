import React,{Component} from 'react';

import './styles.css'


class Grid extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            selectedicons:[]
        }
        this.timer()
    }
    gridrow = (i) =>{
        this.randarray=this.props.arr
        var k=1+(this.props.level+3)*i;
        const sample=[];
        console.log(this.randarray)
        for(var j=1;j<=this.props.level+3;j++)
        {
            if(this.randarray.indexOf(k)!==-1)
            {
                sample.push(<div className="icons rightcolorchosen" id={k} value={k} key={this.props.level+" "+k} onClick={this.selectBox}>{k}</div>)
            }
            else
            {
                sample.push(<div className="icons" id={k} value={k} onClick={this.selectBox}  key={this.props.level+ " " +k}>{k}</div>)
            }
                k=k+1;
        }
        return sample;
    }
     timer= () =>{
         setTimeout( () => { 
            for(var p=0;p<this.props.arr.length;p++)
            {
                //alert(this.state.rand[p]+" "+this.state.rand.length)
                    var element=document.getElementById(this.props.arr[p]);
                    element.classList.toggle("rightcolorchosen")
            }
        },1000*(this.props.level+1))
    }
    selectBox = (event) =>{
       // alert(event.target.id)
       // console.log(this.arr.indexOf(event.target.id))
        const samplearray=this.state.selectedicons;
        samplearray.push(event.target.id);
        this.setState({
            selectedicons:samplearray
        })
        if(this.props.arr.indexOf(parseInt(event.target.id))!=-1)
         {
            var element=document.getElementById(event.target.id)
             element.classList.toggle("rightcolorchosen")
            // console.log("hello")
            if(this.state.selectedicons.length===(this.props.level+3))
            {
                this.props.onSelectRightBox()
              this.setState({
                selectedicons:[]
                  
              })
            }
        }
        else
        {
            var element=document.getElementById(event.target.id)
            element.classList.toggle("wrongcolorchosen")
            this.props.onSelectWrongBox()
              this.setState({
                selectedicons:[]
                  
              })
        }
    }
    grid =() =>{
        const samplearray=[];
        for(var i=0;i<this.props.level+3;i++)
        {
            samplearray.push(<div className="row-wise">{this.gridrow(i)}</div>)
        }
        return samplearray;
    }
    render()
    {
        return(
                <div className="grid-display">
                       {this.grid()}
                </div>
        )
    }
}
export default Grid