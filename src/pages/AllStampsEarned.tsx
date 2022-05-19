import Button, { ButtonProp } from "../components/Button";
import CongratsStamp from "../components/CongratsStamp";

const AllStampsEarned = (): JSX.Element => {

    const style = {
        container: "App overflow-scroll bg-background h-screen",
    };

    return (
        <div className={style.container}>
            <CongratsStamp/>
            <Button text="Download the App" onClick={()=> {window.open("http://play.google.com/store/apps/details?id=org.inaturalist.android")}}/>
            <Button text="Learn More" onClick={()=> {window.open("https://sentinels.hakai.org/about")}}/>
        </div>     
    );
};

export default AllStampsEarned;
