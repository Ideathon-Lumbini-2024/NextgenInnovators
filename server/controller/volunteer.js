const { CLIENT_RENEG_LIMIT } = require("tls");
const VOLUNTEER = require("../model/volunteer")
exports.getVolunteerController = async(req,res)=>{
try {
    const showVolunteer = await VOLUNTEER.getVolunteers();
    
} catch (error) {
 console.log("error occurs")
}}