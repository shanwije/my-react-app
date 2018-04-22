"use strict";

console.log(React);

// var component = React.createElement(
//     'h1',
//     null,
//     'Hello Shan'
// );

var uInfo = {
    name: "Shan Wijenayaka",
    age: 24,
    designation: "Software Engineer"
};

var getUserInfo = function getUserInfo(info) {
    if (info != {}) {
        return React.createElement(
            "h1",
            null,
            info.name
        );
    }
};
var component = React.createElement(
    "div",
    null,
    getUserInfo(uInfo)
);

;

ReactDOM.render(component, document.getElementById('root'));