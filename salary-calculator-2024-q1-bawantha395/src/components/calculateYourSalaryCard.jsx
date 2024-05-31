import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import { styled } from "@mui/system";
import { Stack } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Divider from "@mui/material/Divider";

const FormGrid = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
}));

export default function CalculateYourSalaryCard({ updateSalaryDetails }) {
  const [basicSalary, setBasicSalary] = useState(0);
  const [earnings, setEarnings] = useState([
    { id: 1, title: "", amount: 0, isEPF: false },
  ]);
  const [deductions, setDeductions] = useState([
    { id: 1, title: "", amount: 0 },
  ]);

  const handleBasicSalaryChange = (e) => {
    const value = parseFloat(e.target.value) || 0;
    setBasicSalary(value);
    calculateSalaryDetails(value, earnings, deductions);
  };

  const addEarning = () => {
    setEarnings([
      ...earnings,
      { id: earnings.length + 1, title: "", amount: 0, isEPF: false },
    ]);
  };

  const removeEarning = (id) => {
    const updatedEarnings = earnings.filter((earning) => earning.id !== id);
    setEarnings(updatedEarnings);
    calculateSalaryDetails(basicSalary, updatedEarnings, deductions);
  };

  const handleEarningChange = (id, key, value) => {
    const updatedEarnings = earnings.map((earning) =>
      earning.id === id ? { ...earning, [key]: value } : earning
    );
    setEarnings(updatedEarnings);
    calculateSalaryDetails(basicSalary, updatedEarnings, deductions);
  };

  const addDeduction = () => {
    setDeductions([
      ...deductions,
      { id: deductions.length + 1, title: "", amount: 0 },
    ]);
  };

  const removeDeduction = (id) => {
    const updatedDeductions = deductions.filter(
      (deduction) => deduction.id !== id
    );
    setDeductions(updatedDeductions);
    calculateSalaryDetails(basicSalary, earnings, updatedDeductions);
  };

  const handleDeductionChange = (id, key, value) => {
    const updatedDeductions = deductions.map((deduction) =>
      deduction.id === id ? { ...deduction, [key]: value } : deduction
    );
    setDeductions(updatedDeductions);
    calculateSalaryDetails(basicSalary, earnings, updatedDeductions);
  };

  const resetFields = () => {
    setBasicSalary(0);
    setEarnings([{ id: 1, title: "", amount: 0, isEPF: false }]);
    setDeductions([{ id: 1, title: "", amount: 0 }]);
    updateSalaryDetails({});
  };

  const calculateSalaryDetails = (basicSalary, earnings, deductions) => {
    const totalEarnings =
      basicSalary +
      earnings.reduce((acc, curr) => acc + parseFloat(curr.amount || 0), 0);
    const totalEarningsForEPF =
      basicSalary +
      earnings.reduce(
        (acc, curr) => acc + (curr.isEPF ? parseFloat(curr.amount || 0) : 0),
        0
      );
    const grossDeduction = deductions.reduce(
      (acc, curr) => acc + parseFloat(curr.amount || 0),
      0
    );
    const grossEarnings = totalEarnings - grossDeduction;
    const grossSalaryForEPF = totalEarningsForEPF - grossDeduction;
    const employeeEPF = grossSalaryForEPF * 0.08;
    const employerEPF = grossSalaryForEPF * 0.12;
    const employerETF = grossSalaryForEPF * 0.03;
    const apit = grossEarnings * 0.18 - 25500;
    const netSalary = grossEarnings - employeeEPF - apit;
    const ctc = grossEarnings + employerEPF + employerETF;

    updateSalaryDetails({
      basicSalary,
      totalEarnings,
      grossDeduction,
      grossEarnings,
      totalEarningsForEPF,
      employeeEPF,
      employerEPF,
      employerETF,
      apit,
      netSalary,
      ctc,
    });
  };

  return (
    <Card
      sx={{
        width: "680px",
        height: "616px",
        marginTop: "142px",
        marginBottom: "142px",
        marginLeft: "128px",
        marginRight: "24px",
        padding: "8px",
        borderWidth: "px 0px 0px 0px",
        borderStyle: "1px solid #E0E0E0",

        borderRadius: "8px",
        overflowY: "auto",
        backgroundColor: "#FAFAFA",
      }}
    >
      <CardContent>
        <Stack direction="row" spacing={"8px"} marginBottom={"24px"}>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "20px",
              fontWeight: "700",
              color: "#000000",
              lineHeight: "32px",
              initialLetter: "-0.02px",
              marginBottom: "24px",
            }}
          >
            Calculate Your Salary
          </Typography>
          <Button
            onClick={resetFields}
            style={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              marginLeft: "300px",
            }}
          >
            <img
              style={{
                width: "24px",
                height: "24px",
                marginRight: "4px",
              }}
              src="/assests/icons/reset.png"
              alt="Reset"
            />
            <Typography
              sx={{
                fontFamily: "Inter",
                fontSize: "16px",
                fontWeight: "400",
                color: "#0052EA",
                lineHeight: "24px",
                textTransform: "none",
              }}
            >
              Reset
            </Typography>
          </Button>
        </Stack>
        <FormGrid item xs={12} md={6}>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "-0.1px",
              textAlign: "left",
              color: "#000000",
            }}
            htmlFor="basic-salary"
          >
            Basic Salary
          </FormLabel>
          <OutlinedInput
            sx={{
              width: "356px",
              height: "48px",
              border: "1px",
              borderRadius: "4px",
              marginTop: "8px",
              padding: "px 15px 12px 15px",
              borderColor: "#E0E0E0",
              background: "#FFFFFF",
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: "400",
              lineHeight: "24px",
              textAlign: "left",
              marginBottom: "24px",
            }}
            id="basic-salary"
            name="basic-salary"
            type="number"
            inputProps={{ min: 0 }}
            value={basicSalary}
            onChange={handleBasicSalaryChange}
          />
        </FormGrid>

        <FormGrid item xs={12} md={6}>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "-0.1px",
              textAlign: "left",
              color: "#000000",
              marginBottom: "4px",
            }}
            htmlFor="earnings"
          >
            Earnings
          </FormLabel>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "20px",

              color: "#757575",
              marginBottom: "8px",
            }}
          >
            Allowance, Fixed Allowance, Bonus and etc.
          </Typography>
          {earnings.map((earning) => (
            <Stack
              key={earning.id}
              direction="row"
              spacing={"8px"}
              marginBottom={"8px"}
            >
              <OutlinedInput
                sx={{
                  width: "212px",
                  height: "48px",
                  border: "1px",
                  borderRadius: "4px",
                  marginTop: "8px",
                  padding: "px 15px 12px 15px",
                  borderColor: "#E0E0E0",
                  background: "#FFFFFF",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign: "left",
                }}
                id={`earning-title-${earning.id}`}
                name={`earning-title-${earning.id}`}
                placeholder="Earning Title"
                value={earning.title}
                onChange={(e) =>
                  handleEarningChange(earning.id, "title", e.target.value)
                }
              />
              <OutlinedInput
                sx={{
                  width: "136px",
                  height: "48px",
                  border: "1px",
                  borderRadius: "4px",
                  marginTop: "8px",
                  padding: "px 15px 12px 15px",
                  borderColor: "#E0E0E0",
                  background: "#FFFFFF",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign: "left",
                }}
                id={`earning-amount-${earning.id}`}
                name={`earning-amount-${earning.id}`}
                type="number"
                inputProps={{ min: 0 }}
                placeholder="Amount"
                value={earning.amount}
                onChange={(e) =>
                  handleEarningChange(
                    earning.id,
                    "amount",
                    parseFloat(e.target.value) || 0
                  )
                }
              />
              <img
                style={{
                  width: "32px",
                  height: "32px",
                  gap: "0px",
                  opacity: "0px",
                  marginTop: "8px",
                }}
                src="/assests/icons/delete.png"
                alt="Delete"
                onClick={() => removeEarning(earning.id)}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={earning.isEPF}
                    onChange={(e) =>
                      handleEarningChange(earning.id, "isEPF", e.target.checked)
                    }
                  />
                }
                label="EPF/ETF"
                sx={{
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign: "left",
                  marginTop: "8px",
                }}
              />
            </Stack>
          ))}
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              justifyContent: "flex-start",
              textAlign: "left",
              paddingRight: "0",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              width: "356px",
              marginTop: "16px",
              color: "#0052EA",
            }}
            size="small"
            startIcon={<AddIcon />}
            onClick={addEarning}
          >
            Add New Allowance
          </Button>
        </FormGrid>

        <Divider sx={{ margin: "24px 0" }} />

        <FormGrid item xs={12} md={6}>
          <FormLabel
            sx={{
              fontFamily: "Inter",
              fontSize: "16px",
              fontWeight: 600,
              lineHeight: "24px",
              letterSpacing: "-0.1px",
              textAlign: "left",
              color: "#000000",
              marginBottom: "4px",
            }}
            htmlFor="deductions"
          >
            Deductions
          </FormLabel>
          <Typography
            sx={{
              fontFamily: "Inter",
              fontSize: "12px",
              fontWeight: 400,
              lineHeight: "20px",

              color: "#757575",
              marginBottom: "8px",
            }}
          >
            Salary Advances, Loan Deductions and all
          </Typography>
          {deductions.map((deduction) => (
            <Stack
              key={deduction.id}
              direction="row"
              spacing={"8px"}
              marginBottom={"8px"}
            >
              <OutlinedInput
                sx={{
                  width: "212px",
                  height: "48px",
                  border: "1px",
                  borderRadius: "4px",
                  marginTop: "8px",
                  padding: "px 15px 12px 15px",
                  borderColor: "#E0E0E0",
                  background: "#FFFFFF",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign: "left",
                }}
                id={`deduction-title-${deduction.id}`}
                name={`deduction-title-${deduction.id}`}
                placeholder="Deduction Title"
                value={deduction.title}
                onChange={(e) =>
                  handleDeductionChange(deduction.id, "title", e.target.value)
                }
              />
              <OutlinedInput
                sx={{
                  width: "136px",
                  height: "48px",
                  border: "1px",
                  borderRadius: "4px",
                  marginTop: "8px",
                  padding: "px 15px 12px 15px",
                  borderColor: "#E0E0E0",
                  background: "#FFFFFF",
                  fontFamily: "Inter",
                  fontSize: "16px",
                  fontWeight: "400",
                  lineHeight: "24px",
                  textAlign: "left",
                }}
                id={`deduction-amount-${deduction.id}`}
                name={`deduction-amount-${deduction.id}`}
                type="number"
                inputProps={{ min: 0 }}
                placeholder="Amount"
                value={deduction.amount}
                onChange={(e) =>
                  handleDeductionChange(
                    deduction.id,
                    "amount",
                    parseFloat(e.target.value) || 0
                  )
                }
              />
              <img
                style={{
                  width: "32px",
                  height: "32px",
                  gap: "0px",
                  opacity: "0px",
                  marginTop: "8px",
                }}
                src="/assests/icons/delete.png"
                alt="Delete"
                onClick={() => removeDeduction(deduction.id)}
              />
            </Stack>
          ))}
          <Button
            variant="text"
            sx={{
              textTransform: "none",
              justifyContent: "flex-start",
              textAlign: "left",
              paddingRight: "0",
              fontFamily: "Inter",
              fontSize: "14px",
              fontWeight: 500,
              lineHeight: "20px",
              width: "356px",
              marginTop: "16px",
              color: "#0052EA",
            }}
            size="small"
            startIcon={<AddIcon />}
            onClick={addDeduction}
          >
            Add New Deduction
          </Button>
        </FormGrid>
      </CardContent>
    </Card>
  );
}
