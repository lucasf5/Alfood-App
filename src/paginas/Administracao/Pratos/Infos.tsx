import { Button } from "@mui/material";
import axios from "axios";
import { info } from "console";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../../http";
import IPrato from "../../../interfaces/IPrato";

const Infos = () => {
  const [infos, setInfos] = useState<IPrato>();

  const { id } = useParams();

  const navigate = useNavigate()

  useEffect(() => {
    http.get(`pratos/${id}/`).then((resp) => setInfos(resp.data));
  });
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "80vw",
        margin: "0 auto",
        padding: "2rem",
      }}
    >
      <Button variant="contained" color="success" onClick={()=> navigate(-1)}>
        {"< Voltar"}
      </Button>
      <h1 style={{ fontSize: "4rem" }}>{infos?.nome}</h1>
      <img src={infos?.imagem} alt="" />
      <h1>{infos?.descricao}</h1>
      <Button variant="contained" color="warning">
        {infos?.tag}
      </Button>
    </div>
  );
};

export default Infos;
