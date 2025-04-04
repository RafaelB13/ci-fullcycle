export class User {
    id: string;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;

    constructor(
        id: string,
        name: string,
        email: string,
        password: string,
        createdAt: Date,
        updatedAt: Date
    ) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    static create(
        name: string,
        email: string,
        password: string
    ): User {
        const id = crypto.randomUUID();
        const now = new Date();
        return new User(id, name, email, password, now, now);
    }
}
