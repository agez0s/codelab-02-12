import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { FilmesService } from './filmes.service';
// import { CreateFilmeDto } from './dto/create-filme.dto';
// import { UpdateFilmeDto } from './dto/update-filme.dto';
import { Filme as FilmeModel } from '@prisma/client';
// import { Filme } from './entities/filme.entity';

@Controller('filmes')
export class FilmesController {
  constructor(private readonly filmesService: FilmesService) {}

  @Get()
  async getAllFilmes(): Promise<FilmeModel[]> {
    return this.filmesService.filmes();
  }

  @Get(':id')
  async filme(@Param('id') id: string): Promise<FilmeModel> {
    return await this.filmesService.filme({ id: Number(id) });
  }

  @Post('/add')
  async createFilme(
    @Body() filmeData: { nome: string; ano: number; genero: string },
  ): Promise<FilmeModel> {
    return this.filmesService.createFilme(filmeData);
  }

  @Delete(':id')
  async deleteFilme(@Param('id') id: string): Promise<FilmeModel> {
    return this.filmesService.deleteFilme({ id: Number(id) });
  }

  @Put(':id')
  async updateFilme(
    @Param('id') id: string,
    @Body() filmeData: { nome: string; ano: number; genero: string },
  ): Promise<FilmeModel> {
    return this.filmesService.updateFilme({
      where: { id: Number(id) },
      data: filmeData,
    });
  }
}
