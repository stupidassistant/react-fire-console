import * as React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Paper from '@material-ui/core/Paper';

const styles = (theme: Theme) =>
  createStyles({
    paper: {
      maxWidth: 936,
      margin: 'auto',
      overflow: 'hidden',
    },
    contentWrapper: {
      margin: '40px 16px',
    },
  });

export interface ContentProps extends WithStyles<typeof styles> {
  children: JSX.Element|JSX.Element[]
}

function Content(props: ContentProps) {
  const { classes, children } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        {children}
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Content);