import React, { useState } from "react";
import { Stack } from "@mui/material";
import CalculateYourSalaryCard from "../../components/calculateYourSalaryCard";
import SalaryCard from "../../components/salaryCard";

export default function SalaryCalculator() {
  const [salaryDetails, setSalaryDetails] = useState({
    basicSalary: 0,
    earnings: [],
    deductions: [],
    totalEarnings: 0,
    grossDeduction: 0,
    grossEarnings: 0,
    totalEarningsForEPF: 0,
    employeeEPF: 0,
    employerEPF: 0,
    employerETF: 0,
    apit: 0,
    netSalary: 0,
    ctc: 0,
  });

  const updateSalaryDetails = (details) => {
    setSalaryDetails(details);
  };

  return (
    <Stack
      sx={{
        backgroundColor: "#FFFFFF",
        width: "100%",
        minHeight: "900px",
        padding: { xs: "24px", sm: "48px", md: "128px" },
      }}
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 2, sm: 3, md: 4 }}
    >
      <CalculateYourSalaryCard updateSalaryDetails={updateSalaryDetails} />
      <SalaryCard salaryDetails={salaryDetails} />
    </Stack>
  );
}
