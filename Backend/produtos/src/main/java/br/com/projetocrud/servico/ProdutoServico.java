package br.com.projetocrud.servico;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import br.com.projetocrud.produtos.modelo.ProdutoModelo;
import br.com.projetocrud.produtos.modelo.RespostaModelo;
import br.com.projetocrud.repositorio.ProdutoRepositorio;

@Service
public class ProdutoServico {
    
    @Autowired
   private ProdutoRepositorio pr;

    @Autowired
    private RespostaModelo rm;

    //Listar produtos
   public Iterable<ProdutoModelo> listar(){
        return pr.findAll();
    }

    public ResponseEntity <?> cadastrarAlterar(ProdutoModelo pm, String acao){
        if(pm.getNome().equals("")){
            rm.setResposta("O nome do produto é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.BAD_REQUEST);
        }else if(pm.getMarca().equals("")){
            rm.setResposta("A marca do produto é obrigatório!");
            return new ResponseEntity<RespostaModelo>(rm,HttpStatus.BAD_REQUEST);
        }else{
            if(acao.equals("cadastrar")){
                return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.CREATED);
            }else{
                return new ResponseEntity<ProdutoModelo>(pr.save(pm), HttpStatus.OK);
            }
        
            
        }
        }
    
    public ResponseEntity <RespostaModelo> remover(Long codigo){
        pr.deleteById(codigo);
            rm.setResposta("O nome do produto foi removido com sucesso! ");
            return new ResponseEntity<RespostaModelo>(rm, HttpStatus.OK);

    }
}
    