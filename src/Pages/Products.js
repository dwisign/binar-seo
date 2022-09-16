import { Helmet } from "react-helmet-async";
import HelmetHead from "../Components/HelmetHead";

const Products = () => {
    return ( 
        <div>
            {/* <Helmet>
                <title>Products Page</title>
                <meta name="description" content="Ini Penjelasan Products Perusahaan" />
            </Helmet> */}
            <HelmetHead title="Products Page" description="Products perusahaan" />
            <h1>Products</h1>
        </div> 
        
    );
}
 
export default Products;