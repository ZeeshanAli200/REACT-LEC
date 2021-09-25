import React from "react";
import { Link, useParams } from "react-router-dom";
import camimg from '../../images/cam.jfif'
import carimg from '../../images/car.jfif'
import tvimg from '../../images/tv.jfif'



const allProduct = {
    2643: {

        prod_name: 'CCTV HD CAMARAS',
        prod_src: camimg,
        prod_price: 'Rs 15,800',
        prod_loc: 'Karachi',
        descrip: `Branded camras 4 channel complate pakig 

        1(4 channel xvr All in one turbo hd (1080)
        
        2( 4cctv camras 2 mp Night vision 1080 p
        
        3(hard. disk 500 Gb for backup
        
        4(Cctv cable 270 ft (90 metr)
        
        5( power suplly All camras
        
        6( 4BNC dc conecter 
        (View phone number)
        (View phone number)
        7(installion and online view 
        8( No hidden charges  one year warrinty and service free
        [(View phone number)] call
        [(View phone number) whatasapp`

    },
    2644: {

        prod_name: 'Suzuki wagon R vxl car colour white model 2021 good condition',
        prod_src: carimg,
        prod_price: 'Rs 1,775,000',
        prod_loc: 'Karachi',
        descrip: `🔴Suzuki wagon R vxl colour white model 2021 good condition 
        🔴Open invoice car zero meter 
        🔴Engine in lush condition
        🔴Mechanically no issue 
         🔴100% guarantee
        🔴Interior totally Genuine
        🔴Tyre new with alloy rim 
        Just Buy and drive 
        Serious buyer requried 
        🔴Contact  Number 
        0*3*0*4*9*8*8*0*1*0*0`

    },
    2645: {

        prod_name: '42 INCH SMART LED TV NEW SALE',
        prod_src: tvimg,
        prod_price: 'Rs 30000',
        prod_loc: 'Karachi',
        descrip: `A1 Picture Quality 

        32 plain LED TV 20000 TO 25000
        
        42 PLAIN LED TV 30000 TO 35000
        
        32" SMART WIFI LED (22000,  28000)
        
        42" SMART WIFI LED (30000, 38000)
        
        46" SMART WIFI LED (35000 TO 42000)
        
        55" SMART WIFI LED (50000 TO 58000)
        
        65" SMART WIFI LED (65000 TO 78000)
        
        75" SMART WIFI LED (95000 to (View phone number)
        
        SKYPE
        
        NETFLIX
        
        GOOGLE PLAY STORE
        
        WIRELESS DISPLAY
        
        (1 Year WARRANTY Software & Parts Only)
        
        Home delivery available + Charges
        
        Installation (Wall Fitting Experts) Available + Charges
        
        ADDRESS SHOP LOCATION
        
        EASY TO SEARCH ON GOOGLE MAP 
        BY THE NAME OF (GULSHAN ELECTRONICS)
        
        OPPOSITE ALLADIN PARK
        
        GULSHAN-E-IQBAL BLOCK-10 A
        
        NEAR AJWA BAKERS
        
        CONTACT. O334 -- 3O92 -- 873`
    }
}
function ProductDetail() {

    let { prodCode } = useParams()
    let { prod_name, prod_price, prod_src, prod_loc, descrip } = allProduct[prodCode]
    descrip=descrip.split('\n')
    
    console.log(descrip)
    return (

        <div>
            <div style={{ margin: '10px auto', textDecoration: 'none', width: '70%', display: 'flex', flexDirection: 'column', border: '2px', borderStyle: 'double', borderColor: '#ccd5d6', borderRadius: '6px', padding: '10px' }}>
                <div>
                    <img style={{ maxWidth: '50%', minWidth: '70%' }} src={prod_src} alt="" />
                </div>
              
            </div>
            <div style={{ margin: '0 auto', textDecoration: 'none', width: '70%', display: 'flex', flexDirection: 'column', border: '2px', borderStyle: 'double', borderColor: '#ccd5d6', borderRadius: '6px', padding: '10px' }}>
                <h3>Details</h3>
                <div style={{display:'flex',flexDirection:'row',justifyContent:'space-around',flexWrap:'wrap'}}>
                    <p style={{color:'#002f34a3'}}>Product:</p>
                    <p>{prod_name}</p>
                    <p style={{color:'#002f34a3'}}>Price:</p>
                    <p>{prod_price}</p>
                    <p style={{color:'#002f34a3'}}>Location:</p>
                    <p>{prod_loc}</p>

                </div>
                <h3>Description</h3>
                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',flexWrap:'wrap'}}>
                    {descrip.map((data)=>{
                        return <p style={{color:'#002f34a3'}}>{data}</p>
                    })}
               

                </div>

            </div>
        </div>


    )


}
export default ProductDetail