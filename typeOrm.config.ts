import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from "./src/users/users.model";
import { Post } from "./src/posts/posts.model";
import { Role } from "./src/roles/roles.model";
import { ConfigService } from "@nestjs/config";
import {$npmConfigName1677630890731} from './migrations/1677630890731-$npm_config_name'

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username:'postgres',
  password: 'postgres',
  database: 'interexy_db',
  entities: [User, Post, Role],
  migrations: [$npmConfigName1677630890731]

});
