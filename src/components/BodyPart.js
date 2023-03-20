import React from "react";
import { Stack, Typography } from "@mui/material";

import all from "../assets/icons/gym.png"

import {
  back,
  cardio,
  chest,
  lowerArms,
  lowerLegs,
  neck,
  shoulders,
  upperArms,
  upperLegs,
  waist,
} from "../assets/icons";

let img = null;
const imgItemMatcher = (item) => {
  
  switch (item) {
    case "back":
      img = back;
      break;

    case "cardio":
      img = cardio;
      break;

    case "chest":
      img = chest;
      break;

    case "lower arms":
      img = lowerArms;
      break;

    case "lower legs":
      img = lowerLegs;
      break;

    case "neck":
      img = neck;
      break;

    case "shoulders":
      img = shoulders;
      break;

    case "upper arms":
      img = upperArms;
      break;

    case "upper legs":
      img = upperLegs;
      break;

    case "waist":
      img = waist;
      break;

    default:
      img = all;
      break;
  }
}

const BodyPart = ({ item, bodyPart, setBodyPart }) => {
  imgItemMatcher(item);

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        borderTop: bodyPart === item ? "4px solid #ff2625" : "",
        backgroundColor: "#fff",
        borderBottomLeftRadius: "20px",
        width: "270px",
        height: "280px",
        cursor: "pointer",
        gap: "47px",
      }}
      onClick={() => {
        setBodyPart(item);
        window.scrollTo({ top: 1800, left: 100, behavior: "smooth" });
      }}
    >
      <img src={img} alt="dumbbell" style={{ width: "40px", height: "40px" }} />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        fontFamily="Alegreya"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
