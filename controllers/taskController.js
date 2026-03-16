const Task = require("../models/Task")

exports.createTask = async (req,res)=>{

try{

const task = await Task.create({
...req.body,
createdBy:req.user.id
})

res.status(201).json(task)

}catch(error){

res.status(500).json({message:error.message})

}

}

exports.getTasks = async (req,res)=>{

try{

const page = parseInt(req.query.page) || 1
const limit = parseInt(req.query.limit) || 10
const search = req.query.search || ""
const status = req.query.status

const filter = {}

if(req.user.role !== "admin"){
filter.createdBy = req.user.id
}

if(status){
filter.status = status
}

if(search){
filter.title = {
$regex:search,
$options:"i"
}
}

const tasks = await Task.find(filter)
.skip((page-1)*limit)
.limit(limit)

const total = await Task.countDocuments(filter)

res.json({
page,
limit,
total,
tasks
})

}catch(error){

res.status(500).json({
message:error.message
})

}

}

exports.getTaskById = async (req,res)=>{

try{

const task = await Task.findById(req.params.id)

if(!task){
return res.status(404).json({
message:"Task not found"
})
}

res.json(task)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

exports.updateTask = async (req,res)=>{

try{

const task = await Task.findById(req.params.id)

if(!task){
return res.status(404).json({
message:"Task not found"
})
}

if(task.createdBy.toString() !== req.user.id && req.user.role !== "admin"){
return res.status(403).json({
message:"Not authorized"
})
}

const updated = await Task.findByIdAndUpdate(
req.params.id,
req.body,
{new:true}
)

res.json(updated)

}catch(error){

res.status(500).json({
message:error.message
})

}

}

exports.deleteTask = async (req,res)=>{

try{

const task = await Task.findById(req.params.id)

if(task.createdBy.toString() !== req.user.id && req.user.role !== "admin"){
return res.status(403).json({
message:"Not authorized"
})
}

await Task.findByIdAndDelete(req.params.id)

res.json({
message:"Task deleted"
})

}catch(error){

res.status(500).json({
message:error.message
})

}

}