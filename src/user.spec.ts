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


    it('should update user details correctly', () => {
        const user = User.create(
            data.name,
            data.email,
            data.password
        );

        user.updateDetails(
            'Jane Doe',
            'jane@email.com'
        )

        expect(user.name).toBe('Jane Doe');
        expect(user.email).toBe('jane@email.com')
    })

    it('should correctly serialize user to JSON string', () => {
        const user = User.create(
            data.name,
            data.email,
            data.password
        );
        
        const jsonString = user.toJson();
        const parsed = JSON.parse(jsonString);
        
        expect(parsed).toEqual({
            id: user.id,
            name: user.name,
            email: user.email,
            password: user.password,
            createdAt: user.createdAt.toISOString(),
            updatedAt: user.updatedAt.toISOString()
        });
    });

    // You can also add a more comprehensive test combining toJson and fromJson
    it('should round-trip correctly through toJson and fromJson', () => {
        const originalUser = User.create(
            data.name,
            data.email,
            data.password
        );
        
        const jsonString = originalUser.toJson();
        const restoredUser = User.fromJson(JSON.parse(jsonString));
        
        expect(restoredUser.id).toBe(originalUser.id);
        expect(restoredUser.name).toBe(originalUser.name);
        expect(restoredUser.email).toBe(originalUser.email);
        expect(restoredUser.password).toBe(originalUser.password);
        expect(restoredUser.createdAt.getTime()).toBe(originalUser.createdAt.getTime());
        expect(restoredUser.updatedAt.getTime()).toBe(originalUser.updatedAt.getTime());
    });

});