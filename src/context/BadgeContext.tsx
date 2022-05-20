import React, { createContext, useState } from "react";

/**
 * Arguably the most beautiful piece of code in this whole project. <3
 */
const BadgeContext = createContext({} as any);

/**
 * Used to check input.
 */
const BadgeNames: readonly string[] = ["Zoea", "Megalopa", "Instar", "Adult"];

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
  const [isOnboardingComplete, setIsOnboardingComplete] = useState<boolean>(
    localStorage.getItem("onboardingComplete") != null
  );

  const setOnboardingComplete = () => {
    setIsOnboardingComplete(true);
    localStorage.setItem("onboardingComplete", "true");
  };

  /**
   *
   * @param badgeName Strings representing stages of the Dungeness crab.
   * @returns Nothing.
   */
  const addBadge = (badgeName: string): void => {
    setBadges([...badges, badgeName])

    console.log(`Attempted to put ${badgeName} in list: ${badges}`);

    localStorage.setItem(
      "badges",
      JSON.stringify({
        badges: badges,
      })
    );
  };

  /**
   *
   * @param badgeName Strings representing stages of the Dungeness crab.
   * @returns True if badge exists in the list of valid badge names.
   */
  const isBadgeValid = (badgeName: string): boolean => {
    return BadgeNames.includes(badgeName);
  };

  /**
   *
   * @param badgeName Strings representing stages of the Dungeness crab.
   * @returns True if the user has collected this badge.
   */
  const hasBadgeBeenCollected = (badgeName: string): boolean => {
    return badges.includes(badgeName);
  };

  const getFoundBadges = (): boolean[] => {
    let foundBadges: boolean[] = [];
    BadgeNames.forEach((value: string) => {
      foundBadges.push(badges.includes(value));
    });

    return foundBadges;
  };

  const hasFoundAllBadges = (): boolean => {
    return badges.length === BadgeNames.length;
  }

  //It's an object for scalability, in case you want to add more!
  const BadgeContextValue = {
    addBadge,
    hasBadgeBeenCollected,
    isBadgeValid,
    getFoundBadges,
    setOnboardingComplete,
    isOnboardingComplete,
    hasFoundAllBadges
  };

  return <BadgeContext.Provider value={BadgeContextValue} {...props} />;
};

export default BadgeProvider;
export const useBadge = () => React.useContext(BadgeContext);
