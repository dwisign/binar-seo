import { Helmet } from "react-helmet-async";

const HelmetHead = (props) => {
    return (  
        <Helmet>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </Helmet>
    );
}
 
export default HelmetHead;