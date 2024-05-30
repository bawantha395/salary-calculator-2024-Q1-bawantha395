import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function CalculateYourSalaryCard() {
  return (
    <Card
      sx={{
        width: "680px",
        height: "616px",
        marginTop: "142px",
        marginLeft: "128px",
        marginRight: "24px",
        padding: "8px",
        border: "1px",
        borderRadius: "8px",
        background: "FAFAFA",
        borderColor: "#E0E0E0",
      }}
    >
      <CardContent>
        <Typography
          sx={{
            fontFamily: "Inter",
            fontSize: "20px",
            fontWeight: "700",
            color: "#000000",
            lineHeight: "32px",
            initialLetter: "-0.02px",
          }}
        >
          Calculate Your Salary
        </Typography>
        <FormGrid item xs={12} md={6}>
          <FormLabel htmlFor="basic-salary" required>
            Basic Salary
          </FormLabel>
          <OutlinedInput
            sx={{
              width: "356px",
              height: "48px",
              border: "1px",
              borderRadius: "4px",
              marginTop: "8px",
              padding: "12px 15px 12px 15px",
              borderColor: "#E0E0E0",
              
              fontFamily: "Inter",
              
              
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign: "left",

            }}
            id="basic-salary"
            name="basic-salary"
            type="name"
            placeholder="150000"
            autoComplete="basic salary"
            required
          />
        </FormGrid>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
