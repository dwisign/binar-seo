import { Helmet } from "react-helmet-async";
import HelmetHead from "../Components/HelmetHead";

const About = () => {
    return ( 
        <div>
            {/* <Helmet>
                <title>About Page</title>
                <meta name="description" content="Ini Penjelasan About Us Perusahaan" />
            </Helmet> */}
            <HelmetHead title="About Page" description="About page perusahaan" /> 
            <h1>About</h1>
        </div>
    );
}
 
export default About;