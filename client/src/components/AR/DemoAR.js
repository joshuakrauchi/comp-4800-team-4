//import { useRef, useEffect } from 'react';

const DemoAR = () => {
    return (
        // <a-scene embedded arjs='sourceType: webcam;'>
        <a-scene embedded arjs='sourceType: webcam;'>
            <a-box color='orange' scale='0.75 0.75 0.75' position='0 0.37 0' material='opacity: 1;'>
                {/* <a-animation 
                    attribute='rotation' 
                    to='360 360 0' 
                    dur='3000' 
                    easing='linear' 
                    repeat='indefinite'>
                </a-animation> */}
            </a-box>
            <a-marker-camera preset='hiro'></a-marker-camera>
        </a-scene>
    );
};

export default DemoAR;
