import React, { createContext, useState } from "react";

const BadgeContext = createContext({});

//I tried exporting this on one line but nothing worked.
export enum BadgeNames {
  One,
  Two,
  Three,
  Four,
}

//This is the actual use case for 'any'.
//The children/props of this element can be anything because
//it is at the highest level of the DOM.
const BadgeProvider = (props: any): JSX.Element => {
  const [Badges, setBadges] = useState<BadgeNames[]>([]);

  const AddBadge = (badgeName: BadgeNames): void => {
    if (Badges.includes(badgeName)) return;
    setBadges([...Badges, badgeName]);
  };

  //Its an object for scalability, in case you want to add more!
  const BadgeContextValue = {
    AddBadge,
  };

  return <BadgeContext.Provider value={BadgeContextValue} {...props} />;
};

export const useBadge = () => React.useContext(BadgeContext);
export default BadgeProvider;
