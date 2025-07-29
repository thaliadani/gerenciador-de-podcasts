import { repositoryPodcast } from "../repositories/podcasts-repository";
import { QueryString } from "../utils/query-string";

export const serviceFilterEpisodes = async (
    podcastName: string | undefined) =>{
    const queryString = podcastName?.split(QueryString.PODCASTNAME)[1] ?? '';
    
    const data = await repositoryPodcast(queryString);
    
    return data;
}