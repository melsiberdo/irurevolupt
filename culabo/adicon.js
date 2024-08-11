createToken('XRANGEPLAINLOOSE', 
  "[v=\\s]*(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" +
  "(?:\\.(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" +
  "(?:\\.(" + src[t.XRANGEIDENTIFIERLOOSE] + ")" +
  "(?:" + src[t.PRERELEASELOOSE] + ")?" +
  src[t.BUILD] + ")?"
);
