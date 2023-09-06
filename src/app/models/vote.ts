import { Colleague } from './colleague';
import { LikeHate } from './like-hate';

export interface Vote {
    id: number;
    colleague: Colleague;
    vote: LikeHate;
    scoreAfterVote: number;

}
