import * as React from 'react';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';
import { Box, Container, Typography, Button } from '@material-ui/core';

const styles = (theme: Theme) =>
  createStyles({
    header: {
      padding: 20,
      paddingTop: 48,
      backgroundColor: 'rgb(52, 68, 159)',
      height: 450,
      paddingBottom: 100
    }
  });

export interface HeaderProps extends WithStyles<typeof styles> {}

function Header(props: HeaderProps) {
  const { classes } = props;

  return (
    <Box className={classes.header}>
      <Box display="flex" flexDirection='column' justifyContent='center' height='100%'>
        <Container
          maxWidth="md"
          style={{color: 'white'}}
        >
          <Typography variant="h3">
            A/B Testing
          </Typography>
          <Typography variant="h6">
            Run experiments to make key engagement flows more effective
          </Typography>
          <Button variant="contained" color="secondary">
            Create experiment
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

export default withStyles(styles)(Header);