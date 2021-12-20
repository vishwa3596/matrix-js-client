import Box from "@mui/material/Box"
import styled from "@emotion/styled"
import Typography from "@mui/material/Typography"
import {alpha} from "@mui/system";

const DisplayName = styled(Typography)(({ theme }) => ({
	fontFamily: "Montez",
	fontSize: "2.3em",
	fontWeight: 600,
	alingSelf: "center",
}));
const TagLine = styled(Typography)(({theme}) => ({
	fontFamily: "Roboto",
	fontSize: "0.8rem",
	fontWeight: 200,
	alignSelf: "center",
	borderRadius: "10px",
	backgroundColor: alpha(theme.palette.common.greenA, 0.1),
	color: alpha(theme.palette.textColor.main, 1)
}))
const SelectChatBox = styled(Box)({
	width: "100%",
	height: "100%",
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
	flexDirection: "column"

})

const SelectChat = () => {
	return(
		<SelectChatBox sx={{
			borderLeft: 1,
			borderColor: "#F2EEEE"
		}}>
			<DisplayName color="primary"> Ping </DisplayName>

			<TagLine>
				select a chat to start conversation
			</TagLine>
		</SelectChatBox>
	)
}

export default SelectChat;