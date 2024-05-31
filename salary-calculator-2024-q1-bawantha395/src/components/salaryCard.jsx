import React from "react";
import { Typography, Grid, Paper, Divider } from "@mui/material";

const SalaryCard = ({ salaryDetails }) => {
  const {
    basicSalary = 0,
    grossEarnings = 0,
    grossDeduction = 0,
    employeeEPF = 0,
    apit = 0,
    netSalary = 0,
    employerEPF = 0,
    employerETF = 0,
    ctc = 0,
  } = salaryDetails;

  const formatNumber = (value) => {
    if (typeof value === "number") {
      return value.toFixed(2);
    } else {
      return value;
    }
  };

  return (
    <Paper
      sx={{
        width: "480px",
        height: "578px",
        marginTop: "142px",
        marginBottom: "142px",
        padding: "24px",
        border: "1px solid #E0E0E0",
        borderRadius: "8px",
        backgroundColor: "#FFFFFF",
      }}
    >
      <Typography
        sx={{
          fontFamily: "Inter",
          fontSize: "20px",
          fontWeight: "700",
          color: "#000000",
          lineHeight: "32px",
          marginBottom: "24px",
        }}
      >
        Your Salary
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              textAlign: "left",
              color: "#757575",
            }}
          >
            Items
          </Typography>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              textAlign: "right",
              color: "#757575",
              marginTop: "-20px",
            }}
          >
            Amount
          </Typography>
        </Grid>
        {[
          { label: "Basic Salary", value: basicSalary },
          { label: "Gross Earning", value: grossEarnings },
          { label: "Gross Deduction", value: `- ${grossDeduction}` },
          { label: "Employee EPF (8%)", value: `- ${employeeEPF}` },
          { label: "APIT", value: `- ${apit}` },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <Typography
                sx={{
                  opacity: "0px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "left",
                  color: "#000000",
                }}
              >
                {item.label}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  opacity: "0px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "right",
                  color: "#000000",
                }}
                align="right"
              >
                {formatNumber(item.value)}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
        <Grid item xs={12}>
          <Divider sx={{ marginTop: "4px", marginBottom: "px" }} />
        </Grid>

        {[
          {
            label: "Net Salary (Take Home)",
            value: <strong>{netSalary}</strong>,
          },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <Typography
                sx={{
                  opacity: "0px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 600,
                  lineHeight: "24px",
                  textAlign: "left",
                  color: "#000000",
                }}
              >
                {item.label}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  opacity: "0px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "right",
                  color: "#000000",
                }}
                align="right"
              >
                {formatNumber(item.value)}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}

        <Grid item xs={12}>
          <Divider sx={{ marginTop: "-5px", marginBottom: "24px" }} />
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 600,
              lineHeight: "20px",
              letterSpacing: "0.2px",
              textAlign: "left",
              color: "#757575",
            }}
          >
            Contribution from the Employer
          </Typography>
        </Grid>
        {[
          { label: "Employer EPF (12%)", value: employerEPF },
          { label: "Employer ETF (3%)", value: employerETF },
          { label: "CTC (Cost to Company)", value: ctc },
        ].map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={6}>
              <Typography
                sx={{
                  opacity: "0px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "left",
                  color: "#000000",
                }}
              >
                {item.label}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography
                sx={{
                  opacity: "0px",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: 400,
                  lineHeight: "24px",
                  textAlign: "right",
                  color: "#000000",
                }}
                align="right"
              >
                {formatNumber(item.value)}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  );
};

export default SalaryCard;
