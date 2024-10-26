
import ReactDOM from 'react-dom/client';
import React, { useState, useEffect } from 'react';
import Counter from './btncounter';
import Toogle from './toggle';
import Input from './input';
import RetrieveData from './fetch';
import List from './list';




const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
<div style={{textAlign:"center"}}><Counter></Counter><hr></hr>
    <Toogle></Toogle><hr></hr>
    <Input></Input><hr></hr>
    <RetrieveData></RetrieveData><hr></hr>
    <List></List></div>
)















