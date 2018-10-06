import IAttachment from "../Interfaces/iattachment";
import { Attachment } from "../Objects/attachmentObject";

export default function attachmentsParser(objects : any) : IAttachment[] {
    let attachments : IAttachment[] = [];
    for(let obj of objects){
        let attachment : IAttachment = new Attachment();
        attachment.id = obj.id;
        attachment.type = obj.type;
        attachment.remoteUrl = obj.remote_url;
        attachment.previewUrl = obj.preview_url;
        attachment.textUrl = obj.text_url;
        attachment.description = obj.description;
        attachments.push(attachment);
    }
    return attachments;
}