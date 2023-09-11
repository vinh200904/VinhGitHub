import Item from "./item";
const style = {
    width : '70%',
    border: '1px solid black',
}
function Blogs(){
    return(
        <div className="blogs" style={style}>
            <h1>Hoc ReactJS</h1>
            <Item />
            <Item />
            <Item />
            <Item />
        </div>
    );
}

export default Blogs;