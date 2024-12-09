import { routes } from "../routes";

export const getNextPage = (currentLocation: string) => {

    switch (currentLocation) {
        case routes.info:
            return routes.plan;
        case routes.plan:
            return routes.addOns;
        case routes.addOns:
            return routes.summary;
        case routes.summary:
            return routes.success;
        default:
            return routes.notFound;
    }
}