interface IStatus {
    id: Number,
    uri: String,
    url: String,
    account: IAccount,
    inReplyTo: Number,
    inReplyToAccount: Number,
    reblog: IStatus,
    content: String,
    createdAt: String,
    emojis: [IEmoji],
    repliesCount: Number,
    reblogsCount: Number,
    favouritesCount: Number,
    reblogged: Boolean,
    favourited: Boolean,
    muted: Boolean,
    sensitive: Boolean,
    spoilerText: String,
    visibility: String, //Change this in future to enum
    mediaAttachments: [IAttachment],
    mentions: [IMention],
    tags: [ITag],
    application: IApplication,
    language: String,
    pinned: Boolean
}

interface IApplication {

}

interface ITag {

}

interface IMention {

}

interface IAccount {
    id: Number,
    username: String,
    acct: String,
    displayName: String,
    locked: Boolean,
    createdAt: String,
    followersCount: Number,
    followingCount: Number,
    statusesCount: Number,
    note: String,
    url: String,
    acatar: String,
    avatarStatic: String,
    header: String,
    headerStatic:String,
    emojis: [IEmoji],
    moved: Boolean,
    fields: String, // Add field data type later
    bot: Boolean
}

interface IEmoji {

}

interface IAttachment {

}

interface IReport {

}

interface IContext {

}

interface ICard {

}

interface IRelationship {

}

export class Status implements IStatus{
    id: Number;    uri: String;
    url: String;
    account: IAccount;
    inReplyTo: Number;
    inReplyToAccount: Number;
    reblog: IStatus;
    content: String;
    createdAt: String;
    emojis: [IEmoji];
    repliesCount: Number;
    reblogsCount: Number;
    favouritesCount: Number;
    reblogged: Boolean;
    favourited: Boolean;
    muted: Boolean;
    sensitive: Boolean;
    spoilerText: String;
    visibility: String;
    mediaAttachments: [IAttachment];
    mentions: [IMention];
    tags: [ITag];
    application: IApplication;
    language: String;
    pinned: Boolean;

    public reply(status:String, sensitive:Boolean, spoiler:Boolean): Promise<IStatus>
    public delete(): void;
    public reblogStatus(): Promise<Status>;
    public unreblogStatus(): Promise<Status>;
    public favouriteStatus(): Promise<Status>;
    public unfavouriteStatus(): Promise<Status>;
    public pinStatus(): Promise<Status>;
    public unpinStatus(): Promise<Status>;
    public muteStatus(): Promise<Status>;
    public unmuteStatus(): Promise<Status>;
    public report(comment:String): Promise<IReport>;
    public getContext(): Promise<IContext>;
    public getCard(): Promise<ICard>;
}

export class Account implements IAccount {
    id: Number;    
    username: String;
    acct: String;
    displayName: String;
    locked: Boolean;
    createdAt: String;
    followersCount: Number;
    followingCount: Number;
    statusesCount: Number;
    note: String;
    url: String;
    acatar: String;
    avatarStatic: String;
    header: String;
    headerStatic: String;
    emojis: [IEmoji];
    moved: Boolean;
    fields: String;
    bot: Boolean;
    public getFollowers(limit?:Number):Promise<[Account]>;
    public getFollowing(limit?:Number):Promise<[Account]>;
    public getStatuses(limit?:Number, mediaOnly?:Boolean, pinned?:Boolean, excludeReply?:Boolean): Promise<[Status]>;
    public followAccount(showReblog?:Boolean):Promise<IRelationship>;
    public unfollowAccount():Promise<IRelationship>;
    public blockAccount():Promise<IRelationship>;
    public unblockAccount():Promise<IRelationship>;
    public endorsingAccount():Promise<IRelationship>;
    public unendorsingAccount():Promise<IRelationship>;
    public muteAccount():Promise<IRelationship>;
    public unmuteAccount():Promise<IRelationship>;
    public getRelationship():Promise<IRelationship>;
    
}