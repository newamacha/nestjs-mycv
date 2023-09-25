import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getByeThere(): string {
    return 'Hello bruhh!';
  }
}
