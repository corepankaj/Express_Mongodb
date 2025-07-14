const mongoose = require("mongoose");
const studentSceama = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    phone:{
        type:Number,
        require: true
    }
})
const Student = mongoose.model("Studentinfo", studentSceama);

  // 4. Insert a test document
    /*Student.create({
      name: "Pankaj Ranjan Sinha",
      phone: "9654066919"
    }).then(() => {
      console.log("✅ Document inserted");
    }).catch(err => {
      console.error("Insert error:", err);
    });*/

module.exports = Student;