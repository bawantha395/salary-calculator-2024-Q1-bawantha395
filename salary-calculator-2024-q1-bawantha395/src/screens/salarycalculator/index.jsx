import React from "react";

import { Box, Grid } from "@mui/material";
import CalculateYourSalaryCard from "../../components/calculateYourSalaryCard";
import YourSararyCard from "../../components/yourSararyCard";
export default function SalaryCalculator() {
  return (
    <div>
      <Box
        display="flex"
        sx={{
          backgroundColor: "lightblue",
          // backgroundColor: '#FFFFFF',
          width: "1440px",
          height: "900px",
          position: "relative",
          border: "2px solid grey",
        }}
      >
        <CalculateYourSalaryCard />
        <YourSararyCard/>
            {/* <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
                <CalculateYourSalaryCard />
            </Grid>
            <Grid item xs={12} md={6}>
            <YourSararyCard/>
            </Grid>
            </Grid> */}

            
      </Box>
    </div>
  );
}
