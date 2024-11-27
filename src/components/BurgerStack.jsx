//import { useState } from "react";

const BurgerStack = ({stack, removeFromBurger}) => {
    return ( <ul>
        {stack.map((stackItem, index) => {
          return <li key={index} style={{backgroundColor:stackItem.color}}>
            {stackItem.name}
            <button onClick={() => removeFromBurger(index)}> X </button>
            </li>;
        })}
    </ul>
    );
  };
  
  export default BurgerStack;
  