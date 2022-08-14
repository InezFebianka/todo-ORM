const {Task} = require("../models")
class Controller {
    static index(req, res){
        Task.findAll()
            .then(result=>{
                res.render('index',{result})
            })
            .catch(err => {
                res.send(err)
            })
    }

    static form(req, res){
        res.send('masuk')
    }

    static create(req, res){
        res.send('masuk')
    }

    static toComplete(req, res){
        res.send('masuk')
    }

    static toUncomplete(req, res){
        res.send('masuk')
    }
    
    static deleteTask(req, res){
        res.send('masuk')
    }
}

module.exports = Controller