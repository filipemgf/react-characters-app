import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function CharacterDetails() {

    const { characterId } = useParams();

    const [details, setDetails] = useState({});

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/characters/${characterId}`)
            .then(response => {
                setDetails(response.data);
            })
            .catch(e => console.log(e))
    }, [])


    return (
        <div className="box">
            <h1>{details.name}</h1>
            Occupation: {details.occupation} <br />
            Weapon: {details.weapon} <br />
            Debt: {details.debt ? "Yes" : "No"} <br />

            <p>
                <Link to="/">Back</Link>
            </p>
        </div>
    );

}

export default CharacterDetails;