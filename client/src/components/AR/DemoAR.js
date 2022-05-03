//import { useRef, useEffect } from 'react';

const DemoAR = () => {
    return (
        <a-scene embedded arjs='sourceType: webcam;'>
            <a-marker preset='hiro'>
                <a-box color='orange' position='0 0.05 0' material='opacity: 1;'>
                    <a-animation 
                        attribute='rotation' 
                        to='360 360 0' 
                        dur='3000' 
                        easing='linear' 
                        repeat='indefinite'>
                    </a-animation>
                </a-box>
            </a-marker>
        </a-scene>
    );
};

export default DemoAR;
