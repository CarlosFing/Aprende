const express = require('express')
const routes = express.Router()

routes.get('/api', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM materia', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

routes.get('/act1mat', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM respuesta WHERE id_pregunta = 1;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

routes.get('/act2mat', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM respuesta WHERE id_pregunta = 2;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

routes.get('/act3mat', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM respuesta WHERE id_pregunta = 3;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})
routes.get('/act4mat', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM respuesta WHERE id_pregunta = 4;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})
routes.get('/act5mat', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM respuesta WHERE id_pregunta = 5;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})
routes.get('/act1esp', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM respuesta WHERE id_pregunta = 6;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})
routes.get('/act2esp', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM respuesta WHERE id_pregunta = 7;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})
routes.get('/act3esp', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)

        conn.query('SELECT * FROM respuesta WHERE id_pregunta = 8;', (err, rows)=>{
            if(err) return res.send(err)
            
            res.json(rows)
        })
    })
})

module.exports = routes