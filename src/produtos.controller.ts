import { Controller, Get, Param } from '@nestjs/common';
import { get } from 'http';

@Controller('produtos')
export class ProdutosController {

  @Get()
  obterProdutos(): string[] {

    return [
      'A',
      'B',
      'C'];
  }

  @Get(':id')
  obterProduto(@Param() params): string {
    return `A product id ${params.id}`
  }

}
