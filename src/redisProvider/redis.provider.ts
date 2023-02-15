import { Injectable } from '@nestjs/common';
import { ConfigType } from '@nestjs/config';

import { createClient } from 'redis';
import config from 'src/config';
// import config from '../config';

@Injectable()
export class RedisProvider {
  private configuration: ConfigType<typeof config> = config();
  private RandomNumber: number = Math.floor(Math.random() * 4); // GET RANDOM number from 0 to 3
  private redisUrls: string[] = [this.configuration.redis.url2];

  private readonly redisClient = createClient({
    url: this.redisUrls[this.RandomNumber],
  });

  constructor() {
    // this.redisClient.connect();
    // this.redisClient.on('error', (err) => {
    //   console.log('Redis Client Error', err);
    //   this.redisClient.disconnect();
    // });
    // this.redisClient.on('connect', () => {
    //   console.log('Redis Client Connected to: ' + this.RandomNumber);
    // });
  }

  async get(key: string) {
    // const redisValue = await this.redisClient.get(key);
    // return JSON.parse(redisValue);
    false;
  }

  async update(key: string, value: any) {
    // const cacheTimeOut = parseInt(this.configuration.redis.cacheTimeOut); // TODO: GET DATA FROM CONFIG
    // const parsedRedisValue = JSON.stringify(value);
    // await this.redisClient.setEx(key, cacheTimeOut, parsedRedisValue);
    // console.log('Redis updated');
    return true;
  }

  async delete(key: string) {
    // await this.redisClient.del(key);
    // console.log('Redis deleted');
    return true;
  }

  async getKeys(pattern: string) {
    // const keys = await this.redisClient.keys(pattern);
    // return keys;
    return [];
  }

  async getAllKeys() {
    // const keys = await this.redisClient.keys('*');
    // return keys;
    return [];
  }

  async getKeysInclude(pattern: string) {
    // const keys = [];
    // const redisKeys = await this.getAllKeys();
    // redisKeys.forEach((key) => {
    //   if (key.includes(pattern)) {
    //     keys.push(key);
    //   }
    // });

    // return keys;
    return [];
  }

  // TODO: DELETE WITH REGEX
}
