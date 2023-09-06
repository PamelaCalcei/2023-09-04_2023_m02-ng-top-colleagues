import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'score'
})
export class ScorePipe implements PipeTransform {

  transform(scoreVal: number): string {
    let formattedScore = '';
    if (scoreVal > 0) {
      formattedScore = `+ ${scoreVal}`;
    } else if (scoreVal < 0) {
      formattedScore = `- ${Math.abs(scoreVal)}`;
    } else {
      formattedScore = '0';
    }
    return formattedScore;
  }

}
