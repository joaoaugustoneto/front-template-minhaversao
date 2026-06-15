const API_URL = "http://localhost:3000/requerimentos";

function getHeaders() {
  const token = localStorage.getItem("@AlunoOnline:token");
  if (!token) {
    const error = new Error("Não autorizado");
    error.status = 401;
    throw error;
  }

  return {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${token}`
  };
}

export async function listarRequerimentos() {
  const response = await fetch(API_URL, {
    headers: getHeaders()
  });
  
  if (!response.ok) {
      if (response.status === 401) {
          const error = new Error("Sessão expirada");
          error.status = 401;
          throw error;
      }
    throw new Error("Erro ao buscar requerimentos");
  }
  return response.json();
}

export async function cadastrarRequerimento(requerimento) {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(requerimento),
  });
  
  if (!response.ok) {
      if (response.status === 401) {
          const error = new Error("Sessão expirada");
          error.status = 401;
          throw error;
      }
    throw new Error("Erro ao cadastrar requerimento");
  }
  return response.json();
}
