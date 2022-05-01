import React from "react";
import { createSearchParams, useSearchParams } from "react-router-dom";

const qrCode = ({ error }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    /*
    !! set in the main page!!

    -> false = not scanned
    localStorage.setItem("badgeCrab1", "false");
    localStorage.setItem("badgeCrab2", "false");
    ...

    */

    const successMessages = ["just a few more crabs to know!", "You found it!", "Amazing!", "Another one!"];
    const errorMessages = ["Oops!", "Uh oh!", "Oh no!"];

    const displayRandomMessage = (messages) => {
        const index = Math.floor(Math.random() * messages.length);
        return messages[index];
    };

    localStorage.setItem(searchParams, "true");
    return (
        <span>
            {error
                ? getRandomMessage(errorMessages)
                : getRandomMessage(successMessages)}
            {error? "Seems like you've caught this crab before!"
                : "Let's go find the next one!"}
        </span>  
    );
};