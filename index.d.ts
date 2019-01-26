declare module "donjs" {
    interface IStatus {
        id: String,
        uri: String,
        url?: String,
        account: Account,
        inReplyTo?: String,
        inReplyToAccount?: String,
        reblog?: Status,
        content: String,
        createdAt: String,
        emojis: [Emoji],
        repliesCount: Number,
        reblogsCount: Number,
        favouritesCount: Number,
        reblogged?: Boolean,
        favourited?: Boolean,
        muted?: Boolean,
        sensitive: Boolean,
        spoilerText: String,
        visibility: String, //Change this in future to enum
        mediaAttachments: [Attachment],
        mentions: [Mention],
        tags: [ITag],
        card?: Card,
        application: Application,
        language?: String,
        pinned?: Boolean
    }

    interface IApplication {
        name: String,
        website: String
    }

    interface ITag {
        name: String,
        url: String,
        histroy?: History
    }

    interface IHistory {
        day: String,
        uses: Number,
        accounts: Number,
    }

    interface IMention {
        url: String,
        username: String,
        acct: String,
        id: String
    }

    interface IAccount {
        id: String,
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
        avatar: String,
        avatarStatic: String,
        header: String,
        headerStatic:String,
        emojis: [Emoji],
        moved?: Account,
        fields?: [Field],
        bot?: Boolean
    }

    interface IEmoji {
        shortcode: String,
        staticUrl: String,
        url: String,
        visibleInPicker: String,
    }

    interface IAttachment {
        id: String,
        type: String,
        url: String,
        remoteUrl: String,
        previewUrl: String,
        textUrl: String,
        meta: String,
        description: String
    }

    interface IField {
        name: String,
        value: String,
        verifiedAt?: String
    }

    interface IReport {

    }

    interface IContext {
        ancestors: [Status],
        descendants: [Status]
    }

    interface ICard {
        url: String,
        title: String,
        description: String,
        image?: String,
        type: String,
        authorName?: String,
        authorUrl?: String,
        providerName?: String,
        providerUrl?: String,
        html?: String,
        width?: Number,
        height?: Number,
    }

    interface IRelationship {
        id: String,
        following: Boolean,
        followedBy: Boolean,
        blocking: Boolean,
        muting: Boolean,
        mutingNotification: Boolean,
        requested: Boolean,
        domainBlocking: Boolean,
        showingReblogs: Boolean,
        endorsed: Boolean,
    }


    export class Client {
        constructor(token:String, apiUrl:String);
        public getInstance() : Client;
        public sendStatus(status:String, attachments:[Attachment], sensitive:Boolean, spoiler:Boolean): Promise<Status>;
        public getClientAccount():Promise<Account>;
        public getAccountByID(id:Number):Promise<Account>;
        public followRemoteAccount(uri:String):Promise<Account>;
        public uploadMedia(stream:String, description:String):Promise<Attachment>;//Edit this in future
        public getStatusByID(id:Number):Promise<Status>;
    }

    export class Status implements IStatus{
        id: String;    
        uri: String;
        url?: String;
        account: Account;
        inReplyTo?: String;
        inReplyToAccount?: String;
        reblog?: Status;
        content: String;
        createdAt: String;
        emojis: [Emoji];
        repliesCount: Number;
        reblogsCount: Number;
        favouritesCount: Number;
        reblogged?: Boolean;
        favourited?: Boolean;
        muted?: Boolean;
        sensitive: Boolean;
        spoilerText: String;
        visibility: String;
        mediaAttachments: [Attachment];
        mentions: [Mention];
        tags: [ITag];
        card?: Card;
        application: Application;
        language?: String;
        pinned?: Boolean;

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
        public getContext(): Promise<Context>;
        public getCard(): Promise<Card>;
    }

    export class Account implements IAccount {
        id: String;    
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
        avatar: String;
        avatarStatic: String;
        header: String;
        headerStatic: String;
        emojis: [Emoji];
        moved?: Account;
        fields?: [Field];
        bot?: Boolean;
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

    export class Attachment implements IAttachment {
        id: String;        
        type: String;
        url: String;
        remoteUrl: String;
        previewUrl: String;
        textUrl: String;
        meta: String;
        description: String;
        update(description:String):Attachment;
    }

    export class Card implements ICard {
        url: String;        
        title: String;
        description: String;
        image?: String | undefined;
        type: String;
        authorName?: String;
        authorUrl?: String;
        providerName?: String;
        providerUrl?: String;
        html?: String;
        width?: Number;
        height?: Number;
    }

    export class Context implements IContext {
        ancestors: [Status];
        descendants: [Status];
    }

    export class Relationship implements IRelationship {
        id: String;        
        following: Boolean;
        followedBy: Boolean;
        blocking: Boolean;
        muting: Boolean;
        mutingNotification: Boolean;
        requested: Boolean;
        domainBlocking: Boolean;
        showingReblogs: Boolean;
        endorsed: Boolean;
    }

    export class Mention implements IMention {
        url: String;       
        username: String;
        acct: String;
        id: String;
    }

    export class Emoji implements IEmoji {
        shortcode: String;        
        staticUrl: String;
        url: String;
        visibleInPicker: String;
    }

    export class Application implements IApplication {
        name: String;        
        website: String;
    }

    export class Tag implements ITag {
        name: String;      
        url: String;
        histroy?: History | undefined;
    }

    export class History implements IHistory {
        day: String;       
        uses: Number;
        accounts: Number;
    }

    export class Field implements IField {
        name: String;        
        value: String;
        verifiedAt?: String | undefined;
    }

}
