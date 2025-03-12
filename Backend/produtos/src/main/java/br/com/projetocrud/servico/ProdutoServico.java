package br.com.projetocrud.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.projetocrud.produtos.modelo.ProdutoModelo;
import br.com.projetocrud.repositorio.ProdutoRepositorio;

@Service
public class ProdutoServico {
    
    @Autowired
    ProdutoRepositorio pr;

    //Listar produtos
   public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }

    //Cadastrar produtos 
}
