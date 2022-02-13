import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import { db } from "../../firebase";
import React, { useReducer, useState } from 'react';
// import { useState } from "react";
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
// import ModalDialog from './ModalDialog';
import UserForm from '../ProjectForm/UserForm';

function AddProjects() {
    return (
        <UserForm />
    );
}



export default AddProjects;

