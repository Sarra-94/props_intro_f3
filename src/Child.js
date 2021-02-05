import React from "react";

const Child = ({ title, number, profile, handleName }) => {
  title = "this is not title";
  //   const addAge = () => {
  //     const age = 27;
  //     handleName(age + 50);
  //   };
  return (
    <div>
      {/* {addAge()} */}
      <h2>{title}</h2>
      <h1>{number}</h1>
      <img src={profile} alt="avatar" />
      <button onClick={() => handleName("insaf")}>Details</button>
    </div>
  );
};
Child.defaultProps = {
  profile:
    "https://colegioclassea.com.br/wp-content/themes/PageLand/assets/img/avatar/avatar.jpg",
  //   title: "inconnu",
  number: 0,
};

export default Child;
