import IEmoji from "../Interfaces/iemoji";

export class Emoji implements IEmoji {
    shortCode : string;
    staticUrl : string;
    emojiUrl : string;
    visibleInPicker : boolean;
    constructor(){
        
    }
}