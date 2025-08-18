export type State = "idle" | "loading" | "success" | "error"; // Union

export type SuccessStatusCode = 200 | 201 | 204;

export type PathErrorStatusCode = 301 | 302;

export type RequestErrorStatusCode = 400 | 401 | 403 | 404 | 409 | 422;

export type ResponseErrorStatusCode = 500 | 501 | 502;

export type StatusCode = SuccessStatusCode | PathErrorStatusCode | RequestErrorStatusCode | ResponseErrorStatusCode;

type User = {
    username: string;
    email: string;
    password: string;
}

type Role = "admin" | "superadmin";

type Admin = User & {role: Role};

const admin: Admin = {
    username: "admin"
}
