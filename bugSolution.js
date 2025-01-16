```javascript
//Correct usage of $inc operator
db.collection('myCollection').updateOne({name: "John"}, {$inc: {age: 1}});
```