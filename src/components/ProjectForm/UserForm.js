import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails, { FormInvestmentDetails } from './FormInvestmentDetails';
import Confirm from './Confirm';
import Success from './Success';
import FormBusinessDetails from './FormBusinessDetails';
import Failure from './Failure';

export class UserForm extends Component {
  state = {
    step: 1,
    entrepreneurName: '',
    entrepreneurEmail: '',
    entrepreneurPhone: '',
    businessName: '',
    projectName: '',
    projectDescription: '',
    fundraiserStartDate: '',
    fundraiserEndDate: '',
    minimumInvestment: '',
    maximumInvestment: '',
    percentOwnershipPerDollar: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  failStep = () => {
    const { step } = this.state;
    this.setState({
      step: 6
    });
  }
  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };

 
  // businessName, start Date, end Date
  // minimumInvestment, maxInvestment, perOwnerperDollar,


  render() {
    const { step } = this.state;
    const { entrepreneurName,
    entrepreneurEmail,
    entrepreneurPhone,
    businessName,
    projectName,
    projectDescription,
    fundraiserStartDate,
    fundraiserEndDate,
    minimumInvestment,
    maximumInvestment,
    percentOwnershipPerDollar } = this.state;
    const values = { entrepreneurName,
      entrepreneurEmail,
      entrepreneurPhone,
      businessName,
      projectName,
      projectDescription,
      fundraiserStartDate,
      fundraiserEndDate,
      minimumInvestment,
      maximumInvestment,
      percentOwnershipPerDollar };

    switch (step) {
      case 1:
        return (
          <FormUserDetails
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return (
          <FormBusinessDetails
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 3:
          return (
            <FormInvestmentDetails
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
      case 4:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            failStep={this.failStep}
            values={values}
          />
        );
      case 5:
        return <Success />;
      case 6:
        return <Failure />;
      default:
        (console.log('This is a multi-step form built with React.'))
    }
  }
}

export default UserForm;
