import { ISentence, ISocialUser, IErrorCodeServer } from './interfaces';

export class Sentence implements ISentence {

    constructor(public startSentence: string = '',
        public secretWord: string = '',
        public endSentence: string = '',
        public translate: string = '',
        public translateWord: string = '') {

    }
}

export class SocialUser implements ISocialUser {

    constructor(
        public provider: string = '',
        public id: string = '',
        public email: string = '',
        public name: string = '',
        public firstName: string = '',
        public lastName: string = '',
        public authToken: string = '',
        public idToken: string = '',
        public photoUrl: string = '') {
    }
}

export class ErrorCodeServer implements IErrorCodeServer {

    constructor(
        public statusCode: string,
        public description: string,
    ) { }
}


export class ErrorsCodeServer {

    private errors: ErrorCodeServer[] = [];
    private fillCode() {
        this.errors.push(new ErrorCodeServer('500.1', 'Account with that email address already exists.'));
    }

    constructor(

    ) { }

    public getErrorByCode(code: string): ErrorCodeServer {

        if (this.errors.length === 0) {
            this.fillCode();
        }
        let res: ErrorCodeServer;
        for (let i = 0; i < this.errors.length; i++) {
            if (this.errors[i].statusCode === code) {
                res = this.errors[i];
                break;
            }
        }
        return res;
    }
}
