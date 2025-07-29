import fs from 'fs';
import path from 'path';
import { PodcastModel } from '../models/podcasts-module';
import { PathData } from '../utils/path-data';

const pathData = path.join(__dirname, PathData.JSON);

export const repositoryPodcast = async (
    podcastName?:string

): Promise<PodcastModel[]> => {

    const language = "utf-8";   

    const rawData = fs.readFileSync(pathData, language);
    let jsonFile = JSON.parse(rawData);

    if (podcastName) {
        jsonFile = jsonFile.filter((podcast:PodcastModel) => podcast.podcastName === podcastName);
    }
    
    return jsonFile;
}