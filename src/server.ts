import { dirname, join } from 'path';
import { generateKey } from 'crypto';

import dotenv from 'dotenv'
import { connect } from 'mongoose'

import App from "./app";
import { ENV } from './interface/env.interface';

const APP_DIR:string = dirname(__dirname);

class Server extends App {
    constructor() {
        //setting the environment variables to use
        if(process.env.NODE_ENV == ENV.DEV ) {
            dotenv.config({
                path:join(APP_DIR, '.env'),
                debug:true,
                override:false,
                encoding:'utf8'
            })
        } 
        else if(process.env.NODE_ENV == ENV.PROD) {
            null
        }
        else {
            dotenv.config({
                path:join(APP_DIR, '.env.test'),
                debug:true,
                override:false,
                encoding:'utf8'
            })
        }
        super()
        this.runDatabase()
        this.runServer()
    }

    private async runDatabase() {
        try {
            //@ts-ignore
            await connect(process.env.MONGO_URL, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            })

            console.log("database conneted")

        } catch (e:any) {
            console.log("error running the database")
        }
    }
}

new Server();


//pm2 start ./build/src/server.js -i max