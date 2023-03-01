import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { RolesModule } from './roles/roles.module';
import { AuthModule } from './auth/auth.module';
import { FilesModule } from './files/files.module';
import { ServeStaticModule } from "@nestjs/serve-static";
import * as path from "path";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { EventEmitterModule } from "@nestjs/event-emitter";
import { User } from "./users/users.model";
import { Role } from "./roles/roles.model";
import { Post } from "./posts/posts.model";


@Module({
  imports: [
    EventEmitterModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static')
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'postgres',
        database: 'db_migration',
        entities: [User, Post, Role],
        autoLoadEntities: true,
        // synchronize: true
      }),
    }),

    UsersModule,
    PostsModule,
    RolesModule,
    AuthModule,
    FilesModule,
  ],
  controllers: [],
  providers: [],
})
class AppModule {}
export default AppModule;

