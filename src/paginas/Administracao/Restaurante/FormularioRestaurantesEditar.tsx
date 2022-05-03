import { Alert, Button, TextField } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonVoltar from "../../../componentes/ButtonVoltar";
import http from "../../../http";

const FormularioRestaurantesEditar = () => {
  const [restaurante, setRestaurante] = useState("");
  const [ativo, setAtivo] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    http
      .get(`restaurantes/${id}/`)
      .then((response) => setRestaurante(response.data.nome));
  }, []);

  return (
    <form style={{display: "flex", flexDirection: "column", gap: "2rem", alignItems: "center"}}
      onSubmit={(evento) => {
        evento.preventDefault();
        if (restaurante !== "") {
          http
            .put(`restaurantes/${id}/`, {
              nome: restaurante,
            })
            .then(() => setAtivo(true));
        }
      }}
    >
      {ativo && (
        <Alert
          onClose={() => {
            setAtivo(false);
          }}
        >
          Restaurante atualizado!
        </Alert>
      )}
      <ButtonVoltar />
      <TextField
        id="standard-basico"
        label="Nome"
        variant="standard"
        value={restaurante}
        onChange={(evento) => setRestaurante(evento.target.value)}
      />
      <Button type="submit" variant="outlined">
        Salvar
      </Button>
    </form>
  );
};

export default FormularioRestaurantesEditar;
