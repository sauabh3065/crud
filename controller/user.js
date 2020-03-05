
const express=require("express");
const mongoose=require("mongoose");
const user=require("../models/user");
const bcrypt=require("bcryptjs");

module.exports.user_details= (req,res)=>{
    console.log("hi there");
    user.find((err,docs)=>{
        if(!err){
            console.log("get api");
            res.send(docs)}
        else{console.log("error in retriving data")}
    });
};
exports.user_create = (req,res)=>{
    console.log("enter in create post")
   
    res.json({ msg: "new user created",});
    console.log(req.body);

    let users = new user({
        Name:req.body.Name,
        Email:req.body.Email,
        Phone:req.body.Phone,
        password:req.body.password,
        Device_token:req.body.Device_token,
        Access_token:req.body.Access_token,
        Is_verify:req.body.Is_verify,
        Location:req.body.Location

    });
    bcrypt.genSalt(10,(err,salt)=>{
        bcrypt.hash(users.password,salt,(err,hash) => {
            users.password = hash;
            users.save()
            .then(() => console.log('Successsss'))
            .catch((err) => {
                console.log('ERRorr- ', err);
        })
    })

    console.log(req.body);
   
    });
};
module.exports.user_update=(req,res)=>{
    user.findByIdAndUpdate(req.params.id, { $set: req.body }, (err,user) => {
        if (err) return(err);
        res.send('User is  udpated.');
    });
}

module.exports.user_delete = (req, res)=> {
    user.findByIdAndRemove(req.params.id,  (err) => {
         if (err) {console.log(req.body); }

         res.send('Deleted successfully!');
    })
};

