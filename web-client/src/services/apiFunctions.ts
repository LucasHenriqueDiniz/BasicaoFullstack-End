import axios from "axios";
import { livroType } from "../types/livro";

export function criarLivro(livro: livroType) {
  return axios.post("http://localhost:5000/livro/", livro);
}

export function todosLivros() {
  return axios.get("http://localhost:5000/livro/");
}
