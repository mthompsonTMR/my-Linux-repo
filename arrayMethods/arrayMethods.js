
const users = [
	{firstName: "Alice", lastName: "Johnson", points: 120},
	{firstName: "Bob", lastName: "Smith", points: 99},
	{firstName: "Charlie", lastName: "Brown", points: 180}
];

const arrayMap = users.map(function(user) {
  return {fullname: `${user.firstName} ${user.lastName}`, 
    membershipStatus: user.points > 100 ? "premium" : "standard"
    };
  });
  console.log(arrayMap);





