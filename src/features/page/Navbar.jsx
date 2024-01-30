import {Button, Grid, Icon, Typography} from "@mui/material";
import {FaRocket} from "react-icons/fa";

const Navbar = () => {
    return (
        <Grid
            container
            wrap='nowrap'
            alignItems='center'
        >
            <Grid item>
                <Button
                    disableRipple
                    color='secondary'
                    size='small'
                    style={{ backgroundColor: 'transparent' }}
                >
                    <Grid
                        container
                        wrap='nowrap'
                        spacing={1}
                        alignItems='center'
                        justifyContent='center'
                    >
                        <Grid item>
                            <Icon>
                                <FaRocket/>
                            </Icon>
                        </Grid>
                        <Grid item>
                            <Typography
                                variant='body1'
                                sx={{fontWeight: 'bold'}}
                            >
                                CSUN + Real Time Computer Vision
                            </Typography>
                        </Grid>
                    </Grid>
                </Button>
            </Grid>
        </Grid>
    )
}

export default Navbar
