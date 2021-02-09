import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Livro } from './livro.model'
import { LivrossServices } from './livro.service'

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: LivrossServices) {}

  @Get()
  obterTodos(): Livro[] {
    return this.produtoService.obterTodos()
  }

  @Get(':id')
  obterUm(@Param() params): Livro {
    return this.produtoService.obterUm(params.id)
  }

  @Post()
  criar(@Body() produto: Livro) {
    this.produtoService.criar(produto)
  }

  @Put()
  atualizar(@Body() produto: Livro): Livro {
    return this.produtoService.alterar(produto)
  }

  @Delete(':id')
  apagar(@Param() params) {
    return this.produtoService.apagar(params.id)
  }
}
