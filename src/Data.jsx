import React from 'react';
import Users from './Users.json';
import Comp2 from './Comp2';

function Data() {
    const datauser = Users
    console.log(datauser,'dataa');
  return (
    <div >
        <Comp2 datauser={datauser}/>
    </div>
  );
}

export default Data;
