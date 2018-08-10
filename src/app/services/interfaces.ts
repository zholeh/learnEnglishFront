export interface ISentence {
    startSentence: string;
    secretWord: string;
    endSentence: string;
    translate: string;
    translateWord: string;
}

export interface ISocialUser {
    provider: string;
    id: string;
    email: string;
    name: string;
    photoUrl: string;
    firstName: string;
    lastName: string;
    authToken: string;
    idToken: string;
}

export interface IErrorCodeServer {
    param: string;
    msg: string | Array<Object> | Object;
    value: any;
}

