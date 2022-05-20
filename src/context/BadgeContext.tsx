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
  const [onboardingComplete, setOnboardingComplete] = useState<boolean>(
    localStorage.getItem("onboardingComplete") != null
  );

  const SetOnboardingComplete = () => {
    setOnboardingComplete(true);
    localStorage.setItem("onboardingComplete", "true");
  };

  /**
   *
   * @param badgeName Strings representing stages of the Dungeness crab.
   * @returns Nothing.
   */
  const AddBadge = (badgeName: string): void => {
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
   * @param badgeName Strings representing stages of the Dungeness crab.
   * @returns True if badge exists in the list of valid badge names.
   */
  const IsBadgeValid = (badgeName: string): boolean => {
    return BadgeNames.includes(badgeName);
  };

  /**
   *
   * @param badgeName Strings representing stages of the Dungeness crab.
   * @returns True if the user has collected this badge.
   */
  const HasBadgeBeenCollected = (badgeName: string): boolean => {
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
    HasBadgeBeenCollected,
    IsBadgeValid,
    GetFoundBadges,
    SetOnboardingComplete,
    onboardingComplete,
  };

  return <BadgeContext.Provider value={BadgeContextValue} {...props} />;
};

export default BadgeProvider;
export const useBadge = () => React.useContext(BadgeContext);
