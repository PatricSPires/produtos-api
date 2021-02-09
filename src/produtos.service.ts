import { Injectable } from '@nestjs/common'
import { Produto } from './produto.model'

@Injectable()
export class ProdutosServices {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro de Java', 29.0),
    new Produto('LIV02', 'Livro de Javascript', 29.0),
    new Produto('LIV03', 'Livro de Python', 29.0)
  ]

  obterTodos(): Produto[] {
    return this.produtos
  }

  obterUm(id: number): Produto {
    return this.produtos[0]
  }

  criar(produto: Produto) {
    this.produtos.push(produto)
  }

  alterar(produto: Produto): Produto {
    return produto
  }

  apagar(id: number) {
    this.produtos.pop()
  }
}
