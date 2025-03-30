import { describe, it, expect } from 'bun:test';
import { User } from './user.model';

const data = {
    name: 'John Doe',
    email: 'john@doe.com',
    password: 'password123',
}

describe('User Model', () => {
    it('should create a user instance with valid properties', () => {
        const user = User.create(
            data.name,
            data.email,
            data.password
        );;

        expect(user).toBeDefined();
        expect(user.name).toBe(data.name);
        expect(user.email).toBe(data.email);
    });

    it('should update user properties correctly', () => {
        const user = User.create(
            data.name,
            data.email,
            data.password
        )
        user.name = 'Jane Doe';
        user.email = 'jane.doe@example.com';

        expect(user.name).toBe('Jane Doe');
        expect(user.email).toBe('jane.doe@example.com');
    });

    it('should convert user to JSON and back', () => {
        const user = User.create(
            data.name,
            data.email,
            data.password
        );

        const json = JSON.stringify(user);
        const parsedUser = User.fromJson(JSON.parse(json));

        expect(parsedUser).toBeDefined();
        expect(parsedUser.name).toBe(data.name);
        expect(parsedUser.email).toBe(data.email);
    });
});