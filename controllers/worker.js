const workerModel = require('../models/worker')


const createWorker = async (req, res) => {
    try {
        const workerData = req.body
        const newWorker = new workerModel({...workerData})
        console.log(newWorker)
        await newWorker.save();
        res.status(201).json(newWorker)


    } catch (error) {
        console.log(error)
        res.status(400).json({message:error.message})
    }
}

const getAllWorkers = async(req,res)=>{
    try {
    const allWokers = await workerModel.find();
    res.status(200).json(allWokers)
    
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const getWorkerById = async(req,res)=>{
    try {
        const {id} = req.params;
        const response = await workerModel.findById(id);
        console.log(response)
        res.status(200).json(response)
    } catch (error) {
        res.status(400).json({message:error.message})
    }
}


const updateWorkerById = async(req,res)=>{
    try {
        const {id} = req.params;
        console.log(id)
        console.log(req.params.id)
        const workerDataEdit = req.body;
        console.log(workerDataEdit)
        const response = await workerModel.findByIdAndUpdate(id,workerDataEdit)
        res.status(200).json(response)
        console.log(workerDataEdit)

    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}

const deleteWorkerById = async(req,res)=>{
    try {
        const {id} = req.params;
        const response = await workerModel.findByIdAndDelete(id);
        if (response){
            res.status(200).json({message:"Usuario eliminado exitosamente!"})
        }else{
            res.status(400).json({message:"Usuario repetido"})

        }


    } catch (error) {
        res.status(404).json({message:error.message})
        
    }
}











module.exports = {
    createWorker,
    getAllWorkers,
    getWorkerById,
    updateWorkerById,
    deleteWorkerById
}