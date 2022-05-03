import { Response } from 'express';
import { Query } from '../dto/query';
import getDate from './date';
import getListName from './list';
import getTagNames from './tags';

export function isTaskValid(task: Query, res: Response): boolean {
  if (Array.isArray(task)) {
    res.status(400).send({
      code: 'fail',
      error: { message: 'task-is-an-array' },
    });
    return false;
  } else if (typeof task !== 'string') {
    res.status(400).send({
      code: 'fail',
      error: { message: 'task-is-not-string' },
    });
    return false;
  } else if (task === '') {
    res.status(400).send({
      code: 'fail',
      error: { message: 'task-is-empty' },
    });
    return false;
  }
  return true;
}

export function isDateValid(date: Query, res: Response): boolean {
  if (Array.isArray(date)) {
    res.status(400).send({
      code: 'fail',
      error: { message: 'due-date-is-an-array' },
    });
    return false;
  } else if (
    typeof date === 'boolean' ||
    typeof date === 'number' ||
    (date !== '' && typeof date === 'string' && getDate(date) === null)
  ) {
    res.status(400).send({
      code: 'fail',
      error: { message: 'invalid-due-date-format' },
    });
    return false;
  }
  return true;
}

export function isListNameValid(list: Query, res: Response): boolean {
  if (Array.isArray(list)) {
    res.status(400).send({
      code: 'fail',
      error: { message: 'list-name-is-an-array' },
    });
    return false;
  } else if (
    typeof list === 'boolean' ||
    typeof list === 'number' ||
    (list !== '' && typeof list === 'string' && getListName(list) === null)
  ) {
    res.status(400).send({
      code: 'fail',
      error: { message: 'list-name-is-not-string' },
    });
    return false;
  }
  return true;
}

export function isTagNamesValid(tag: Query, res: Response): boolean {
  if (getTagNames(tag) === null) {
    res.status(400).send({
      code: 'fail',
      error: { message: 'invalid-tag-names' },
    });
    return false;
  }
  return true;
}

export function isIsDoneValid(
  isDone: boolean | undefined,
  res: Response
): boolean {
  if (isDone === undefined) {
    return true;
  } else if (typeof isDone !== 'boolean') {
    res.status(400).send({
      code: 'fail',
      error: { message: 'is-done-is-not-boolean' },
    });
    return false;
  }
  return true;
}

export function isIdValid(id: any, res: Response): boolean {
  if (Number.isNaN(Number(id)) || id === null) {
    res.status(400).send({
      code: 'fail',
      error: { message: 'invalid-id' },
    });
    return false;
  }
  return true;
}
