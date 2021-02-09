import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common'
import { Produto } from './produto.model'
import { ProdutosServices } from './produtos.service'

@Controller('produtos')
export class ProdutosController {
  constructor(private produtoService: ProdutosServices) {}

  @Get()
  obterTodos(): Produto[] {
    return this.produtoService.obterTodos()
  }

  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtoService.obterUm(params.id)
  }

  @Post()
  criar(@Body() produto: Produto) {
    this.produtoService.criar(produto)
  }

  @Put()
  atualizar(@Body() produto: Produto): Produto {
    return this.produtoService.alterar(produto)
  }

  @Delete(':id')
  apagar(@Param() params) {
    return this.produtoService.apagar(params.id)
  }
}
