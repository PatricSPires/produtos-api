import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { LivrosController } from './livro.controller'
import { LivrosServices } from './livro.service'

@Module({
  imports: [],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosServices]
})
export class AppModule {}
