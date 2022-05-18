const UrlParser = {
  parseActiveUrlWithCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    const splitedUrl = this.urlSplitter(url);
    return this.urlCombiner(splitedUrl);
  },

  parseActiveUrlWithoutCombiner() {
    const url = window.location.hash.slice(1).toLowerCase();
    return this.urlSplitter(url);
  },

  urlSplitter(url) {
    const urlsSplits = url.split('/');
    return {
      resource: urlsSplits[1] || null,
      id: urlsSplits[2] || null,
      verb: urlsSplits[3] || null,
    };
  },

  urlsSplitterAllVerb(url){
    return url.split('/');
  },

  urlCombiner(splitedUrl) {
    return (splitedUrl.resource ? `/${splitedUrl.resource}` : '/')
    + (splitedUrl.id ? '/:id' : '')
    + (splitedUrl.verb ? `/${splitedUrl.verb}` : '');
  },
};

export default UrlParser;
