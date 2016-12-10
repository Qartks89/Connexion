module.exports = function () {
    var mongoose = require('mongoose');
    var postSchema = mongoose.Schema({
        index       : { type : Number},
        creatorId   : mongoose.Schema.Types.ObjectId,
        postName    : String,
        isOpen      : Boolean,
        organizer   : String,
        email       : String,
        phone       : String,
        address     : String,
        description : String,
        dateCreated : { type : Date, default : Date.now()},
        dateOfEvent : Date,
        latitude    : String,
        longitude   : String,
        pictures    : [
                {
                    type : String
                }
            ],
        thumbnails    : [
            {
                type : String
            }
        ],
        tags        : [
                {
                type : String
                }
            ],
        going     : [
            {
                type : mongoose.Schema.Types.ObjectId,
                ref : "user"
            }
        ],
        noOfPeopleInvited       : Number,
        noOfPeopleGoing         : Number,
        noOfPeopleTalkingAbout  : Number,
        rating                  : Number,
        comments                :  [{
            userId: String,
            profilePicture: String,
            text: String,
            dateCreated : { type : Date, default : Date.now()}
        }]
    });
    return postSchema;
};