import Button, { ButtonProp } from "../components/Button";
import CongratsStamp from "../components/CongratsStamp";

const AllStampsEarned = (): JSX.Element => {

    const style = {
        container: "App overflow-scroll bg-background h-screen",
    };

    return (
        <div className={style.container}>
            <CongratsStamp/>
            <Button text="Download the App"/>
            <Button text="Learn More"/>
        </div>     
    );
};

export default AllStampsEarned;
