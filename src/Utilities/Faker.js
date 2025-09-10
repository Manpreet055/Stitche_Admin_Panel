// kicker.js
import { faker } from "@faker-js/faker";

// helpers
function randomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function randomDate(start, end) {
  return new Date(
    start.getTime() + Math.random() * (end.getTime() - start.getTime())
  );
}

// fixed data
const statuses = ["active", "suspended", "pending"];
const roles = ["user", "admin", "moderator"];
// const keywords = ["React", "Tailwind", "Firebase", "Admin", "Ecommerce"];

// main generator
function generateUsers(count = 10) {
  const users = [];

  for (let i = 0; i < count; i++) {
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();

    users.push({
      id: faker.string.uuid(),
      username: firstName + lastName,
      email: faker.internet.email({ firstName, lastName }),
      phone: faker.phone.number("+971-#########"), // UAE-style unique number
      status: randomItem(statuses),
      role: randomItem(roles),
      dateJoined: randomDate(new Date(2020, 0, 1), new Date())
        .toISOString().slice(0,10),
      lastLogin: randomDate(new Date(2023, 0, 1), new Date()).toISOString().slice(0,10),
      verified: faker.datatype.boolean(),
      orders: faker.number.int({ min: 0, max: 50 }),
      address: {
        city: faker.location.city(),
        country: faker.location.country(),
      },
      // keywords: Array.from(
      //   { length: faker.number.int({ min: 1, max: 3 }) },
      //   () => randomItem(keywords)
      // ),
    });
  }

  return users;
}

// Example usage
const mockUsers = generateUsers(100);
console.log(mockUsers);

export default generateUsers;
