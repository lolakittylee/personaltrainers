import { Stack, TextField, Typography } from "@mui/material";
import type { Customer } from "../types";
import { useState } from "react";



function CustomersListed() {
    const [customers, setCustomers] = useState<Customer[]>([]);

const columns: GridColDef[] = [
    {field: 'name', headeName: 'Name', width: 200},
    {field: 'details', header}
]

    return (
        <>
            <div>
                <Typography variant="h1">Personal trainer</Typography>
                <Typography variant="h4">All customer's listed below:</Typography>
                <Stack
                    direction={"row"}
                    spacing={2}
                    sx={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginTop: '20px'
                    }}>


                    <TextField
                        label="Name"
                        value={customer.name}
                        onChange={event =>
                            setNewCustomer({ ...customer, name: event.target.value })
                        }
                    />
                    <TextField
                        label="Details"
                        value={customer.details}
                        onChange={event =>
                            setNewCustomer({ ...customer, details: event.target.value })
                        }
                    />
                </Stack>
            </div>

            <div>


                <input
                    placeholder="Enter your name..."
                    title="Name"
                    value={customer.name}
                    onChange={event =>
                        setNewCustomer({ ...customer, name: event.target.value })}
                />

                <textarea
                    placeholder="Enter important details"
                    title="Details"
                    value={customer.details}
                    onChange={event =>
                        setNewCustomer({ ...customer, details: event.target.value })}
                />

                <button onClick={handleAdd}>Send</button>
            </div>
        </>
    )
}

export default CustomersListed;

