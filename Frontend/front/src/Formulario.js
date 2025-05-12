function Formulario({ botao, eventoTeclado, cadastrar, obj }) {
  return (
    <form>
      <h2>Sistema Gestor de Produtos</h2>
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Nome"
        name="nome"
        value={obj.nome}
        onChange={eventoTeclado}
      />
      <input
        className="form-control mb-2"
        type="text"
        placeholder="Marca"
        name="marca"
        value={obj.marca}
        onChange={eventoTeclado}
      />
      {
        botao ?
          <input
            className="btn btn-success"
            type="button"
            value="Cadastrar"
            onClick={cadastrar}
          />
          :
          <div>
            <input className="btn btn-warning" type="button" value="Cancelar" />
            <input className="btn btn-primary" type="button" value="Alterar" />
            <input className="btn btn-danger" type="button" value="Remover" />
          </div>
      }
    </form>
  );
}

export default Formulario;
