import React from "react";
import { useState } from "react";
import "./App.css";
import { Box, Typography, TextField, Button } from "@mui/material";
import Sixtyfour from "./assets/fonts/Sixtyfour.ttf";
import PerfectDOS from "./assets/fonts/PerfectDOS.ttf";

function App() {
  const [profit, setProfit] = useState(0);
  const [quota, setQuota] = useState(0);
  const [result, setResult] = useState(null);

  const perfectDosFont = {
    fontFamily: "PerfectDOS",
    src: `url(${PerfectDOS}) format("truetype")`,
  };
  const sixtyfourFont = {
    fontFamily: "Sixtyfour",
    src: `url(${Sixtyfour}) format("truetype")`,
  };

  const calculateProfit = () => {
    // Parse the string inputs to integers
    const r = parseInt(profit, 10);
    const q = parseInt(quota, 10);

    function calculateX(y, q) {
      let x = (y - q) / 5 - 15;
      // Ensure x is not smaller than 0
      return Math.max(x, 0);
    }

    // Start with an initial guess for y
    let y = 0;
    let epsilon = 0.0000001; // Tolerance for the loop

    // Use a loop to refine the value of y
    while (true) {
      let currentR = calculateX(y, q) + y;
      let difference = Math.abs(currentR - r);

      // Check if the current value of y satisfies the equation within the tolerance
      if (difference < epsilon) {
        break;
      }

      // Update y for the next iteration
      y = y - (currentR - r);
    }

    setResult(Math.ceil(y));
  };

  return (
    <Box sx={{ display: "flex", gap: 5, flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Box component="img" src="lclogo.png" />
        <Typography
          level="h1"
          sx={{
            color: "red",
            fontFamily: "Sixtyfour",
            "@font-face": [sixtyfourFont],
            fontSize: 32,
          }}
        >
          PROFIT CALCULATOR
        </Typography>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1" }}>
          <Typography
            sx={{
              fontFamily: "PerfectDOS",
              fontSize: 24,
              "@font-face": [perfectDosFont],
            }}
          >
            Expected Profit (day 0)
          </Typography>
          <TextField
            type="number"
            onChange={(event) => setProfit(event.target.value)}
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "red",
                fontSize: 32,
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "red", // Set your desired border color
                "&:hover": {
                  borderColor: "red",
                },
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "red",
                },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "red", // Set the border color when focused
                },
              fontFamily: "PerfectDOS",
            }}
            inputProps={{
              style: {
                color: "red",
                fontFamily: "PerfectDOS",
                textAlign: "center",
              }, // Additional styling for input
            }}
          />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "1" }}>
          <Typography sx={{ fontFamily: "PerfectDOS", fontSize: 24 }}>
            Quota
          </Typography>
          <TextField
            type="number"
            onChange={(event) => setQuota(event.target.value)}
            sx={{
              "& .MuiOutlinedInput-input": {
                color: "red",
                fontSize: 32,
              },
              "& .MuiInputLabel-root": {
                color: "red", // Set label color (optional)
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "red", // Set your desired border color
                "&:hover": {
                  borderColor: "red",
                },
              },
              "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "red",
                },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "red", // Set the border color on hover
              },
              "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                  borderColor: "red", // Set the border color when focused
                },
              fontFamily: "PerfectDOS",
            }}
            inputProps={{
              style: {
                color: "red",
                fontFamily: "PerfectDOS",
                textAlign: "center",
              }, // Additional styling for input
            }}
          />
        </Box>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          variant="contained"
          fullWidth
          onClick={calculateProfit}
          sx={{
            background: "black",
            color: "red",
            border: "2px solid red",
            fontFamily: "PerfectDOS",
            fontSize: 32,
            "&:hover": {
              background: "red",
              color: "black",
              border: "2px solid black",
            },
          }}
        >
          Calculate
        </Button>
        <Typography sx={{ fontFamily: "PerfectDOS", fontSize: 32 }}>
          Loot to sell:
        </Typography>
        <Typography sx={{ fontFamily: "PerfectDOS", fontSize: 72 }}>
          {result !== null ? result : ""}
        </Typography>
      </Box>
    </Box>
  );
}

export default App;
