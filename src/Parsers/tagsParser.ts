import ITag from "../Interfaces/itag";
import { Tag } from "../Objects/tagObject";

export default function tagsParser(objects : any ) : ITag[] {
    let tags : ITag[] = [];
    for(let obj of objects){
        let tag : ITag = new Tag();
        tag.name = obj.name;
        tag.url = obj.url;
        tags.push(tag)
    }

    return tags;
}