import express from "express"
import uniqid from "uniqid"
import { getMovies, writeMovies } from "../lib/fs-tools.js"

const moviesRouter =  express.Router()

moviesRouter.post = ("/", async (req, res, next) => {
    res.send("i can read it")
} )  

moviesRouter.get = ("/", async (req, res, next) => {
    res.send("i can read it")
} ) 

moviesRouter.get = ("/:id", async (req, res, next) => {
    res.send("i can read it")
} ) 

moviesRouter.put = ("/:id", async (req, res, next) => {
    res.send("i can read it")
} ) 

moviesRouter.delete = ("/:id", async (req, res, next) => {
    res.send("i can read it")
} ) 

export default moviesRouter

