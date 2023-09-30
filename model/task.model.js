const mongoose = require("mongoose");

const { Schema } = mongoose;
// task_name, user_id, createdBy,updated_by, status
const taskSchema = new Schema({
    uid : {
        type : String,
        required : true
    },
    task_name : {
        type : String,
        required:true
    },
    status : {
        type : String,
        default:"created",
        enum : ["completed","pending","inprogress","created"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    }
});

const task = mongoose.model("Task",taskSchema);

module.exports = task;