import { SetMetadata } from '@nestjs/common';

import { RolesEnum } from 'src/shared/enums/role.enum';
import { ROLES_KEY } from 'src/shared/helpers/roles-key';

export const Roles = (...roles: RolesEnum[]) => SetMetadata(ROLES_KEY, roles);
