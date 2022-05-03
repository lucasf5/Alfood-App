import { Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ButtonVoltar = () => {
  const navigate = useNavigate();

  const voltar = () => {
    navigate(-1);
  };
  
  return (
    <Button variant="outlined" color="warning" onClick={voltar}>
      Voltar
    </Button>
  );
};

export default ButtonVoltar;
