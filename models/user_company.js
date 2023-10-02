const mongoose = require('mongoose')
const { type } = require('os')

const userCompanySchema = mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    addres:{
        zip_code:{
            type:String
        },
        city:{
            type:String
        },
        municipality:{
            type:String
        },
        country:{
            type:String
        }
    },
    pets:{
        type:Array,
        default:[]
    },
    work:
    {
        id_work:{
            type:String,
        },
        job:{
            type:String
        },
        company:{
            id_company:{
                type:String
            },
            name_company:{
                type:String
            }
        }
    }
})
const user_company = mongoose.model("user_company", userCompanySchema)
module.exports = user_company