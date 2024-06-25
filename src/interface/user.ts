export interface IGeolocation {
    lat: string;
    long: string;
}

export interface IAddress {
    city: string;
    street: string;
    number: number;
    zipcode: string;
    geolocation: IGeolocation;
}

export interface IName {
    firstname: string;
    lastname: string;
}

export interface IUser {
    email: string;
    username: string;
    password: string;
    name: IName;
    address: IAddress;
    phone: string;
}
export interface Itoken
{
    token: string;
}