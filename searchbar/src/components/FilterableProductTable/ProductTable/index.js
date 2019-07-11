import React, {Component} from "react"

import ProductcategoryRow from './ProductcategoryRow'
import ProductRow from  './ProductRow'


class ProductTable extends Component
{
    displayProductTable = () =>{
        var lastcategory=" ";
        const sample=[]
        for(var i=0;i<this.props.product.length;i++)
        {
            console.log(this.props.checked)
            if(this.props.product[i].category!=lastcategory)
            {
                sample.push(<ProductcategoryRow category={this.props.product[i].category} product={this.props.product[i]} value={this.props.value} checked={this.props.checked}/>)
                lastcategory=this.props.product[i].category
            }
        
           if(this.props.checked)
           {
               if(this.props.product[i].stocked )
                {
                sample.push(<ProductRow product={this.props.product[i]} value={this.props.value} checked={this.props.checked} /> )
                }
            }
            else
            {
                sample.push(<ProductRow product={this.props.product[i]} value={this.props.value} checked={this.props.checked} /> )
            }
        }
    return sample
    }

    render(){
        return(
            <div className="product-table">
                <table>
                    <tr><td>Name</td>
                        <td>Price</td></tr>
                </table>
                 <div>
                     {this.displayProductTable()}
                 </div>

            </div>
        )
    }
} 
export default ProductTable