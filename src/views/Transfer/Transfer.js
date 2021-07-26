import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';

import {  Transfer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Transfers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid
        container
        spacing={4}
      >
        <Grid
          item
          md={2}
          xs={12}
        >
          
        </Grid>
        <Grid
          item
          md={8}
          xs={12}
        >
          <Transfer />
        </Grid>
        <Grid
          item
          md={2}
          xs={12}
        >
          
        </Grid>
      </Grid>
    </div>
  );
};

export default Transfers;
