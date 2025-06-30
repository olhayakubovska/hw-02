import React from "react";
import { Slider, SliderProps } from "@mui/material";

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        // стили для слайдера // пишет студент
        width: 147,
        height: 4,
        color: "#00CC22",
        " & .MuiSlider-thumb": {
          width: 18, 
          height: 18,
          backgroundColor: "white",
          border: "1px solid #00CC22", 
          boxShadow: "0 0 4px 0 rgba(0,0,0,0.3)",
          "&::before": {
            content: '""',
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 6,
            height: 6,
            backgroundColor: "#00CC22", 
            borderRadius: "50%",
          },
        },
      }}
      {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  );
};

export default SuperRange;
