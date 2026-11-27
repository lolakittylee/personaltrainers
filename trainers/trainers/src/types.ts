export type Customer = {
    id: number;
    firstname: string;
    lastname: string;
    streetaddress: string;
    postcode: string;
    city: string;
    email: string;
    phone: string;
    _links: {
        self: {
            href: string
        },
        customers: {
            href: string
        },
        trainings: {
            href: string
        }
    }
}

export type Training = {
    id:number;
    date: Date;
    duration: number;
    activity: string;
    _links: {
        self: {
            href: string
        },
        training: {
            href: string
        },
        customers: {
            href: string
        }
    }
}

