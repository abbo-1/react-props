// Render the circles using React!
const App = (props) => {
    let { circles } = props;

    console.log(props);

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

    console.log("butternut squash" + myStyle)

     const superCircles = <div style={myStyle} />


    const circleGathering = []
        for (var i=0; i<15; i++) {
            circleGathering.push(<superCircles key={i} />)
        }
    console.log(superCircles + "these are super circles");
    console.log(circleGathering + "there once was a man from nantucket")
    return (
        <div>
            {superCircles}
        </div>
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