import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { ProdutosController } from './livro.controller'
import { LivrossServices } from './livro.service'

@Module({
  imports: [],
  controllers: [AppController, ProdutosController],
  providers: [AppService, LivrossServices]
})
export class AppModule {}
