import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { Button } from '../Button';

export class Failure extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Failure" />
            <h1>Thank You For Your Submission, however there were issues</h1>
            <Button onClick={event => window.location.href='/addprojects'}> Try again </Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Failure;
