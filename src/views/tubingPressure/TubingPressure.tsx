import { Header, TubingPressureGraph } from "../../components";
import { Box } from "@mui/material";

const TubingPressure = () => {
  return (
    <Box sx={{ margin: "1rem", overflow: "hidden" }}>
      <Header title="Tubing Pressure" />
      <TubingPressureGraph />
    </Box>
  );
};

export default TubingPressure;
