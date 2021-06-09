//Dependencies
import express, { Application, Request, Response, NextFunction } from 'express';
import path from 'path';
const app: Application = express();
const func = require('./simple/func');

//Middleware
//Static public folder
app.use(express.static(path.join(__dirname, '/client/public')));
app.use(express.static("public"));

//Express Routes
app.get('/api/func', (req: Request, res: Response, next: NextFunction) => {
    const f = "number is: " + func(2, 3);
    console.log(f);
    res.send(f);

});
app.get('/api/customers', (req: Request, res: Response, next: NextFunction) => {
    const customers: Object = [
        { id: 1, first: 'john', last: 'doe' },
        { id: 2, first: 'jane', last: 'doe' },
        { id: 3, first: 'bob', last: 'jones' }
    ];
     res.send(customers);
});

//Start the Server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});