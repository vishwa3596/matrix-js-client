import {Box} from "@mui/material";
import {alpha, styled} from "@mui/system";
import MsgField from "./MsgField.jsx";

const DisplayBox = styled(Box)(({theme}) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "93vh",
    justifyContent: "space-between",
    alignItems: "center",
    background: 'linear-gradient(rgba(102,217,232,0.2), rgba(99, 255,230, 0.2))'
}))
const MsgBox = () => {
    return (
        <DisplayBox>
            <Box sx={{
                width: "70%",
                height: "100%",
                borderColor: "#F2EEEE"
            }}>

            </Box>
        <MsgField />
        </DisplayBox>
    )
}

export default MsgBox;