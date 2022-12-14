import { React, useState, useEffect } from 'react';

function StatementChanger(props) {
    const headingStatement = ['Natural', 'Fresh', 'Modern', 'Delish'];

    const [index, setIndex] = useState(0)

    useEffect(() => {   
        const intervalID = setInterval(() => {
            if (index < headingStatement.length - 1){
                setIndex(index + 1)
            } 
            if (index === headingStatement.length - 1){
                setIndex(index - headingStatement.length + 1)
            }
        }, 2500);
        return () => clearInterval(intervalID);//Notes: Clean up function: Clears the interval on component dismount. Prevents bugs as you try to update the component after dismount from DOM.
    },); //Notes: Dependency array = empty; ensuring execution of useEffect only on initial mounting of the component 

    //Attribution: https://stackoverflow.com/questions/65504562/change-text-every-3-seconds-react-useeffect

    return (
        <div className="bg-Img-landing">
            <h1 className="poppins">Your local source for Premium Tea </h1>
            <h3 className='poppins-change'>{headingStatement[index]}</h3> 
        </div>
    );
}

export default StatementChanger;