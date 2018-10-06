import IMention from "../Interfaces/imention";
import { Mention } from "../Objects/mentionObject";

export default function mentionsParser(objects : any) : IMention[] {
    let mentions : IMention[] = [];
    for(let obj of objects){
        let mention : IMention = new Mention();
        mention.domain = obj.acct;
        mention.id = obj.id;
        mention.url = obj.url;
        mention.username = obj.username;
        // add the ability to get the user object after adding the get account request
        mentions.push(mention);
    }
    return mentions;
}