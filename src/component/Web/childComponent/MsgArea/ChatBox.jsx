import {Box, Typography} from "@mui/material";
import * as React from "react";
import DoneAllOutlinedIcon from '@mui/icons-material/DoneAllOutlined';
import Grid from "@mui/material/Grid";
import ReplyOutlinedIcon from '@mui/icons-material/ReplyOutlined';

import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

export const LeftChatBox = () => {
    return (
        <Box sx={{
                height: "auto",
                width: "100%",
                display: "flex",
                direction: "column",
                justifyContent: "flex-start",
                padding: "5px"
            }}>
            <Box sx={{
                display: "inline-block",
                border: 1,
                borderRadius: "10px",
                borderColor: "#F2EEEE",
                maxWidth: "50%",
                bgcolor: 'rgba(99,196,255, 0.2)',
                minWidth: "20%"
            }}>
                <Grid container direction="column">
                    <Grid item>
                        <Box sx={{
                            paddingLeft: "15px",
                            paddingTop: "10px",
                            paddingBottom: "5px"
                        }}>
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "blueB.main"
                            }}>
                                Sender Name
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            paddingLeft: "15px",
                            paddingRight: "15px"
                        }}>
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: "500"
                            }}>
                                is a horizontal rectangular tricolour of India saffron,
                                white and India green; with the Ashoka Chakra, a 24-spoke wheel,
                                in navy blue at its centre. It was adopted in its present form during a meeting of the
                                Constituent Assembly held on 22 July 1947, and it became the official flag of the
                                Dominion of India on 15 August 1947. The flag was subsequently retained as that of the
                                Republic of India. In India, the term "tricolour" almost always refers to the Indian
                                national flag.
                                The flag is based on the Swaraj flag, a flag of the Indian National Congress designed
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            paddingRight: "3px",
                            columnGap: "5px"
                        }}>
                            <ReplyOutlinedIcon color="textColor" fontSize="14px"/>
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: "100",
                                color: 'textColor.main'
                            }}>
                                00:16
                            </Typography>
                            <DoneAllOutlinedIcon color="primary" fontSize="14px"/>
                            <MoreHorizOutlinedIcon color="textColor" fontSize="14px"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}

export const RightChatBox = () => {
    return (
        <Box
            sx={{
                height: "auto",
                width: "100%",
                display: "flex",
                direction: "column",
                justifyContent: "flex-end",
                padding: "5px"

            }}>
            <Box sx={{
                display: "inline-block",
                border: 1,
                borderRadius: "10px",
                borderColor: "#F2EEEE",
                maxWidth: "50%",
                bgcolor: 'rgba(95,149,245, 0.2)',
                minWidth: "20%"
            }}>
                <Grid container direction="column">
                    <Grid item>
                        <Box sx={{
                            paddingLeft: "15px",
                            paddingTop: "10px",
                            paddingBottom: "5px"
                        }}>
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: 600,
                                color: "primary.main"
                            }}>
                                You
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item>
                        <Box sx={{
                            paddingLeft: "15px",
                            paddingRight: "15px"
                        }}>
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: "500"
                            }}>
                                is a horizontal rectangular tricolour of India saffron,
                                white and India green; with the Ashoka Chakra, a 24-spoke wheel,
                                in navy blue at its centre. It was adopted in its present form during a meeting of the
                                Constituent Assembly held on 22 July 1947, and it became the official flag of the
                                Dominion of India on 15 August 1947. The flag was subsequently retained as that of the
                                Republic of India. In India, the term "tricolour" almost always refers to the Indian
                                national flag.
                            </Typography>
                        </Box>

                    </Grid>
                    <Grid item>
                        <Box sx={{
                            display: "flex",
                            justifyContent: "flex-end",
                            alignItems: "center",
                            paddingRight: "3px",
                            columnGap: "5px"
                        }}>
                            <ReplyOutlinedIcon color="textColor" fontSize="14px"/>
                            <Typography sx={{
                                fontSize: "14px",
                                fontWeight: "100",
                                color: 'textColor.main'
                            }}>
                                00:16
                            </Typography>
                            <DoneAllOutlinedIcon color="primary" fontSize="14px"/>
                            <MoreHorizOutlinedIcon color="textColor" fontSize="14px"/>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>
    )
}