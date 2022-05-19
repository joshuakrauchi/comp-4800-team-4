import styles from "./styles";
import PinData from "../BadgeMap/Utilities/PinData";
import pinData from "../../data/pinData";
import badgeOutline from "../../images/badgeOutline.png";

interface IBadgeWidgetProps {
  foundBadges: boolean[];
}

const BadgeWidget = (props: IBadgeWidgetProps): JSX.Element => {
  return (
    <div className={styles.badgeContainer}>
      {pinData.map((pin: PinData, index: number) => (
        <div>
          <img
            className={styles.badgeImage}
            src={props.foundBadges[index] ? pin.badgeImage.url : badgeOutline}
          />
        </div>
      ))}
    </div>
  );
};

export default BadgeWidget;
