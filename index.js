class Formatter {
  //add static methods here
  static capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9-' ]/gi, "");
  }

  static titleize(title) {
    let exception = [
      "the",
      "a",
      "an",
      "but",
      "of",
      "and",
      "for",
      "at",
      "by",
      "from",
    ];
    let arr = title.split(" ");

    return arr
      .map((word, i) => {
        if (exception.includes(word) && i != 0) {
          return word;
        } else {
          return word[0].toUpperCase() + word.slice(1);
        }
      })
      .join(" ");
  }
}
