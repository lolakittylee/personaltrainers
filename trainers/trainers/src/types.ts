export type Customer = {
    // id: string;
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

export type Trainings = {
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

