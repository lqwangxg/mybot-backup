"use strict";
const redis = require('redis');
require('dotenv').config();

module.exports = class RedisService {
  constructor(){
    this.client = redis.createClient(process.env.redis_port, process.env.redis_host);
  }
  incr(key, callback){
    this.client.incr(key, callback);
  }
  get(key, callback) {
    this.client.get(key,callback);
  }
  
  set(key, value, callback) {
    this.client.set(key, value,  (error, resp)=>{
      if(error){
        throw error;
      }
      if(callback){
        callback(error, resp);
      }
    });
  };
    
  //设置值，同时设定过期时间
  setEx(key, value, timeout, callback) {
    this.set(key, value, callback);
    this.client.expire(key, timeout);
  };
  
  test(key, value){
    if(!key){
      key = "name";
    }
    if(!value){
      value = 1;
    }

    this.setEx(key, value, 30, function(err, res) {
        if(err) {
            throw err;
        }
        console.log(`test setEx処理： ${key}=${value}`);
    });

    this.get(key, function(err, res) {
        if(err) {
            throw err;
        }
        console.log(`test get処理： ${key}=${res}`);
    });
  };
}
