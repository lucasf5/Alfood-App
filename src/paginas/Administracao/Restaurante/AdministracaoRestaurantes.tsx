import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import http from "../../../http";
import IRestaurante from "../../../interfaces/IRestaurante";

const AdministracaoRestaurantes = () => {
  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);

  useEffect(() => {
    http
      .get("restaurantes/")
      .then((response) => setRestaurantes(response.data));
  });

  const navigate = useNavigate();
  
  const cadastro = () => {
    navigate("novo");
  };

  const editar = (item: number) => {
    navigate(`editar/${item}`);
  };

  const deletar = (item: number) => {
    http.delete(`restaurantes/${item}/`);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        width: "80vw",
        margin: "0 auto",
      }}
    >
      <Typography variant="h1">Setor administrativo</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Açoes</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restaurantes.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  {" "}
                  <Button variant="contained" color="warning">
                    {item.nome}
                  </Button>
                </TableCell>
                <TableCell>
                  <Button onClick={() => editar(item.id)} variant="contained">
                    Editar
                  </Button>
                  <Button
                    onClick={() => deletar(item.id)}
                    color="error"
                    variant="contained"
                  >
                    Deletar
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <br />
      <Button onClick={cadastro} variant="contained" color="success">
        Adicionar novo restaurante
      </Button>
    </div>
  );
};

export default AdministracaoRestaurantes;
