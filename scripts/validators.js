export const reDescription = /^\S(?:.*\S)?$/;
export const reAmount = /^(0|[1-9]\d*)(\.\d{1,2})?$/;
export const reDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/;
export const reCategory = /^[A-Za-z]+(?:[ -][A-Za-z]+)*$/;
export const reDuplicateWord = /\b(\w+)\s+\1\b/i;
