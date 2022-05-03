// tagNames always return lowercase value
import { Query } from '../dto/query';

export default function getTagNames(tags: Query): string[] | null {
  if (tags === undefined || tags === null) return null;

  const unfilteredTagNames = Array.isArray(tags) ? tags : [tags];
  const filteredTagNames = unfilteredTagNames
    .filter((t): t is string => typeof t === 'string' && t !== '')
    .map((t) => {
      return t.toLowerCase();
    });
  const uniqueTagNames = [...new Set(filteredTagNames)];

  if (uniqueTagNames === undefined || uniqueTagNames.length === 0) {
    return null;
  } else {
    return uniqueTagNames;
  }
}
