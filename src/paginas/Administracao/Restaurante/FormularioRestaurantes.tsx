import { Alert, AppBar, Box, Button, Container, Link, TextField, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import ButtonVoltar from "../../../componentes/ButtonVoltar";
import http from "../../../http";
import { Link as RouteLink } from "react-router-dom"; 

const FormularioRestaurantes = () => {
  const [restaurante, setRestaurante] = useState("");
  const [ativo, setAtivo] = useState(false);

  return (
    <>

      <AppBar position="static" sx={{marginBottom: "1rem"}}>
        <Container maxWidth="xl">
          <Toolbar>
            <Typography variant="h6">
              <Box sx={{display: "flex", flexGrow: 1}}>
                <Link component={RouteLink} to="/admin/restaurantes">
                  <Button sx={{my: 2, color: "white"}}>
                    Restaurantes
                  </Button>
                </Link>
                <Link component={RouteLink} to="/admin/restaurantes/novo">
                  <Button sx={{my: 2, color: "white"}}>
                    Novo Restaurante
                  </Button>
                </Link>
              </Box>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>

      <Box>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
            alignItems: "center",
          }}
          onSubmit={(evento) => {
            evento.preventDefault();
            if (restaurante !== "") {
              http
                .post("restaurantes/", {
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
              Criado com sucesso!
            </Alert>
          )}
          <ButtonVoltar />
          <label>Nome do Restaurante</label>
          <TextField
            id="standard-basico"
            label="Nome"
            variant="standard"
            value={restaurante}
            onChange={(evento) => setRestaurante(evento.target.value)}
          />
          <Button type="submit" variant="outlined">
            Enviar
          </Button>
        </form>
      </Box>
    </>
  );
};

export default FormularioRestaurantes;
