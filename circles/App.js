// Render the circles using React!
const App = (props) => {
    let { circles } = props;

    console.log(props)

    // const myStyle = {
    //     width: circles[0].radius * 2, 
    //     height: circles[0].radius * 2,
    //     borderRadius: circles[0].radius,
    //     backgroundColor: circles[0].color
    // }

    const myStyle = {
        width: circles.radius, 
        height: circles.radius,
        borderRadius: circles.radius,
        backgroundColor: circles.color
    }

    superCircles = <div style={myStyle} />

    const circleGathering = []
        for (var i=0; i<12; i++) {
            circleGathering.push(<superCircles key={i} />)
        }

    return (
        <div {...circleGathering} />
    )
}

// const Circle = null;

// CHALLENGE: Write a separate Circle component for use in the App component

// {{
//     width: 50, 
//     height: 50,
//     backgroundColor: "#ffff00",
//     borderRadius: "50px",
//     }}>