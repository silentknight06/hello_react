const heading = React.createElement("h1", {id:"heading"} ,[
    React.createElement("h1", {id:"child"},[
        React.createElement("h1", {} ,"hello1"),
        React.createElement("h1", {}, "hello2")
    ]),
    React.createElement("h1", {id:"child"},[
        React.createElement("h1", {} ,"hello1"),
        React.createElement("h1", {}, "hello2")
    ])
] );




console.log(heading);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);