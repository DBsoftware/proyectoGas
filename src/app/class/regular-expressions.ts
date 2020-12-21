export class RegularExpressions {
  /** Only letters spaces, and ñ */
  public static get  ALPHABETIC_SPANISH_REGEX(): string {
    return '[A-Za-z ñ]+';
  }
  /* Only letters ñ numbers and spaces */
  public static  get ALPHA_NUMERIC_REGEX(): string { return '^[a-zA-Z0-9\\-_ ]{0,250}$'; }

  /* Only letters numbers and punctuation marks */
  public  static  get ALPHA_NUMERIC_REGEX_AND_PUNTUACTION(): string { return '^[a-zA-Z\\d\\-_\\s{}"();:,\\[\\]áéíóúäëïöüñ.]+$'; }
  /** Only numbers of 0-9 */
  public static  get NUMBER_REGEX(): string { return '^-?[0-9]+$'; }
  /** Only letters numbers before @ and after @ letters . letters */
  public static  get EMAIL_REGEX(): string {
    return '(?:[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\\])';
  }
  public static  get PASSWORD_REGEX_PATTERN(): string {
    return '(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&#=+])[A-Za-z\\d$@$!%*?&#=+].{8,}';
  }
}
