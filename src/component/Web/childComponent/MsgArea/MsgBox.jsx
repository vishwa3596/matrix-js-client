import {Box} from "@mui/material";
import {alpha, styled} from "@mui/system";
import MsgField from "./MsgField.jsx";
import {LeftChatBox , RightChatBox} from "./ChatBox.jsx";
import {makeStyles} from "@mui/styles";
import {Scrollbars} from "react-custom-scrollbars";
import * as React from "react";

const DisplayBox = styled(Box)(({theme}) => ({
    width: "100%",
    display: "flex",
    flexDirection: "column",
    flex: 1,
    height: "93vh",
    justifyContent: "space-between",
    alignItems: "center",
    background: 'linear-gradient(rgba(102,217,232,0), rgba(99, 255,230, 0))'
}))

const useStyles = makeStyles((theme) => ({
    root: {
        "&::-webkit-scrollbar": {
            width: 7,
        },
        "&::-webkit-scrollbar-track": {
            boxShadow: `inset 0 0 6px rgba(0, 0, 0, 0.3)`,
        },
        "&::-webkit-scrollbar-thumb": {
            backgroundColor: "darkgrey",
            outline: `0.8px solid slategrey`,
        },
    }
}));
const renderThumb = ({style, ...props}) => {
    const thumbStyle = {
        borderRadius: 6,
        backgroundColor: "#F2EEEE",
    };
    return <div style={{...style, ...thumbStyle}} {...props} />;
};
const CustomScrollbars = (props) => (
    <Scrollbars
        renderThumbHorizontal={renderThumb}
        renderThumbVertical={renderThumb}
        {...props}
    />
);
const MsgBox = () => {
    const classes = useStyles();
    return (
        <DisplayBox>
            <Box
                className={classes.root}
                sx={{
                    width: "70%",
                    height: "100%",
                    borderColor: "#F2EEEE"
                }}>
                <CustomScrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <RightChatBox />
                    <RightChatBox />
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                    <LeftChatBox/>
                </CustomScrollbars>
            </Box>
            <MsgField/>
        </DisplayBox>
)
}

export default MsgBox;