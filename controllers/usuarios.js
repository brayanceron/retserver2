const express = require('express')

//http://localhost:8080/api/usuarios?q=hola&&nombre=brayantqm

const userGet = (req, res) => {
    const query =req.query
    res.json({
        "msj":"Get!",
        query
    })
  }
  const userPost = (req, res) => {
    const body= req.body;
    res.json({
        "msj":"Post",
        body
    })
  }

  const userPut = (req, res) => {
    const id=req.params
    res.json({
        "msj":"Put",
        id
    })
  }

  const userDelete = (req, res) => {
    //const id=req.params
    res.json({
        "msj":"Delete",
        
    })
  }

  module.exports= {
    userGet,
    userPost,
    userPut,
    userDelete
  }