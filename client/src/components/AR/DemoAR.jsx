//import { useRef, useEffect } from 'react';

const DemoAR = () => {
    return (
        <a-scene embedded arjs='debugUIEnabled: false; trackingMethod: best; sourceType: webcam;'>
            <a-marker preset='hiro'>
                <a-box 
                    color='red' 
                    position='0.5 0 0' 
                    scale='1 0.2 0.2' 
                    material='opacity: 1;'>
                </a-box>
                <a-box 
                    color='green' 
                    position='0 0.5 0' 
                    scale='0.2 1 0.2' 
                    material='opacity: 1;'>
                </a-box>
                <a-box 
                    color='blue' 
                    position='0 0 0.5' 
                    scale='0.2 0.2 1' 
                    material='opacity: 1;'>
                </a-box>
            </a-marker>
            <a-entity camera></a-entity>
        </a-scene>
    );
};

export default DemoAR;
