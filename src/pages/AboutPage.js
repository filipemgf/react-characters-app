import { useEffect, useState } from "react";

function AboutPage(){

    console.log("react has invoked... AboutPage")


    const [counter, setCounter] = useState(0);

    useEffect(() => {
        return () => {
            // this will run only after the component unmounts....
            console.log("react has unmounted the component AboutPage....")
        }
    }, []);


    const increaseCounter = () => {
        setCounter(counter + 1);
    }

    return(
        <>
            <h1>this is the AboutPage</h1>
            <h2>counter.... {counter}</h2>
            <button onClick={increaseCounter}>Increase counter</button>
        </>
    )
}

export default AboutPage;