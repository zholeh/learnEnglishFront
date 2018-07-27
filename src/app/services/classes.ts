import { ISentence } from './interfaces';
export class Sentence implements ISentence {

    constructor(public startSentence: string = '',
        public secretWord: string = '',
        public endSentence: string = '',
        public translate: string = '',
        public translateWord: string = '') {

    }
}

