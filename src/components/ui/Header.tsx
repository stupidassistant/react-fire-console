import * as React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Box, Container, Typography } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    header: {
      paddingTop: 48,
      backgroundColor: 'rgb(52, 68, 159)',
      height: 450
    }
  });

export interface HeaderProps extends WithStyles<typeof styles> {}

function Header(props: HeaderProps) {
  const { classes } = props;

  return (
    <Box className={classes.header}>
      <Container
        maxWidth="md"
      >
        <Typography variant="h4">
          Performance
        </Typography>
        <Typography variant="h5">
          Get actionable insights into your app's performance and the latencies your users experience
        </Typography>
      </Container>
    </Box>
  );
}

export default withStyles(styles)(Header);