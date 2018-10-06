import IAttachment from "../Interfaces/iattachment";

export class Attachment implements IAttachment {
    id : number;
    type : string;
    url : string;
    remoteUrl : string;
    previewUrl : string;
    textUrl : string;
    description : string;
    constructor(){
        
    }
}