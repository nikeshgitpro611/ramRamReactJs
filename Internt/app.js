const heading = React.createElement("h1", { id: "heading" }, "hello World !");

const nastedRendring = React.createElement("div", { id: "parent" }, [
  React.createElement("h1", {}, "Hello i am h1 Tag"),
  React.createElement("h1", {}, "Hello i am h1 Tag2"),
  React.createElement("h1", {}, "Hello i am h1 Tag4"),
]);

console.log("nastedRendring : ", nastedRendring);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nastedRendring);
// root.render(heading);
