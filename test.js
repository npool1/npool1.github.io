function firstNotRepeatingCharacter(s) {
    for (var i = 0; i < s.length; i++) {
      if (s.indexOf(str.charAt(i)) == str.lastIndexOf(str.charAt(i))){
        return s[i];
      }
      else{
        return "_";
      }
    }
}