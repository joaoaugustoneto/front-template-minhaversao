import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import './RequerimentoForm.css'; 

export function RequerimentoForm() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm({
    defaultValues: {
      tipo: '',
      descricao: '',
      data: new Date().toISOString().split('T')[0] 
    }
  });

  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log('Requerimento enviado com sucesso!', data);
    reset(); 
  };

  return (
    <div className="form-container">
      <h2>Meus Requerimentos</h2>
      <h3>Novo Requerimento</h3>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>

        <div className="form-group">
          <label htmlFor="tipo">Tipo de Requerimento</label>
          <select
            id="tipo"
            {...register('tipo', { required: 'Tipo é obrigatório' })}
          >
            <option value="">Selecione um tipo...</option>
            <option value="matricula">Declaração de Matrícula</option>
            <option value="prova">Segunda Chamada de Prova</option>
            <option value="historico">Histórico Escolar</option>
          </select>
          {errors.tipo && <span className="error-message">{errors.tipo.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="descricao">Descrição</label>
          <textarea
            id="descricao"
            rows="5"
            {...register('descricao', {
              required: 'Descrição é obrigatória',
              minLength: { value: 10, message: 'A descrição deve ter no mínimo 10 caracteres' }
            })}
          />
          {errors.descricao && <span className="error-message">{errors.descricao.message}</span>}
        </div>
        <div className="form-group">
          <label htmlFor="data">Data do Requerimento</label>
          <input
            type="date"
            id="data"
            {...register('data')}
          />
        </div>
        <div className="form-actions">
          <button type="button" className="btn-cancelar" onClick={() => navigate(-1)}>
            Cancelar
          </button>
          <button type="submit" className="btn-salvar">
            Salvar
          </button>
        </div>
      </form>
    </div>
  );
}