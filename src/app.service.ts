import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getBsm(): string {
    return 'Responsabilida Pessoal, Trabalho em equipe, Comunicação, Persistência, Proatividade, Atenção aos detalhes, Orientação ao futuro e Mentalidade de crescimento'
  }
  getObjetivos(): string {
    return 'NestJS'
  }
}
