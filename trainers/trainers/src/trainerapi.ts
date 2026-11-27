export function getCustomers() {
    return fetch (import.meta.env.VITE_API_URL + "/customers")
        .then(response => {
            if(!response.ok) {
                throw new Error("Error when fetching customers.")
            }

            return response.json();
        })
}

export function getCustomerInfos() {
    return fetch (`${import.meta.env.VITE_API_URL}/customers/${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error("Error when fetching customer details.")
            }

            return response.json();
        })
}


export function getTrainings(){
    return fetch(import.meta.env.VITE_API_URL + "/gettrainings")
        .then(response => {
            if(!response.ok){
                throw new Error("Error when fetching trainings.")
            }

            return response.json();
        })
}

export function getCustomerById(id: number | string) {
    return fetch(`${import.meta.env.VITE_API_URL}/customers/${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Error when fetching customer data");
            return response.json();
        });
}

export function getTrainingById(id: number | string) {
    return fetch(`${import.meta.env.VITE_API_URL}/trainings/${id}`)
        .then(response => {
            if (!response.ok) throw new Error("Error when fetching training data");
            return response.json();
        });
}