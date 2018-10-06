import IEmoji from "../Interfaces/iemoji";
import { Emoji } from "../Objects/emojiObject";

export default function emojisParser(objects : any) : IEmoji[]
{
    let emojisList : IEmoji[] = [];
    for(let obj of objects)
    {
        let emoji : IEmoji = new Emoji();
        emoji.shortCode = obj.shortcode;
        emoji.staticUrl = obj.static_url;
        emoji.emojiUrl = obj.url;
        emoji.visibleInPicker = obj.visible_in_picker;
        emojisList.push(emoji);
    }
    return emojisList;
}