import * as http from "http";
import { HttpMethod } from "./utils/http-methods";
import { QueryString } from "./utils/query-string";
import { Routes } from "./routes/routes";
import { getFilterEpisodes, getListEpisodes } from './controllers/podcasts-controller';

export const app = async (request: http.IncomingMessage, response: http.ServerResponse) => {

    const [baseUrl, queryString] = request.url?.split(QueryString.SERVER) ?? '';

    if (request.method === HttpMethod.GET && baseUrl === Routes.LIST) {
        await getListEpisodes(request, response);
    }

    if (request.method === HttpMethod.GET && baseUrl === Routes.EPISODE) {
        await getFilterEpisodes(request, response);
    }
}