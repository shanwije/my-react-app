console.log(React);

// var component = React.createElement(
//     'h1',
//     null,
//     'Hello Shan'
// );

const uInfo = {
    name : "Shan Wijenayaka",
    age : 24,
    designation : "Software Engineer"
};

const getUserInfo = (info) =>{
    if(info != {}){
        return <h1>{info.name}</h1>;
    }
}
var component = (<div>
{getUserInfo(uInfo)}
</div>);



  
;

ReactDOM.render(component, document.getElementById('root'));