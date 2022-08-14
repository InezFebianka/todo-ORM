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
        let error = req.query.error == 'true'
        res.render('addTask', {error})
    }

    static create(req, res){
        let body = {
            content: req.body.content,
            status: req.body.status,
            createdAt : new Date(),
            updatedAt : new Date()
        }

        let error = []
        if (!body.content) error.push('Content is required')
        if (!body.status) error.push('Status must be selected')

        if(error.length !== 0){
            res.redirect(`addTask?error=${error}`)
        } else {
            Task.create(body)
                .then(result=>{
                    res.redirect('/')
                })
                .catch(err=>{
                    res.send(err)
                })
        }
        
    }

    static toComplete(req, res){
        let targetedId = req.params.id
        Task.update({status: 'complete'}, {
            where: {
                id: targetedId
            }
        })
            .then(result=>{
                res.redirect('/')
            })
            .catch(err=>{
                res.send(err)
            })
    }

    static toUncomplete(req, res){
        let targetedId = req.params.id
        Task.update({status: 'uncomplete'}, {
            where: {
                id: targetedId
            }
        })
            .then(result=>{
                res.redirect('/')
            })
            .catch(err=>{
                res.send(err)
            })
    }
    
    static deleteTask(req, res){
        res.send('masuk')
    }
}

module.exports = Controller