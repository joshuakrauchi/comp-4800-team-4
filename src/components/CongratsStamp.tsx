import Naturalist from "../images/naturalist.png";

const CongratsStamp = (): JSX.Element => {
  const style = {
    container: "bg-popout m-10 rounded-lg",
    head: "text-2xl font-bold text-white text-center p-7 pt-16 pb-2 align-center",
    par: "p-8 pt-5 pb-5 font-semibold leading-relaxed text-white text-center align-center",
    img: "w-full pt-7 pb-14",
  };

  return (
    <div className={style.container} id="congrats-div">
      <h3 className={style.head}>
        {" "}
        Congratulations, you've collected all of the badges!{" "}
      </h3>
      <p className={style.par}>
        {" "}
        If you see any real Dungeness crabs in your journey, please snap a photo
        and submit it to iNaturalist to help us track and monitor these
        creatures.{" "}
      </p>
      <img
        className={style.img}
        alt="naturalist logo"
        id="logo-img"
        src={Naturalist}
      />
    </div>
  );
};

export default CongratsStamp;
