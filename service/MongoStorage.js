"use strict";

module.exports = function(controller) {
    if (!controller.storage){
      return;
    }

    var tables = ['histories', 'teams', 'channels', 'users', 'counters'];
    tables.forEach(function(zone) {
      controller.storage[zone] = getStorage(controller.storage.db, zone);
    });
    
};

/**
 * Creates a storage object for a given "zone", i.e, teams, channels, or users
 *
 * @param {Object} db A reference to the MongoDB instance
 * @param {String} zone The table to query in the database
 * @returns {{get: get, save: save, all: all, find: find}}
 */
function getStorage(db, zone) {
    var table = db.collection(zone);
    
    return {
      get: function(id, cb) {
          return table.findOne({id: id}, cb);
      },
      save: function(filter, data, cb) {
        return table.findOneAndUpdate(filter, {$set: data},{
          upsert: true,
          returnNewDocument: true
        }, cb);      
      },
      // upsert: function(filter, data, cb) {
      //   return table.findOneAndUpdate(filter, {$set: data}, {
      //     upsert: true,
      //     returnNewDocument: true
      //   }, cb);        
      // },
      all: function(cb) {
          return table.find({}, cb);
      },
      find: function(filter, cb) {
          return table.find(filter, cb);
      },
      seq:function(keyname, cb){
        return table.findOneAndUpdate(
          { key: keyname},
          { $inc: {seq:1} },
          {
            upsert: true
          }, cb);
      },
      max_id:function() {
        //db.collection.find().sort({age:-1}).limit(1)
        return table.find().sort({id: -1}).limit(1);
      }
    };
}
