
import {ParentEntity } from './parentEntity.model';

export class UserModel extends ParentEntity {
    firstName?: string;
    secondName?: string;
    firstSurname?: string;
    secondSurname?: string;
    phone?: string;
    address?: string;
}
