// function Greeting({name, topic}) {
//     return (
//         <div>
//             <h1>{name}</h1>
//             <p>{topic}</p>
//         </div>
//     )
// };

// export default Greeting;
import React from 'react';

class Greeting extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    render() {
        return (
            <div>
             <h1>{this.props.name}</h1>
             <p>{this.props.topic}</p>
         </div>
        )
    }
}

export default Greeting;