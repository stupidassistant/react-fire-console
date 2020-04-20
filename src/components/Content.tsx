import * as React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
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
  label: string
}

function Content(props: ContentProps) {
  const { classes, label } = props;

  return (
    <Paper className={classes.paper}>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          {`This page, called ${label} has not been configured yet. Please stand by.`}
        </Typography>
      </div>
    </Paper>
  );
}

export default withStyles(styles)(Content);