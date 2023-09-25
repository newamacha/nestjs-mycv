import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/app")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get() // method decorator 
  getRootRoute(){
      return {
          "name" : "Sanam Maharjan",
          "dob" : "11/11/2057",
          "contact" : "9861241220",
          "address" : {
              "province" : "Bagmati",
              street: "Thecho-Bungamati"
          }
      }
  }

  @Get("/food")
  getMyFavouriteFood(){
    return{
      food : ["momo","pizza"]
    }
  }

  @Get("/one")
  getByeThere(): string {
    return this.appService.getByeThere();
  }
}
