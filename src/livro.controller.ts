import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Livro } from './livro.model'
import { LivrosServices } from './livro.service'

@Controller('livros')
export class LivrosController {
  constructor(private LivrosServices: LivrosServices) {}

  @Get()
  obterTodos(): Livro[] {
    return this.LivrosServices.obterTodos()
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.LivrosServices.obterUm(params.id)
  }

  @Post()
  criar(@Body() livro: Livro) {
    this.LivrosServices.criar(livro)
  }

  @Put()
  atualizar(@Body() livro: Livro): Livro {
    return this.LivrosServices.alterar(livro)
  }

  @Delete(':id')
  apagar(@Param() params) {
    return this.LivrosServices.apagar(params.id)
  }
}
