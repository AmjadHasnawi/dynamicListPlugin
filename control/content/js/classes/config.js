class Config {
  constructor(dataObj = {}) {
    this.pluginData = dataObj.pluginData || {};
    this.querystring = dataObj.querystring || '';
    this.privacy = dataObj.privacy ||'public';
    this.writePrivacy = dataObj.writePrivacy ||'public';
    this.writePrivacyTag = dataObj.writePrivacyTag || null;
    this.indicator = dataObj.indicator || 'image';
    this.contentType = dataObj.contentType || 1;
    this.emptyState = dataObj.emptyState || false;
    this.emptyStateMessage = dataObj.emptyStateMessage ||'Create your first group now!';
  }

  static get PRIVACY() {
    return {
      PUBLIC: 'public',
      PRIVATE: 'private',
      BOTH: 'both'
    }
  }

  static get WRITE_PRIVACY() {
    return {
      PUBLIC: 'public',
      PRIVATE: 'private'
    }
  }

  static get INDICATOR() {
    return {
      IMAGE: 'image',
      COLOR: 'color'
    }
  }

  static get() {
    return new Promise((resolve, reject) => {
      buildfire.datastore.get( "configs", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

  save() {
    return new Promise((resolve, reject) => {
      buildfire.datastore.save(this, "configs", (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  }

}