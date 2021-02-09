import { Injectable } from '@nestjs/common'
import { Livro } from './livro.model'

@Injectable()
export class LivrosServices {
  livros: Livro[] = [
    new Livro('LIV01', 'Livro de Java', 29.0),
    new Livro('LIV02', 'Livro de Javascript', 29.0),
    new Livro('LIV03', 'Livro de Python', 29.0)
  ]

  obterTodos(): Livro[] {
    return this.livros
  }

  obterUm(id: number): Livro {
    return this.livros[0]
  }

  criar(livro: Livro) {
    this.livros.push(livro)
  }

  alterar(livro: Livro): Livro {
    return livro
  }

  apagar(id: number) {
    this.livros.pop()
  }
}
