function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
  return (
    <form>
      <h2>Sistema Gestor de Produtos</h2>
      <input type='text' value={obj.nome} placeholder='Nome' onChange={eventoTeclado} name="nome" className='form-control' />
      <input type='text' value={obj.marca} placeholder='Marca' onChange={eventoTeclado} name="marca" className='form-control' />
       <input type='text' value={obj.descricao} placeholder='Descrição' onChange={eventoTeclado} name="descricao" className='form-control' />
       <input type='number' value={obj.preco} placeholder='Preço' onChange={eventoTeclado} name="preco" className='form-control' />
     <input type='number' value={obj.qtdEstoque} placeholder='Quantidade em estoque' onChange={eventoTeclado} name="qtdEstoque" className='form-control' />  
      {
        botao
          ?
          <div className="form-buttons">
            <button type='button' value='Cadastrar' onClick={cadastrar} className='btn btn-success' >
            <i className="fas fa-plus" ></i>  Cadastrar
            </button>
          </div>  
          :
          <div className="form-buttons">
            <button type='button' onClick={alterar} value='Alterar' className='btn btn-warning' >
            <i className="fas fa-edit"></i> Alterar
            </button>
            <button type='button' onClick={remover} value='Remover' className='btn btn-danger' >
             <i className="fas fa-remove"></i> Remover
             </button>
            <button type='button' onClick={cancelar} value='Cancelar' className='btn btn-secondary' >
            <i className="fas fa-cancel"></i> Cancelar
            </button>
          </div>
      }
    </form>
  )
}

export default Formulario;