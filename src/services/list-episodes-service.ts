import { PodcastTranferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { StatusCode } from "../utils/status-code";

export const serviceListEpisodes = async (): Promise<PodcastTranferModel> => {
    let responseFormat: PodcastTranferModel = {
        StatusCode: 0,
        body: [],
    };

    const data = await repositoryPodcast();

    responseFormat = {
        StatusCode: data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT,
        body: data,
    }

    return responseFormat;
}