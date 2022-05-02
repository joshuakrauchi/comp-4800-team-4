//import { useRef, useEffect } from 'react';

const DemoAR = () => {
    return (
        <a-scene embedded arjs='sourceType: webcam;'>
            <a-box position='0.0 0.5 0.0' material='opacity: 0.5;'></a-box>
            <a-marker-camera preset='hiro'></a-marker-camera>
        </a-scene>
    );
};

export default DemoAR;
