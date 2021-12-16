/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { PrismaModule } from '../plugins/prisma/prisma.module';
import { CuisinesController } from './cuisines/cuisines.controller';
import { CuisinesService } from './cuisines/cuisines.service';
import { IngredientsController } from './ingredients/ingredients.controller';
import { IngredientsService } from './ingredients/ingredients.service';
import { GaugesController } from './gauges/gauges.controller';
import { GaugesService } from './gauges/gauges.service';
import { RecipesController } from './recipes/recipes.controller';
import { RecipesService } from './recipes/recipes.service';
import { SpicesController } from './spices/spices.controller';
import { SpicesService } from './spices/spices.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from 'src/auth/auth.module';

@Module({
  imports: [PrismaModule, UsersModule, AuthModule],
  controllers: [
    CuisinesController,
    IngredientsController,
    GaugesController,
    RecipesController,
    SpicesController,
  ],
  providers: [
    CuisinesService,
    IngredientsService,
    GaugesService,
    RecipesService,
    SpicesService,
  ],
})
export class AppModule {}
