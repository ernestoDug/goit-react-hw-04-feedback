//  оHOOKений змінювач на 3x
import  setFeedback from "./App";

const  clicker = event => {
    // console.log( event.target)
    const {name} = event.target;
    setFeedback(prevState => ({...prevState, [name]:  prevState[name] +1  }));
   };

export default clicker