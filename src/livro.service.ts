import { Injectable } from '@nestjs/common'
import { Livro } from './livro.model'

@Injectable()
export class LivrossServices {
  produtos: Livro[] = [
    new Livro('LIV01', 'Livro de Java', 29.0),
    new Livro('LIV02', 'Livro de Javascript', 29.0),
    new Livro('LIV03', 'Livro de Python', 29.0)
  ]

  obterTodos(): Livro[] {
    return this.produtos
  }

  obterUm(id: number): Livro {
    return this.produtos[0]
  }

  criar(produto: Livro) {
    this.produtos.push(produto)
  }

  alterar(produto: Livro): Livro {
    return produto
  }

  apagar(id: number) {
    this.produtos.pop()
  }
}
