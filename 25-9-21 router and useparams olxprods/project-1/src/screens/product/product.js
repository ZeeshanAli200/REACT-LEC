import React from "react";
import { Link } from "react-router-dom";
import camimg from '../../images/cam.jfif'
import carimg from '../../images/car.jfif'
import tvimg from '../../images/tv.jfif'



const allProduct = {
    2643: {

        prod_name: 'CCTV HD CAMARAS',
        prod_src: camimg,
        prod_price: 'Rs 15,800',
        prod_loc:'Karachi'

    },
    2644: {

        prod_name: 'Suzuki wagon R vxl car colour white model 2021 good condition',
        prod_src: carimg,
        prod_price: 'Rs 1,775,000',
        prod_loc:'Karachi'

    },
    2645: {

        prod_name: '42 INCH SMART LED TV NEW SALE',
        prod_src: tvimg,
        prod_price: 'Rs 30000',
        prod_loc:'Karachi'

    }
    

}
function Product() {
    return (
        <div>
            {
                Object.keys(allProduct).map((prodId) => {
                    let { prod_name, prod_src, prod_price,prod_loc } = allProduct[prodId]
                    return (

                        <Link to={`product/product-detail/${prodId}`} style={{textDecoration:'none',color:'#4e797d'}} key={prodId}>
                            <div style={{textDecoration:'none',width: '70%', margin: '10px auto', display: 'flex', flexDirection: 'row', flexWrap: 'nowrap',border:'2px',borderStyle:'double',borderColor:'#ccd5d6',borderRadius:'6px',padding:'10px'}}>
                                <div>
                                    <img style={{width:'400px'}} src={prod_src} alt="" />
                                </div>
                                <div style={{marginLeft:'5%',display:'flex',flexDirection:'column',justifyContent:'space-between'}}>
                                    <div>
                                    <h3>{prod_name}</h3>
                                    <p>{prod_price}</p>
                                    </div>
                                    <div>
                                    <p>{prod_loc}</p>
                                    </div>
                                </div>
                            </div>
                        </Link>

                    )
                })

            }
        </div>
    )
}
export default Product