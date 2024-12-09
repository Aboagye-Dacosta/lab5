import { AddOnsInterface } from "../types/add_ons"

export const addOns: {
    mo: AddOnsInterface[]
    yr: AddOnsInterface[]
} = {
    mo: [
        {
            planMode: "mo",
            amount: 1,
            description: "Access to multiplayer games",
            title: "Online service",
        },
        {
            planMode: "mo",
            amount: 2,
            description: "Extra 1TB of cloud save",
            title: "Larger storage",
        },
        {
            planMode: "mo",
            amount: 2,
            description: "Customizable profile",
            title: "Customizable profile",
        }
    ],
    yr: [
        {
            planMode: "yr",
            amount: 10,
            description: "Access to multiplayer games",
            title: "Online service",
        },
        {
            planMode: "yr",
            amount: 20,
            description: "Extra 1TB of cloud save",
            title: "Larger storage",
        },
        {
            planMode: "yr",
            amount: 20,
            description: "Customizable profile",
            title: "Customizable profile",
        }
    ],
}