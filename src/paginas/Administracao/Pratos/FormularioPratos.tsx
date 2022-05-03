import {
  Alert,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import ButtonVoltar from "../../../componentes/ButtonVoltar";
import http from "../../../http";
import Itag from "../../../interfaces/Itag";
import IRestaurante from "../../../interfaces/IRestaurante";

const FormularioPratos = () => {
  const [prato, setPrato] = useState("");
  const [descricao, setDescricao] = useState("");

  const [tags, setTags] = useState<Itag[]>([]);
  const [tag, setTag] = useState<string>("");
  useEffect(() => {
    http.get<{ tags: Itag[] }>("tags/").then((resp) => setTags(resp.data.tags));
  }, []);

  const [restaurantes, setRestaurantes] = useState<IRestaurante[]>([]);
  const [restaurante, setRestaurante] = useState<string>("");
  useEffect(() => {
    http
      .get<IRestaurante[]>("restaurantes/")
      .then((resp) => setRestaurantes(resp.data));
  }, []);

  const [img, setImg] = useState<File | null>(null);

  const selecionarArquivo = (evento: React.ChangeEvent<HTMLInputElement>) => {
    if (evento.target.files?.length) {
      setImg(evento.target.files[0]);
    } else {
      setImg(null);
    }
  };

  const [ativo, setAtivo] = useState(false);

  return (
    <Box sx={{ width: "80vw", margin: "0 auto" }}>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
          alignItems: "center",
        }}
        onSubmit={(evento) => {
          evento.preventDefault();

          const formData = new FormData();

          formData.append("nome", prato);
          formData.append("descricao", descricao);
          formData.append("tag", tag);
          formData.append("restaurante", restaurante);

          if (img) {
            formData.append("imagem", img);
          }

          if (prato !== "") {
            http
              .request({
                url: "pratos/",
                method: "POST",
                headers: {
                  "Content-Type": "multipart/form-data",
                },
                data: formData,
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
        <TextField
          fullWidth
          id="standard-basico"
          label="Nome"
          variant="standard"
          value={prato}
          onChange={(evento) => setPrato(evento.target.value)}
          margin="dense"
        />
        <TextField
          fullWidth
          id="standard-basico"
          label="Descricao"
          variant="standard"
          value={descricao}
          onChange={(evento) => setDescricao(evento.target.value)}
        />

        <FormControl margin="dense" fullWidth>
          <InputLabel id="selectTag">Tag</InputLabel>
          <Select
            value={tag}
            onChange={(evento) => setTag(evento.target.value)}
          >
            {tags.map((tag) => (
              <MenuItem key={tag.id} value={tag.value}>
                {tag.value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControl margin="dense" fullWidth>
          <InputLabel id="selectRestaurante">Restaurantes</InputLabel>
          <Select
            value={restaurante}
            onChange={(evento) => setRestaurante(evento.target.value)}
          >
            {restaurantes.map((rest) => (
              <MenuItem key={rest.id} value={rest.id}>
                {rest.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>

        <input type="file" onChange={selecionarArquivo} />

        <Button type="submit" variant="outlined">
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default FormularioPratos;
