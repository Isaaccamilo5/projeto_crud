function Tabela({ vetor, selecionar }) {
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Nome</th>
                    <th>Marca</th>
                    <th>Descrição</th>
                    <th>Preço</th>
                    <th>Quantidade em estoque</th>
                    
                </tr>
            </thead>
            <tbody>
                {
                    vetor.map((obj, indice) => (
                        <tr key={indice}>
                            <td> {indice + 1}</td>
                            <td> {obj.nome}</td>
                            <td> {obj.marca}</td>
                            <td> {obj.descricao}</td>
                            <td> {obj.preco}</td>
                            <td> {obj.qtdEstoque}</td>
                            <td>
                              
                            </td>
                            <td>
                                <button onClick={() => selecionar(indice)} className="btn btn-success">
                                    <i className="fas fa-check" style={{ marginRight: "5px" }}></i> Selecionar
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    )
}
export default Tabela;
