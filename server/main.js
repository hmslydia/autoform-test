import { Meteor } from 'meteor/meteor';
//import { People } from '../both/tasks-api.js';





Meteor.startup(() => {
  if (Items.find().count() == 0 ){
    data = [
      {
        name: "a",
        tags: "x,y,z",
      },
      {
        name: "b",
        tags: "1,2,3",
      },
      {
        name: "c",
        tags: "aa,bb,cc",
      }
      
    ]
    data.forEach(item => Items.insert(item));
  }
  
  // if the Links collection is empty
  /*
  if (Tasks.find().count() === 0) {
    const data = [
      {
        title: 'Do the Tutorial',
        author: 'me',
        copies: 0,
        lastCheckedOut: new Date(),
        summary: "http://guide.meteor.com"
      },
      {
        title: 'Follow the Guide',
        author: 'me',
        copies: 0,
        lastCheckedOut: new Date(),
        summary: "http://guide.meteor.com"
      },
      {
        title: 'Read the Docs',
        author: 'me',
        copies: 0,
        lastCheckedOut: new Date(),
        summary: "https://forums.meteor.com"
      },
    ];

    data.forEach(task => Tasks.insert(task));
  }
  */
});

