import IAccount from "../Interfaces/Iaccount";
import IEmoji from "../Interfaces/iemoji";

export class Account implements IAccount{
    id : number;
    username : string;
    domain : string;
    displayName : string;
    locked : boolean;
    createdAt : number;
    followersCount : number;
    followingCount : number;
    statusesCount : number;
    note : string;
    url : string;
    avatar : string;
    avatarStatic : string;
    headerImage : string;
    headerStatic : string;
    emojis : IEmoji[];
    bot : boolean;

    constructor(){
        
    }

    toString() : string{
       return this.domain; 
    }  

}