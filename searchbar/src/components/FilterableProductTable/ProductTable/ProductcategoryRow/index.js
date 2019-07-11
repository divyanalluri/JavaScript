import React, {Component} from "react"


class ProductcategoryRow extends Component
{

    render(){
        return(

            <div className="product-category-row">
                
                <table>
                    <tr>
                        <td>
                            {this.props.category}
                        </td>
                    </tr>
                </table>
            </div>
        )
    }
} 
export default ProductcategoryRow