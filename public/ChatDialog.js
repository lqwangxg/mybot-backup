class ChatDialog {
  constructor(user, reply_user, origin_user) {
    this.user = "bot"; //左側は必ずchatbot
    this.reply_user = user != "bot" ? user : reply_user;
    this.origin_user = origin_user;
    this.title = origin_user ? origin_user : this.reply_user;
    this.notice = {
      info: 0,
      warn: 0,
      count: this.info + this.warn,
      type: this.warn > 0 ? "warning" : "primary"
    }
    this.message_list = [];
  }

  isMe(msg) {
    if (this.origin_user) {
      if (msg.origin_user) {
        return this.origin_user === msg.origin_user;
      }
      if (typeof (msg) === "string") {
        return this.origin_user === msg;
      }
    }
    if (this.reply_user) {
      if (msg.reply_user) {
        return this.reply_user === msg.reply_user;
      }
      if (msg.user) {
        return this.reply_user === msg.user;
      }
      if (typeof (msg) === "string") {
        return this.reply_user === msg;
      }
    }

    return false;
  }
}