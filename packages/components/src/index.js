import React from "react";
import toggleMachine from '@finite/states';



const Input = ({type,value}) => (<input type={type} value={value} />);

const H1 = ({children}) => (<h1>{children}</h1>);

export {H1, Input}
