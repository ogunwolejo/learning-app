import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

import IAppRouter from './routes';


class App {
    public app: express.Application = express();
    private appRouter:IAppRouter = new IAppRouter()

    constructor() {
        this.initialize()
        this.router()
    }

    private initialize = () => {
        this.app.use(cors({ methods: "*", origin:'*' }))
        this.app.use(helmet())
        this.app.use(express.json())
        this.app.use(express.urlencoded({ extended: true }))
    }

    private router = () => this.app.use('/v1', this.appRouter.router)

    public runServer = () => {
        //@ts-ignore
        this.app.listen(+process.env.PORT, "localhost", (error:any) => error ? console.log(`cannot connect to the port ${process.env.PORT}`) : console.log("connected to server"))
    }
}

export default App;