import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    
    // if (typeof entrepreneurName!="string" 
    // || typeof entrepreneurEmail != "string"
    // || typeof entrepreneurPhone != "number"
    // || typeof businessName != "string"
    // || typeof projectName != "string"
    // || typeof projectDescription != "string"
    // || typeof fundraiserStartDate != "string"
    // || typeof fundraiserEndDate != "string"
    // || typeof minimumInvestment != "number"
    // || typeof maximumInvestment != "number"
    // || typeof percentOwnershipPerDollar !="number") {
    // // post form to firebase
    // this.props.failStep();
    // } else {
    this.props.nextStep();
    
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { entrepreneurName,
        entrepreneurEmail,
        entrepreneurPhone,
        businessName,
        projectName,
        projectDescription,
        fundraiserStartDate,
        fundraiserEndDate,
        minimumInvestment,
        maximumInvestment,
        percentOwnershipPerDollar }
    } = this.props;
    const valueVars = [ 
      {name:'entrepreneur Name', value: entrepreneurName},
      {name:'entrepreneur Email', value: entrepreneurEmail},
      {name:'entrepreneur Phone', value: entrepreneurPhone},
      {name:'businessName', value: businessName},
      {name:'projectName', value: projectName},
      {name:'projectDescription', value: projectDescription},
      {name:'fundraiserStartDate', value: fundraiserStartDate},
      {name:'fundraiserEndDate', value: fundraiserEndDate},
      {name:'minimumInvestment', value: minimumInvestment},
      {name:'maximumInvestment', value: maximumInvestment},
      {name:'percentOwnershipPerDollar', value: percentOwnershipPerDollar},
    ];
    const listItemArr = [];
    valueVars.forEach((item, i) => listItemArr.push(
      <ListItem>
        <ListItemText primary={item.name} secondary={item.value}/>
      </ListItem>
    ));

    return (
      <MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              {listItemArr}
            </List>
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
            >Confirm & Continue</Button>
          </Dialog>
        </>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
