export function isEmail(str) {
  return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(str);
}

function isMinLengthCheckPassed(password) {
  return password.length >= 8;
}

function isSpecialCharacterCheckPassed(password) {
  return /[@#$%^&*!]/.test(password);
}

function isCapitalAlphabetPresenceCheckPassed(password) {
  return /[A-Z]/.test(password);
}

function isNumberPresenceCheckPassed(password) {
  return /[0-9]/.test(password);
}

export function strongPasswordCheck(password) {
  return {
    minLength: isMinLengthCheckPassed(password),
    upperCase: isCapitalAlphabetPresenceCheckPassed(password),
    number: isNumberPresenceCheckPassed(password),
    special: isSpecialCharacterCheckPassed(password),
  };
}
