import './Input.css';

function Input({ label, type, id, value, onChange, placeholder, error }) {
  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        type={type}
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        /* Se existir um erro, adiciona a classe 'input-error' para borda vermelha */
        className={error ? 'input-error' : ''} 
      />
      {/* Renderiza a mensagem condicionalmente se houver erro */}
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default Input;