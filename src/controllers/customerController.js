exports.list = (req,res)=>{
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer',(err,customers)=>{
            if (err){
                res.json(err);
            }
            
            res.render('customers',{
                data:customers
            })
        })
    })
}

exports.save = (req,res)=>{
    req.getConnection((err,conn)=>{

        const data = req.body
        conn.query('INSERT INTO customer set ? ',[data],(err,customer)=>{
            res.redirect('/')
        })
    })
}

exports.edit = (req,res)=>{
    const id = req.params.id
    req.getConnection((err,conn)=>{
        conn.query('SELECT * FROM customer WHERE id = ?',[id],(err,customer)=>{
            res.render('customer_edit',{
                data:customer[0]
            })
        })
    })
}

exports.update = (req,res)=>{
    const id = req.params.id
    const newCustomer = req.body
    req.getConnection((err,conn)=>{
        conn.query('UPDATE customer set ? WHERE id = ?',[newCustomer,id],(err,customer)=>{
            res.redirect('/')
        })
    })
}


exports.delete = (req,res)=>{
    const id = req.params.id
    req.getConnection((err,conn)=>{
        conn.query('DELETE FROM customer WHERE id = ?',[id],(err,customer)=>{
            res.redirect('/')
        })
    })
}