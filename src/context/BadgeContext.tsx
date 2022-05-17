import React, { createContext, useState } from "react";

const BadgeContext = createContext({});

const BadgeNames: string[] = Object.freeze({
  badges: ["One", "Two", "Three", "Four"]
}).badges;

//This is the actual use case for 'any'.
//The children/props of this element can be anything because
//it is at the highest level of the DOM.
const BadgeProvider = (props: any): JSX.Element => {
  const storage: string[] = JSON.parse(
    localStorage.getItem("badges")
    ||
    JSON.stringify({badges: []})
  ).badges;
  const [badges, setBadges] = useState<string[]>(storage);

  const AddBadge = (badgeName: string): void => {
    if (CheckBadge(badgeName)) return;
    setBadges([...badges, badgeName]);
    localStorage.setItem("badges", JSON.stringify({ badges: badges }));
  };

  const CheckBadge = (badgeName: string): boolean => {
    return badges.includes(badgeName) && BadgeNames.includes(badgeName);
  }

  //It's an object for scalability, in case you want to add more!
  const BadgeContextValue = {
    AddBadge,
    CheckBadge
  };

  return <BadgeContext.Provider value={BadgeContextValue} {...props} />;
};

export const useBadge = () => React.useContext(BadgeContext);
export default BadgeProvider;
