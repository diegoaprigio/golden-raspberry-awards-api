import express, { Application } from 'express';
import helmet from 'helmet';

class App {

    private app: Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }
    
    config() {
        this.app.use(helmet());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended: true }));
    }

    routes() {
        this.app.use('/', (req: any, res: any) => {
            return res.json({ ok: true });
        })
    }

    listen(port: Number){
        this.app.listen(port, () => console.log('Server is running on port: ', port));
    }

}

export {App};