function Item(props){
    // var color = "yellow";

    var [color, setColor] = useState("Yellow");// ["yellow", fun]

    var { name, content } = props;
    return (
        <div className="Item">
            {name}: <h2>{content}</h2>
            Color: <h3>{color}</h3>
            <button>
                onClick={function () {
                    color = "red";
                    console.log(color);
                }}
            </button>
        </div>
    )
}