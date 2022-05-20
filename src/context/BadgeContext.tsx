import React, { createContext, useState } from "react";

/**
 * Arguably the most beautiful piece of code in this whole project. <3
 */
const BadgeContext = createContext({} as any);

/**
 * Used to check input.
 */
const BadgeNames: readonly string[] = ["One", "Two", "Three", "Four"];

//This is the actual use case for 'any'.
//The children/props of this element can be anything because
//it is at the highest level of the DOM.
const BadgeProvider = (props: any): JSX.Element => {
  const storage: string[] = JSON.parse(
    localStorage.getItem("badges") ||
      JSON.stringify({
        badges: [],
      })
  ).badges;
  const [badges, setBadges] = useState<string[]>(storage);

  /**
   *
   * @param badgeName Strings: "One", "Two", "Three", "Four"
   * @returns Nothing.
   */
  const AddBadge = (badgeName: string): void => {
    CheckBadgeAddable(badgeName);
    setBadges([...badges, badgeName]);
    localStorage.setItem(
      "badges",
      JSON.stringify({
        badges: badges,
      })
    );
  };

  /**
   *
   * @param badgeName Strings: "One", "Two", "Three", "Four"
   * @returns True if badge can be added to badges, false if it cannot.
   */
  const CheckBadgeAddable = (badgeName: string): boolean => {
    return !badges.includes(badgeName) && BadgeNames.includes(badgeName);
  };

  /**
   *
   * @param badgeName Strings: "One", "Two", "Three", "Four"
   * @returns Check if badgeName is in the list of badges.
   */
  const CheckBadge = (badgeName: string): boolean => {
    return badges.includes(badgeName);
  };

  const GetFoundBadges = (): boolean[] => {
    let foundBadges: boolean[] = [];
    BadgeNames.forEach((value: string) => {
      foundBadges.push(badges.includes(value));
    });

    return foundBadges;
  };

  //It's an object for scalability, in case you want to add more!
  const BadgeContextValue = {
    AddBadge,
    CheckBadge,
    CheckBadgeAddable,
    GetFoundBadges,
  };

  return <BadgeContext.Provider value={BadgeContextValue} {...props} />;
};

export default BadgeProvider;
export const useBadge = () => React.useContext(BadgeContext);
