import Naturalist from "../images/naturalist.png";

const CongratsStamp = (): JSX.Element => {

    return (
        <div id="congrats-div">
            <h3> Congratulations, you've collected all of the stamps! </h3>
            <p> If you see any real Dungeness crabs in your journey, please snap a photo and submit it to iNaturalist to help us track and monitor these creatures. </p>
            <img alt="naturalist logo" id="logo-img" src={Naturalist}/>
        </div>
    );
};

export default CongratsStamp;