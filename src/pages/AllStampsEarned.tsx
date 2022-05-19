import Button, { ButtonProp } from "../components/Button";
import CongratsStamp from "../components/CongratsStamp";

const AllStampsEarned = (): JSX.Element => {
    return (
        <div>
            <CongratsStamp/>
            <Button text="Download the App"/>
            <Button text="Learn More"/>
        </div>
        
    );
};

export default AllStampsEarned;
