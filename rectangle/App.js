// Render the rectangle using React!
const App = (props) => {
    let { rectangle } = props;

    const myStyle = {
        width: rectangle.width,
        height: rectangle.height,
        backgroundColor: rectangle.color
    }

    return (
        <div style={myStyle} />
    )
}
