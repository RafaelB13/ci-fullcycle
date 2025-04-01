import { User } from "./src/user.model";

const user = User.create(
    'John Doe',
    'john@email.com',
    'password123'
)

console.log(user);