import { Injectable } from '@nestjs/common';

import { PrismaService } from 'src/prisma.service';
import { Filme, Prisma } from '@prisma/client';

@Injectable()
export class FilmesService {
  constructor(private prisma: PrismaService) {}

  async filme(
    filmeWhereUniqueInput: Prisma.FilmeWhereUniqueInput,
  ): Promise<Filme | null> {
    return this.prisma.filme.findUnique({
      where: filmeWhereUniqueInput,
    });
  }

  async filmes(): Promise<Filme[]> {
    return this.prisma.filme.findMany();
  }

  async updateFilme(params: {
    where: Prisma.FilmeWhereUniqueInput;
    data: Prisma.FilmeUpdateInput;
  }): Promise<Filme> {
    const { where, data } = params;
    return this.prisma.filme.update({
      data,
      where,
    });
  }

  async createFilme(data: Prisma.FilmeCreateInput): Promise<Filme> {
    return this.prisma.filme.create({ data });
  }

  async deleteFilme(where: Prisma.FilmeWhereUniqueInput): Promise<Filme> {
    return this.prisma.filme.delete({ where });
  }
}
