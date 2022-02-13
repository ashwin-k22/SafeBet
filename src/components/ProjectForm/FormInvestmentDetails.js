import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormInvestmentDetails extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Enter Investment Details" />
            <TextField
              placeholder="Enter Your Minimum Investment"
              label="Minimum Investment"
              onChange={handleChange('minimumInvestment')}
              defaultValue={values.minimumInvestment}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Maximum Investment"
              label="Maximum Investment"
              onChange={handleChange('maximumInvestment')}
              defaultValue={values.maximumInvestment}
              margin="normal"
              fullWidth
            />
            <br />
            <TextField
              placeholder="Enter Your Percent Ownership Per Dollar"
              label="Percent"
              onChange={handleChange('percentOwnershipPerDollar')}
              defaultValue={values.percentOwnershipPerDollar}
              margin="normal"
              fullWidth
            />
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

            <Button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default FormInvestmentDetails;
