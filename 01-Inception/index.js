
const Heading = React.createElement("div", {
    "id": "parent"
}, React.createElement("div", { id: "child" }, [React.createElement("h1", {}, "hii h1"), React.createElement("h1", {}, "hii h1")])
)

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(Heading)
