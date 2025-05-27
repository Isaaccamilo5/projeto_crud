function Formulario({ botao, eventoTeclado, cadastrar, obj, cancelar, remover, alterar }) {
  return (
    <div className="container-formulario">
      
      <div className="formulario-wrapper">

        <div className="fundo-formulario">

          <form className="formulario">
           <center> <h2>Cadastrar Produtos</h2> </center>
            <input type='text' value={obj.nome} placeholder='Nome' onChange={eventoTeclado} name="nome" className='form-control' />
            <input type='text' value={obj.marca} placeholder='Marca' onChange={eventoTeclado} name="marca" className='form-control' />
            <input type='text' value={obj.descricao} placeholder='Descrição' onChange={eventoTeclado} name="descricao" className='form-control' />
            <input type='number' value={obj.preco} placeholder='Preço' onChange={eventoTeclado} name="preco" className='form-control' />
            <input type='number' value={obj.qtdEstoque} placeholder='Quantidade em estoque' onChange={eventoTeclado} name="qtdEstoque" className='form-control' />
            <input type='url' value={obj.urlImagem} placeholder='URL da Imagem' onChange={eventoTeclado} name="urlImagem" className='form-control' />

            {
              botao
                ?
               <center> <button type="button" onClick={cadastrar} className='btn btn-primary'>
                  <i className="fas fa-plus" ></i> Adicionar
                </button> </center>

                :

                <div>
                  <button type="button" onClick={alterar} className="btn btn-warning">
                    <i className="fas fa-edit"></i> Alterar
                  </button>
                  <button type='button' onClick={remover} value='Remover' className='btn btn-danger'>
                    <i className="fas fa-remove"></i> Remover
                  </button>
                  <button type='button' onClick={cancelar} value='Cancelar' className='btn btn-secondary'>
                    <i className="fas fa-cancel"></i> Cancelar
                  </button>
                </div>
            }

          </form>
        </div>
      </div>
    </div>

  )

}

export default Formulario;