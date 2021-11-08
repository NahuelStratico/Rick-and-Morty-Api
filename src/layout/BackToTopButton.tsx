import React from 'react';
import { Fab, Grow, useScrollTrigger, makeStyles } from '@material-ui/core';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const threshold = 300;

function handleClick() {
  window.scroll({
    top: 0,
    left: 0,
    behavior: 'smooth',
  });
}

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    zIndex: theme.zIndex.appBar,
  },
}));

function BackToTopButton() {
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold,
  });

  return (
    <Grow in={trigger}>
      <Fab className={classes.fab} color="secondary" onClick={handleClick}>
        <KeyboardArrowUpIcon fontSize="large" />
      </Fab>
    </Grow>
  );
}

export default BackToTopButton;
