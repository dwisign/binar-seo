import { Helmet } from "react-helmet-async";
import HelmetHead from "../Components/HelmetHead";

const Home = () => {
    return (
        <div>
            {/* <Helmet>
                <title>Home Page</title>
                <meta name="description" content="Home page perusahaan" />
            </Helmet>    */}
            <HelmetHead title="Home Page" description="Home page perusahaan" />
            <h1>Home</h1>
        </div>
    );
}
 
export default Home;