const API_URL = "http://localhost:3000/usuarios";

export async function login(email, senha) {
  const response = await fetch(`${API_URL}?email=${email}&senha=${senha}`);
  
  if (!response.ok) {
    throw new Error("Erro ao validar credenciais");
  }

  const usuarios = await response.json();

  if (usuarios.length === 0) {
    throw new Error("E-mail ou senha incorretos");
  }

  const usuario = usuarios[0];
  // Utilizando o token JWT fornecido pelo usuário
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30";

  return { usuario, token };
}
