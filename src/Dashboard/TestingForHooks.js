import React, { useState, useEffect } from 'react';


export default function Example(){
    const [seconds,setSeconds,data] = useState(0);

    useEffect(() => {
        const interval = setInterval(()=> {
            setSeconds( seconds => seconds +1);
        }, 1000);
        return ()=> clearInterval(interval);
        })
}
