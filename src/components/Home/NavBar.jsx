import React, { useState } from 'react'
import {Box, Tab, Tabs, Grid} from '@mui/material';
import {makeStyles} from '@mui/styles';


const useStyles = makeStyles( theme => ({
    container: {
        padding: '20px',
        height: '130px',
        backgroundColor: 'green'
    },
  logo: {
    height: '100px',
    width: '110px',
  },
  tab: {
    color: 'white',
    '&:hover': {
        color: 'red'
    }
  }
  
}
    )
)


  const NavBar = () => {
  const classes = useStyles();
  const [value, setValue] = useState("0");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    return (
      <Grid container className={classes.container}>
        <Grid item lg={3}>
          <img
            src="data:image/png;base64,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"
            alt="GeeksFlix"
            className={classes.logo}
          />
        </Grid>
        <Grid item lg={6}>
          <Box sx={{ width: "100%", typography: "body1" }}>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs
                value={value}
                onChange={handleChange}
                textColor="secondary"
                indicatorColor="secondary"
                aria-label="secondary tabs example"
              >
                <Tab className={classes.tab} label="Movies" value="0" />
                <Tab label="TV Shows" value="1" />
              </Tabs>
            </Box>
          </Box>
        </Grid>
        <Grid item lg={3}></Grid>
      </Grid>
    );
}

export default NavBar