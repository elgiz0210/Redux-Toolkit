import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getOneCharacter } from "../../requests/getOneCharacter/getOneCharacter";
import { useNavigate } from "react-router-dom";
import Alert from "@mui/material/Alert";
import CircularProgress from '@mui/material/CircularProgress';
import "./DetailInfoCss.css";

const DetailInfo = () => {
  const id = useSelector((state) => state.id.id);
  const fullName = useSelector((state) => state.fullName.fullName);
  const imageUrl = useSelector((state) => state.imageUrl.imageUrl);
  const title = useSelector((state) => state.title.title);
  const [isLoading, setIsLoading] = useState(false)

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      setIsLoading(true)
      try {
        const result = await getOneCharacter(id, fullName, imageUrl);
        console.log(result);
      } catch (e) {
        if (e.response.status === 400) {
          navigate("/");
        } else if (e.response.status === 404) {
          <Alert severity="error">
            This is an error alert — check it out!
          </Alert>;
        }
      }finally{
          setIsLoading(false)
        }
    })();
  }, []);

  return (
    <div>
      <h2>Станица детальной информации</h2>

      {isLoading ?
      <div><CircularProgress /></div>
      :
      <>
      <div>
        <h1>{id}</h1>
        <h2> {fullName}</h2>
        <h2> {title}</h2>
        <img src={imageUrl} alt="{name}" />
      </div>
      </>
      }
    </div>
  );
};

export default DetailInfo;


