import React from "react";

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Inje',
  lastName: 'Lee' 
};

const element = (
    <h1>
        Hello, {formatName(user)}
    </h1>
); 

function Hello2() {
    return element;
}

export default Hello2; 