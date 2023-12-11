import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {getOneCharacter} from "../../requests/getOneCharacter/getOneCharacter";
import {useNavigate} from "react-router-dom";

const DetailInfo = () => {

    const id = useSelector((state) => state.id.id)
    const navigate = useNavigate()

    useEffect(() => {
        ( async () => {
        try {
            const result =  await getOneCharacter(id)
            console.log(result)
        } catch (e) {
            if (e.response.status ===  400) {
                navigate('/')
            }
        }
        })()
    }, [])

    return (
        <div>
            <h2>Станица детальной информации</h2>

        </div>
    );
};

export default DetailInfo;