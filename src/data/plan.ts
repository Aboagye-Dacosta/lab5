import { Plan } from "../types/plan_card";

export const plans: {
    mo: Plan[]
    yr: Plan[]
} = {
    mo: [
        {
            id: 1,
            plan: "Arcade",
            value: 9,
            discount: 0,
        },
        {
            id: 2,
            plan: "Advance",
            value: 12,
            discount: 0,
        },
        {
            id: 3,
            plan: "Pro",
            value: 15,
            discount: 0,
        }
    ],
    yr: [
        {
            id: 1,
            plan: "Arcade",
            value: 90,
            discount: 2,
        },
        {
            id: 2,
            plan: "Advance",
            value: 120,
            discount: 2,
        },
        {
            id: 3,
            plan: "Pro",
            value: 150,
            discount: 2,
        }
    ]
}

