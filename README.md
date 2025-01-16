# MongoDB $inc operator error with string value
This example demonstrates an uncommon error in MongoDB when using the `$inc` operator with a string value instead of a number.  The `$inc` operator is designed to increment a numeric field by a specified value.  Passing a string results in the update operation failing to increment the field correctly, and the database may not be updated as expected. This example illustrates the problem and provides a solution.

## Bug
The bug lies in the use of the string '1' instead of the number 1 in the `$inc` operator. This causes the update operation to fail to increment the age field.

## Solution
The solution is to provide a numeric value (either an integer or a float) to the `$inc` operator to properly increment the specified field.