class Relationship {
    constructor(data) {
        this.id = data.id;
        this.following = data.following;
        this.followedBy = data.followed_by;
        this.blocking = data.blocking;
        this.muting = data.muting;
        this.mutingNotifications = data.muting_notifications;
        this.requested = data.requested;
        this.domainBlocking = data.domain_blocking;
        this.showingReblogs = data.showing_reblogs;
        this.endorsed = data.endorsed;
    }
}

module.exports = {
    Relationship
}