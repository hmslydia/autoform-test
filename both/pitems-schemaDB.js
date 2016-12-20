Schemas.Item = new SimpleSchema({
  name: {
    type: String,
    index: 1,
    unique: true
  },
  tags: {
    type: String,
    optional: true
  },
  is_in_set: {
    type: String,
    allowedValues: ["yes", "maybe", "no"]
  },
});


Items = Collections.Items = new Mongo.Collection("Items");
Items.attachSchema(Schemas.Item);




if (Meteor.isServer) {

  Meteor.publish(null, function () {
    return Items.find();
  });

  Items.allow({
    update: function () {
      return true;
    }
  });

} else if (Meteor.isClient) {
/*
  Template["update-each"].helpers({
    items: function () {
      return Items.find({}, {sort: {name: 1}});
    },
    makeUniqueID: function () {
      return "update-each-" + this._id;
    }
  });
*/
}