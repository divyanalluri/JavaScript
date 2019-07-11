import React, {Component} from "react"


class ProductRow extends Component
{

    render(){
        return(
            <div classname="product-row">
                <table>
                    <tr>
                    <td>
                        {(this.props.product.stocked)?(this.props.product.name):<td style={{color:"red"}} >{this.props.product.name}</td>}
                    </td>
                         <td>
                            {this.props.product.Price}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
} 
export default ProductRow