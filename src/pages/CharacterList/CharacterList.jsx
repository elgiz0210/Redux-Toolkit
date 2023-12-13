import React, {useEffect, useState} from 'react';
import {getAllCharacters} from "../../requests/getAllCharacters/getCaharcters";
import {useDispatch, useSelector} from "react-redux";
import {setData} from "../../features/data/dataSlice";
import {useNavigate} from "react-router-dom";
import {setId} from "../../features/id/idSlice";
import {setName} from '../../features/names/namesSlice';
import { setImg } from '../../features/img/imgSlice';
import { setTitle } from '../../features/title/titleSlice';
import CircularProgress from '@mui/material/CircularProgress';


const CharacterList = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.data.data)
    const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        (async () => {
            setIsLoading(true)
            try {
                const result = await getAllCharacters()
                dispatch(setData(result))
            } catch (e) {
                console.log(e)
            } finally {
                setIsLoading(false)
            }
        }) ()
    }, [])

    const toDetail = (id,fullName,imageUrl,title) => {
        dispatch(setId(id))
        dispatch(setName(fullName))
        dispatch(setImg(imageUrl))
        dispatch(setTitle(title))

        
        navigate('/detail')
    }


    

    return (
        <div>
            <h2>Общий список персонажей Игры Престолов</h2>

            {isLoading ?
                <div><CircularProgress /></div>
                :
                <>
                    {data.map((item, idx) => {
                        return (
                            <div
                                key={idx}
                                onClick={() => toDetail(item.id,item.fullName,item.imageUrl,item.title)}
                            >
                                <h4 className='item-list'>{item.fullName}</h4>
                            </div>
                        )
                    })}
                </>
            }
        </div>
    );
};

export default CharacterList;