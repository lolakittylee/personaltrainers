import { Stack, TextField, Typography } from "@mui/material";
import type { Customer } from "../types";
import { useState } from "react";



function CustomersListed() {
    const [customer, setNewCustomer] = useState<Customer>({
        id: "",
        name: "",
        details: ""
    });

    const [customers, setCustomers] = useState<Customer[]>([]);


    return (
        <>
            <div>
                <Typography variant="h1">Customers?</Typography>
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

                        <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Feedback</th>
                    </tr>
                </thead>

                <tbody>
                    {customers.map((feedbackRow: Customer, index)=>
                    
                    <tr key = {index}>
                        <td>{feedbackRow.name}</td>
                        <td>{feedbackRow.details}</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </>
    )
}

export default CustomersListed;

