import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";

const SocialCard = () => {
  const handleClick = () => {
    alert("this is me");
  };

  return (
    <Fragment>
      <Box
        sx={{
          "&:hover": { backgroundColor: "#F2EEEE", borderRadius: "5px" },
          cursor: "pointer",
        }}
        onClick={handleClick}
      >
        <Grid container direction="row">
          <Grid item xs={4}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                paddingLeft: "1rem",
                height: 75,
                alignItems: "center",
              }}
            >
              image
            </Box>
          </Grid>
          <Grid item xs={8}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                height: 75,
                alignItems: "center",
              }}
            >
              chatName
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Fragment>
  );
};

export default SocialCard;
