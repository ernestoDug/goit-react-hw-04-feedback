//  //  один змінювач на 3x
import { useState } from "react";

    const  useClicker = (event) => {
        // console.log( event.target)
        const[name, setState] = useState(event.target.name);
                          setState(prevState => ( prevState +1));
           return[name, setState]
      };
   

    export default useClicker