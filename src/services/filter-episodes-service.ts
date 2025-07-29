import { PodcastTranferModel } from "../models/filter-podcast-model";
import { repositoryPodcast } from "../repositories/podcasts-repository";
import { QueryString } from "../utils/query-string";
import { StatusCode } from "../utils/status-code";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined):Promise<PodcastTranferModel> => {

    let responseFormat: PodcastTranferModel ={
        StatusCode: 0,
        body: [],
    }

    const queryString = podcastName?.split(QueryString.PODCASTNAME)[1] ?? '';
    const data = await repositoryPodcast(queryString);

    responseFormat.StatusCode = data.length !== 0 ? StatusCode.OK : StatusCode.NO_CONTENT;

    responseFormat.body = data;

    return responseFormat;
}