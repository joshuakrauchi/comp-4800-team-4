import React from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

const qrCode = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const successMessages = ["just a few more crabs to know!", "You found it!", "Amazing!", "Another one!"];
    const errorMessages = ["Oops!", "Uh oh!", "Oh no!"];

    const displayRandomMessage = (messages) => {
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    };

    const getRandomMessage = (messages) => {
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    };

    if (localStorage.getItem(searchParams) !== null) {
        return (<p>
            <span>
                {getRandomMessage(errorMessages)}
            </span> Seems like you've caught this crab before!
        </p>);
    } else {
        return(
            <p>
                <span>
                    {getRandomMessage(successMessages)} 
                </span> Let's go find the next one!
            </p>
        );
    };
};