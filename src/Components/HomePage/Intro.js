import React from 'react';
import StatementChanger from './StatementChanger';

function Intro(props) {
    return (
        <>
        <div className='poppins-header-responsive'>
            Your local source for Premium Tea
        </div>
        <StatementChanger></StatementChanger>
        </>
    );
}

export default Intro;