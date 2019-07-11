import React,{Component} from "react"

class SearchingBar extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
    
        }
    }

    onChange = (event) =>{
        this.props.valueChange(event.target.value)
    }
    check =(e) =>{
        this.props.statusChange(e.target.checked)
    }
    render(){
        return(
            <div className="search-bar">
                <div>
                    <input type="text"  className="search-bar" onChange={this.onChange}>

                    </input>
                </div>
                <div>
                    <input type="checkbox" className="checkbox" onChange={this.check} >

                    </input>
                    <span>
                        Only show products in stock
                    </span>
                </div>
               
            </div>
        )
    }
}
export default SearchingBar