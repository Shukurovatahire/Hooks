import { useState, useEffect } from 'react';


const Time: React.FC = () => {
const [currTime,setCurrTime]=useState(new Date().toLocaleString())

useEffect(()=>{
    const timmerId=setInterval(()=>{
        setCurrTime(new Date().toLocaleString())
    },1000)
    return ()=>clearInterval(timmerId)

},[])

    return(
        <div className='crrTime'>
            <h1>{currTime}</h1>
        </div>
    )
};

export default Time