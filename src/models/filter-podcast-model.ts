import { PodcastModel } from "./podcasts-module";

export interface PodcastTranferModel {
    StatusCode: number;
    body:PodcastModel[];
}